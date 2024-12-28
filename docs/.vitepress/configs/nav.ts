import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.Config['nav'] = [
  { text: '首页', link: '/' },
  { text: '学校简介', link: '/introduction/' },
  { text: '规则', link: '/rules/' },
  {
    text: '校友',
    link: '/structure/',
  },
  { text: 'AI对话', link: 'https://chat.zhuyuxuan.link/' },
  {
    text: "友情链接",
              items: [
                { text: "随风的个人网站", link: "https://zhuyuxuan.link/" },
                { text: "MCJPG", link: "https://mcjpg.org/" }
              ]
  }
]
