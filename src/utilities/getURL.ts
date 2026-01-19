import canUseDOM from './canUseDOM'

const getVercelURL = () => {
  // Vercel provides this on deployments (no protocol)
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`

  // Older / custom setups might use this (also no protocol)
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }

  return undefined
}

export const getServerSideURL = () => {
  return (
    process.env.NEXT_PUBLIC_SERVER_URL ||
    getVercelURL() ||
    'http://localhost:3000'
  )
}

export const getClientSideURL = () => {
  if (canUseDOM) {
    const protocol = window.location.protocol
    const domain = window.location.hostname
    const port = window.location.port

    return `${protocol}//${domain}${port ? `:${port}` : ''}`
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return process.env.NEXT_PUBLIC_SERVER_URL || ''
}
