import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PackSmith",
  description: "PackSmith documentation",
  srcDir: 'src',
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide', activeMatch: '/guide/' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is PackSmith', link: '/guide/what-is-packsmith' },
          { text: 'Getting Started', link: '/guide/quick-start' }
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
