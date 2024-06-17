const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const pageMetadata = {
  metadataBase: new URL(defaultUrl),
  title: 'foldermates',
  description: 'Make bookmarking simpler.',
}

// foldrr
// keeptag -> keeptag.me
// foldermates -> foldermat.es

// foldermat.es/arvid/
