/**
 * Next.js Instrumentation for OpenTelemetry and Performance Monitoring
 * This file is automatically called by Next.js on server startup
 */

export async function register() {
  // Only enable instrumentation in production
  if (process.env.NODE_ENV === 'production') {
    try {
      // Example: Initialize OpenTelemetry (if using a service like Datadog, New Relic, etc.)
      // await import('./lib/telemetry')
      
      console.log('🔍 Instrumentation initialized for production')
    } catch (error) {
      console.error('❌ Failed to initialize instrumentation:', error)
    }
  }
  
  // Development-only monitoring
  if (process.env.NODE_ENV === 'development') {
    console.log('🛠️  Development instrumentation loaded')
  }
}

// Optional: onRequestError hook for error tracking
export async function onRequestError(
  error: unknown,
  request: {
    path: string
    method: string
    headers: Record<string, string>
  }
) {
  if (process.env.NODE_ENV === 'production') {
    // Log errors to your monitoring service
    console.error('Request error:', {
      error: error instanceof Error ? error.message : error,
      path: request.path,
      method: request.method,
      timestamp: new Date().toISOString(),
    })
    
    // Example: Send to error tracking service
    // await sendErrorToService(error, request)
  }
}