import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: APP_BASE_PATH ? `/${APP_BASE_PATH}/` : '/',

  lang: 'zh-CN',
  title: '无锡市二泉中学',
  description: '无锡市二泉中学非官方网站',
  head,

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true
    }
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,
    siteTitle: '二泉中学',
    logo: '/logo.png',

    nav,
    sidebar,

    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '目录',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/MineJPGcraft/MCJPG' }],

    footer: {
      message: '无锡市二泉中学非官方网站',
      copyright: 'Copyright © 2024-present <a href="https://wxseqzx.org/">无锡市二泉中学</a>— —<a href="https://github.com/ZhuYuxuan9302/wxseqzx-web">我们的仓库</a>',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    /*** 自定义配置 ***/

    comment: {
      repo: 'ZhuYuxuan9302/wxseqzx-web',
      repoId: 'R_kgDOMyVmXQ',
      category: 'Announcements',
      categoryId: 'DIC_kwDOMyVmXc4Cigju',
      
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
