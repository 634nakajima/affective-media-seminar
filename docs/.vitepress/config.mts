import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/affective-media-seminar/',
  title: '感性情報メディア研究室 ゼミ活動',
  description: '研究活動としての作品制作の流れを理解し，実践する',

  locales: {
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'しらべる・かんがえる', link: '/ja/research/' },
          { text: 'つくる', link: '/ja/create/' },
          { text: 'はかる・くらべる', link: '/ja/evaluate/' }
        ],
        sidebar: {
          '/ja/': [
            {
              text: 'しらべる・かんがえる',
              items: [
                { text: 'キーワード・ジャンル・分野', link: '/ja/research/' },
                { text: 'グループワーク', link: '/ja/research/groupwork' },
                { text: '事例調査・論文読解', link: '/ja/research/survey' }
              ]
            },
            {
              text: 'つくる',
              items: [
                { text: '作品制作コンセプト', link: '/ja/create/' },
                { text: 'オーディオ再生環境', link: '/ja/create/audio' },
                { text: '制作ツール', link: '/ja/create/tools' },
                { text: '卒業制作スケジュール', link: '/ja/create/schedule' }
              ]
            },
            {
              text: 'はかる・くらべる・ほりさげる',
              items: [
                { text: 'はかるもの・はかる方法', link: '/ja/evaluate/' },
                { text: '作品体験の評価', link: '/ja/evaluate/artwork' },
                { text: '身の回りの評価・比較', link: '/ja/evaluate/everyday' }
              ]
            },
            {
              text: 'つたえる',
              items: [
                { text: 'キャプション・展示', link: '/ja/communicate/' },
                { text: 'コンペ・動画・ポスター', link: '/ja/communicate/presentation' }
              ]
            },
          ]
        },
        outline: { label: '目次' },
        docFooter: { prev: '前のページ', next: '次のページ' }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Research', link: '/en/research' },
          { text: 'Create', link: '/en/create' },
          { text: 'Evaluate', link: '/en/evaluate' }
        ],
        sidebar: {
          '/en/': [
            {
              text: 'Research & Think',
              items: [
                { text: 'Keywords & Fields', link: '/en/research' }
              ]
            },
            {
              text: 'Create',
              items: [
                { text: 'Concept & Production', link: '/en/create' }
              ]
            },
            {
              text: 'Evaluate & Compare',
              items: [
                { text: 'Evaluation Methods', link: '/en/evaluate' }
              ]
            },
            {
              text: 'Communicate',
              items: [
                { text: 'Exhibition & Presentation', link: '/en/communicate' }
              ]
            }
          ]
        }
      }
    }
  },

  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/affective-media-seminar/favicon.png' }]
  ],

  themeConfig: {
    logo: '/favicon.png',
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  }
})
