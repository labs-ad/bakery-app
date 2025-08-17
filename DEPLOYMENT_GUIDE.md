# Bakery App Production Deployment Guide

## Prerequisites

- Google Cloud account with billing enabled
- Domain name (purchased or available)
- Google Cloud CLI installed and authenticated
- Docker installed (optional, Cloud Build will handle this)

## Overview

This guide will deploy your Next.js bakery app with the following architecture:

- **Domain** → **Cloud Load Balancer** → **Cloud Armor** → **Cloud Run**
- **SSL/TLS encryption** throughout
- **DDoS protection** and security policies
- **Auto-scaling** and high availability

---

## Step 1: Domain and DNS Setup

### 1.1 Purchase Domain (if needed)

- Use Google Domains, Namecheap, GoDaddy, or any registrar
- For this guide, we'll use `yourdomain.com` - replace with your actual domain

### 1.2 Set up Cloud DNS

```bash
# Create a managed DNS zone
gcloud dns managed-zones create bakery-zone \
  --dns-name=yourdomain.com \
  --description="Bakery app DNS zone"

# Get the nameservers
gcloud dns managed-zones describe bakery-zone \
  --format="value(nameServers[].join(' '))"
```

### 1.3 Update Domain Nameservers

1. Log into your domain registrar
2. Find DNS/Nameserver settings
3. Replace existing nameservers with the ones from Step 1.2
4. Save changes (propagation takes 24-48 hours)

---

## Step 2: Google Cloud Project Setup

### 2.1 Create New Project

```bash
# Create project (replace bakery-app-prod with your preferred name)
gcloud projects create bakery-app-prod --name="Bakery App Production"

# Set as active project
gcloud config set project bakery-app-prod

# Enable billing (required - do this in Cloud Console)
echo "⚠️  Enable billing for this project in Cloud Console before continuing"
```

### 2.2 Enable Required APIs

```bash
# Enable all necessary Google Cloud APIs
gcloud services enable run.googleapis.com
gcloud services enable compute.googleapis.com
gcloud services enable dns.googleapis.com
gcloud services enable certificatemanager.googleapis.com
gcloud services enable cloudbuild.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

### 2.3 Set Default Region

```bash
# Set default region (choose closest to your users)
gcloud config set run/region us-central1
gcloud config set compute/region us-central1
```

---

## Step 3: Prepare Your Next.js App

### 3.1 Create Dockerfile

Create `Dockerfile` in your project root:

```dockerfile
# Use the official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Start the application
CMD ["npm", "start"]
```

### 3.2 Create .dockerignore

Create `.dockerignore` in your project root:

```
node_modules
.next
.git
.env.local
.env.*.local
README.md
.gitignore
.dockerignore
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.DS_Store
*.tgz
.nyc_output
coverage/
```

### 3.3 Update package.json (if needed)

Ensure your `package.json` has the correct start script:

```json
{
  "scripts": {
    "start": "next start",
    "build": "next build"
  }
}
```

---

## Step 4: Deploy to Cloud Run

### 4.1 Build and Deploy

```bash
# Deploy directly from source (Cloud Build will handle containerization)
gcloud run deploy bakery-app \
  --source . \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --memory 1Gi \
  --cpu 1 \
  --max-instances 10 \
  --min-instances 0 \
  --port 3000 \
  --set-env-vars="NODE_ENV=production"
```

### 4.2 Note the Service URL

After deployment, save the Cloud Run service URL (format: `https://bakery-app-xxxxx-uc.a.run.app`)

---

## Step 5: Set up SSL Certificate

### 5.1 Create Managed SSL Certificate

```bash
# Create SSL certificate for your domain (replace yourdomain.com)
gcloud compute ssl-certificates create bakery-ssl-cert \
  --domains=yourdomain.com,www.yourdomain.com \
  --global

# Check certificate status (should show PROVISIONING initially)
gcloud compute ssl-certificates describe bakery-ssl-cert --global
```

**Important**: Certificate provisioning takes 15-60 minutes and requires DNS to be pointing to your load balancer.

---

## Step 6: Configure Load Balancer

### 6.1 Create Network Endpoint Group (NEG)

```bash
# Create NEG for Cloud Run service
gcloud compute network-endpoint-groups create bakery-neg \
  --region=us-central1 \
  --network-endpoint-type=serverless \
  --cloud-run-service=bakery-app
```

### 6.2 Create Backend Service

```bash
# Create backend service
gcloud compute backend-services create bakery-backend \
  --global \
  --load-balancing-scheme=EXTERNAL_MANAGED

# Add NEG to backend service
gcloud compute backend-services add-backend bakery-backend \
  --global \
  --network-endpoint-group=bakery-neg \
  --network-endpoint-group-region=us-central1
```

### 6.3 Create URL Map

```bash
# Create URL map
gcloud compute url-maps create bakery-url-map \
  --default-service=bakery-backend
```

### 6.4 Create HTTPS Proxy

```bash
# Create HTTPS proxy
gcloud compute target-https-proxies create bakery-https-proxy \
  --url-map=bakery-url-map \
  --ssl-certificates=bakery-ssl-cert
```

### 6.5 Create HTTP to HTTPS Redirect

```bash
# Create redirect URL map
gcloud compute url-maps create bakery-redirect-map \
  --default-url-redirect-response-code=301 \
  --default-url-redirect-https-redirect

# Create HTTP proxy
gcloud compute target-http-proxies create bakery-http-proxy \
  --url-map=bakery-redirect-map
```

### 6.6 Create Forwarding Rules

```bash
# HTTPS forwarding rule
gcloud compute forwarding-rules create bakery-https-forwarding-rule \
  --global \
  --target-https-proxy=bakery-https-proxy \
  --ports=443

# HTTP forwarding rule (for redirect)
gcloud compute forwarding-rules create bakery-http-forwarding-rule \
  --global \
  --target-http-proxy=bakery-http-proxy \
  --ports=80

# Get the load balancer IP address
gcloud compute forwarding-rules describe bakery-https-forwarding-rule \
  --global \
  --format="value(IPAddress)"
```

**Save the IP address** - you'll need it for DNS configuration.

---

## Step 7: Configure Cloud Armor Security

### 7.1 Create Security Policy

```bash
# Create security policy
gcloud compute security-policies create bakery-security-policy \
  --description="Security policy for bakery app"
```

### 7.2 Add Rate Limiting Rule

```bash
# Add rate limiting (100 requests per minute per IP)
gcloud compute security-policies rules create 1000 \
  --security-policy=bakery-security-policy \
  --expression="true" \
  --action=rate-based-ban \
  --rate-limit-threshold-count=100 \
  --rate-limit-threshold-interval-sec=60 \
  --ban-duration-sec=600 \
  --conform-action=allow \
  --exceed-action=deny-429 \
  --enforce-on-key=IP
```

### 7.3 Add Geographic Restrictions (Optional)

```bash
# Block traffic from specific countries (example: blocking CN, RU)
gcloud compute security-policies rules create 2000 \
  --security-policy=bakery-security-policy \
  --expression="origin.region_code == 'CN' || origin.region_code == 'RU'" \
  --action=deny-403 \
  --description="Block specific countries"
```

### 7.4 Add SQL Injection Protection

```bash
# Block common SQL injection patterns
gcloud compute security-policies rules create 3000 \
  --security-policy=bakery-security-policy \
  --expression="has(request.headers['user-agent']) && request.headers['user-agent'].contains('sqlmap')" \
  --action=deny-403 \
  --description="Block SQL injection tools"
```

### 7.5 Apply Security Policy

```bash
# Apply policy to backend service
gcloud compute backend-services update bakery-backend \
  --security-policy=bakery-security-policy \
  --global
```

---

## Step 8: Configure DNS Records

### 8.1 Create DNS Records

```bash
# Start DNS transaction
gcloud dns record-sets transaction start --zone=bakery-zone

# Add A record for root domain (replace LOAD_BALANCER_IP with your IP)
gcloud dns record-sets transaction add [LOAD_BALANCER_IP] \
  --name=yourdomain.com. \
  --ttl=300 \
  --type=A \
  --zone=bakery-zone

# Add A record for www subdomain
gcloud dns record-sets transaction add [LOAD_BALANCER_IP] \
  --name=www.yourdomain.com. \
  --ttl=300 \
  --type=A \
  --zone=bakery-zone

# Execute transaction
gcloud dns record-sets transaction execute --zone=bakery-zone
```

### 8.2 Verify DNS Records

```bash
# Check DNS records
gcloud dns record-sets list --zone=bakery-zone

# Test DNS resolution (may take time to propagate)
nslookup yourdomain.com
```

---

## Step 9: Verification and Testing

### 9.1 Wait for SSL Certificate

```bash
# Check SSL certificate status (wait for ACTIVE)
gcloud compute ssl-certificates describe bakery-ssl-cert --global

# This may take 15-60 minutes
```

### 9.2 Test Your Deployment

1. **HTTP to HTTPS redirect**: Visit `http://yourdomain.com` - should redirect to HTTPS
2. **HTTPS access**: Visit `https://yourdomain.com` - should load your app
3. **WWW subdomain**: Visit `https://www.yourdomain.com` - should work
4. **SSL certificate**: Check browser shows secure connection

### 9.3 Test Security Features

```bash
# Test rate limiting (run this multiple times quickly)
for i in {1..150}; do
  curl -s -o /dev/null -w "%{http_code}\n" https://yourdomain.com
done
```

After ~100 requests, you should see `429` responses.

---

## Step 10: Production Optimization

### 10.1 Enable Cloud CDN (Optional)

```bash
# Enable CDN for better performance
gcloud compute backend-services update bakery-backend \
  --enable-cdn \
  --global
```

### 10.2 Set up Monitoring

```bash
# Create uptime check
gcloud monitoring uptime create bakery-uptime \
  --display-name="Bakery App Uptime" \
  --http-check-path="/" \
  --hostname="yourdomain.com" \
  --port=443 \
  --use-ssl
```

### 10.3 Set up Logging

```bash
# Enable access logs for load balancer
gcloud compute backend-services update bakery-backend \
  --enable-logging \
  --logging-sample-rate=1.0 \
  --global
```

---

## Maintenance and Updates

### Updating Your App

```bash
# Deploy new version
gcloud run deploy bakery-app \
  --source . \
  --platform managed \
  --region us-central1
```

### Adding New Domains

```bash
# Create new SSL certificate
gcloud compute ssl-certificates create bakery-ssl-cert-v2 \
  --domains=yourdomain.com,www.yourdomain.com,api.yourdomain.com \
  --global

# Update HTTPS proxy
gcloud compute target-https-proxies update bakery-https-proxy \
  --ssl-certificates=bakery-ssl-cert-v2
```

### Scaling Configuration

```bash
# Update Cloud Run service limits
gcloud run services update bakery-app \
  --memory=2Gi \
  --cpu=2 \
  --max-instances=50 \
  --region=us-central1
```

---

## Security Best Practices

1. **Regular Updates**: Keep your app dependencies updated
2. **Environment Variables**: Use Secret Manager for sensitive data
3. **IAM**: Use principle of least privilege
4. **Monitoring**: Set up alerts for unusual traffic patterns
5. **Backups**: Implement database backups if using persistent storage
6. **Audit Logs**: Enable and review audit logs regularly

---

## Troubleshooting

### SSL Certificate Issues

- Ensure DNS is pointing to load balancer
- Wait 15-60 minutes for provisioning
- Check domain validation

### 502/503 Errors

- Check Cloud Run service logs
- Verify service is running and healthy
- Check backend service configuration

### DNS Issues

- Verify nameservers are updated
- Wait for DNS propagation (up to 24 hours)
- Use `dig` or `nslookup` to test

### Rate Limiting Too Aggressive

```bash
# Update rate limiting rule
gcloud compute security-policies rules update 1000 \
  --security-policy=bakery-security-policy \
  --rate-limit-threshold-count=500
```

---

## Cost Optimization

1. **Cloud Run**: Scales to zero when not in use
2. **Load Balancer**: Fixed cost ~$18/month + data transfer
3. **Cloud Armor**: $1/month per policy + $0.75 per million requests
4. **DNS**: $0.20 per million queries after first million
5. **SSL Certificates**: Free managed certificates

### Monitor Costs

```bash
# Set up billing budget alerts in Cloud Console
echo "Set up billing alerts at: https://console.cloud.google.com/billing/budgets"
```

---

## Next Steps

After successful deployment:

1. Set up monitoring and alerting
2. Configure custom domain email
3. Implement CI/CD pipeline
4. Add database if needed
5. Set up staging environment
6. Configure backup strategies

---

## Support

- **Google Cloud Documentation**: https://cloud.google.com/docs
- **Cloud Run**: https://cloud.google.com/run/docs
- **Load Balancing**: https://cloud.google.com/load-balancing/docs
- **Cloud Armor**: https://cloud.google.com/armor/docs

**Remember**: Replace all instances of `yourdomain.com` with your actual domain name throughout this guide.
