import { getBlogPosts } from 'app/tidbits/utils'

export const baseUrl = 'https://connerchu.com'

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/tidbits/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  let routes = ['', '/tidbits'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
