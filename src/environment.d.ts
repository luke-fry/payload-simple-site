declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PAYLOAD_SECRET: string
      DATABASE_URL: string
      NEXT_PUBLIC_SERVER_URL: string
      VERCEL_PROJECT_PRODUCTION_URL: string
      VERCEL_URL: string

      S3_BUCKET: string
      S3_REGION: string
      S3_ACCESS_KEY_ID: string
      S3_SECRET_ACCESS_KEY: string

      AWS_REGION: string
      AWS_DEFAULT_REGION: string
      AWS_ACCESS_KEY_ID: string
      AWS_SECRET_ACCESS_KEY: string
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {}
