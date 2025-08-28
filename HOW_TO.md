# Bakery App - How To Guides

This document contains step-by-step guides for common development and deployment tasks.

---

## Docker Image Build and Push

Build and push Docker images to Google Cloud Artifact Registry.

### Prerequisites

- Docker installed and running on your local machine
- Access to the AD Labs Google Cloud Project
- Internet connection for downloading dependencies

### Setup Google Cloud SDK

#### Step 1: Install Google Cloud CLI

Download and install the Google Cloud CLI from: https://cloud.google.com/sdk/docs/install

#### Step 2: Initialize and Configure

1. **Initialize gcloud CLI:**
   ```bash
   gcloud init
   ```

2. **Set the project ID:**
   ```bash
   gcloud config set project PROJECT_ID
   ```
   > **Note:** Replace `PROJECT_ID` with the actual AD Labs project ID from the Google Cloud Console.

#### Step 3: Authenticate Docker

Configure Docker to use gcloud as a credential helper:
```bash
gcloud auth configure-docker asia-south2-docker.pkg.dev
```

### Build Docker Image

Navigate to the project root directory and build the image:

```bash
docker build -t bakery-app:[YOUR_TAG] .
```

**Example:**
```bash
docker build -t bakery-app:v1.0.0 .
```

### Tag Image for Artifact Registry

Tag the image with the full registry path:

```bash
docker tag bakery-app:[YOUR_TAG] asia-south2-docker.pkg.dev/[PROJECT_ID]/ad-labs-artifact-registry-asia-south2/bakery-app:[YOUR_TAG]
```

**Example:**
```bash
docker tag bakery-app:v1.0.0 asia-south2-docker.pkg.dev/my-project-123/ad-labs-artifact-registry-asia-south2/bakery-app:v1.0.0
```

> **Registry Configuration:** The repository is currently configured for single-region deployment in `asia-south2`.

### Push to Google Artifact Registry

Push the tagged image to the registry:

```bash
docker push asia-south2-docker.pkg.dev/[PROJECT_ID]/ad-labs-artifact-registry-asia-south2/bakery-app:[YOUR_TAG]
```

**Example:**
```bash
docker push asia-south2-docker.pkg.dev/my-project-123/ad-labs-artifact-registry-asia-south2/bakery-app:v1.0.0
```

### Complete Example Workflow

Here's a complete example with sample values:

```bash
# Build the image
docker build -t bakery-app:v1.0.0 .

# Tag for registry
docker tag bakery-app:v1.0.0 asia-south2-docker.pkg.dev/my-project-123/ad-labs-artifact-registry-asia-south2/bakery-app:v1.0.0

# Push to registry
docker push asia-south2-docker.pkg.dev/my-project-123/ad-labs-artifact-registry-asia-south2/bakery-app:v1.0.0
```

---

<!-- Add new How-To guides below this line -->
