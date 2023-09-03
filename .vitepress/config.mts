import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Atstovavimo gidas",
  lang: "lt",
  description: "Vieningai Už Studentų Ateitį",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    search: {
      provider: 'local',
      options: {
        disableDetailedView: true,
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Ieškoti',
                buttonAriaLabel: 'Ieškoti',
              },
              modal: {
                noResultsText: 'Nerasta',
                resetButtonTitle: 'Išvalyti',
                footer: {
                  selectText: 'Pasirinkti',
                  navigateText: 'Naviguoti',
                  closeText: 'Uždaryti',
                }
              }
            }
          }
        }
      }
    },
    darkModeSwitchLabel: 'Tamsus režimas',
        langMenuLabel: 'Kalba',
        docFooter: {
            prev: 'Ankstesnis',
            next: 'Kitas',
        },
        returnToTopLabel: 'Grįžti į viršų',
        sidebarMenuLabel: 'Turinys',
        outline: {
            label: 'Šiame puslapyje...',
        },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Schemos', link: '/schemos' }
    ],

    sidebar: [
      {
        text: 'Įvadas',
        link: '/ivadas'
      },
      {
        text: 'Interaktyvios schemos',
        link: '/schemos'
      },
      {
        text: 'I dalis',
        items: [
          { text: 'Kamieninis akademinis padalinys', link: '/kap' },
          { text: 'Vilniaus universitetas', link: '/vu' },
          { text: 'Miestas', link: '/miestas' },
          { text: 'Aukštasis mokslas', link: '/aukstasis-mokslas' },
          { text: 'Vyriausybė', link: '/vyriausybe' },
          { text: 'ŠMSM', link: '/smsm' },
          { text: 'Įstatymų leidyba', link: '/seimas' },
        ]
      },
      {
        text: 'II dalis',
        items: [
          { text: 'Studentams atstovaujančios organizacijos', link: '/studentams-atstovaujancios-organizacijos' },
          { text: 'Studentų atstovavimas', link: '/studentu-atstovavimas' },
        ]
      },

      {
        text: "Baigiamasis žodis",
        link: "/baigiamasis-zodis"
      }
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
