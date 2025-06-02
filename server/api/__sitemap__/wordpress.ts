import { defineSitemapEventHandler } from '#imports'

export default defineSitemapEventHandler(async () => {
  const posts = await $fetch('https://wp.maurodefalco.it/wp-json/wp/v2/posts')
  
  return posts.map(post => ({
    // Transform external URL to your domain
    loc: `${post.slug}`, // NOT post.link
    lastmod: post.modified,
    changefreq: 'weekly',
    priority: 0.7,
  }))
})