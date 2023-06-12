import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Portfolio",
  description: "Magnus Jyrkkänen's portfolio page.",

  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '',
        items: [
          { text: '', link: '/' },
          { text: '', link: '/' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/magnusjyrkkanen' },
      { icon: 'instagram', link: 'https://www.instagram.com/magnusjyrkkanen/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/magnusjyrkkanen/' },
      { icon: 'twitter', link: 'https://twitter.com/magnusjyrkkanen' }
    ],

    footer: {
      copyright: 'Copyright © 2023 Magnus Jyrkkänen'
    }
  }
})
