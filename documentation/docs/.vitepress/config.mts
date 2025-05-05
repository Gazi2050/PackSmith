import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PackSmith",
  description: "PackSmith documentation",
  srcDir: 'src',
  head: [['link', { rel: 'icon', href: 'https://tinypic.host/images/2025/05/05/ps-logo.png' }]],
  themeConfig: {
    logo: 'https://tinypic.host/images/2025/05/05/ps-logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/quick-start', activeMatch: '/guide/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is PackSmith', link: '/guide/what-is-packsmith' },
          { text: 'Getting Started', link: '/guide/quick-start' },
          { text: 'Configuration', link: '/guide/config' }
        ]
      },
      // Add more sections as needed
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gazi2050/PackSmith' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/packsmith' }
    ]
  }
})
