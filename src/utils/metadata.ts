const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const pageMetadata = {
  metadataBase: new URL(defaultUrl),
  title: 'foldrr',
  description: 'Make bookmarking simpler.',
}
