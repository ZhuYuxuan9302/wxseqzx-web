import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  { text: '规则', link: '/rules/' },
  {
    text: '校友',
    link: '/structure/',
  },
  {
    text: "友情链接",
              items: [
                { text: "随风的个人网站", link: "https://zhuyuxuan.link/" },
                { text: "MCJPG", link: "https://mcjpg.org/" }
              ]
  }
]
