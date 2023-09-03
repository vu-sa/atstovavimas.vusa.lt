import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Atstovavimo gidas",
  lang: "lt",
  // add font pr
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,700;1,200;1,400;1,500&display=swap', rel: 'stylesheet' }
    ]
  ],
  description: "Vieningai Už Studentų Ateitį",
  srcDir: 'src',
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
      { text: 'I dalis', link: '/kap' },
      { text: 'II dalis', link: '/studentams-atstovaujancios-organizacijos' },
      { text: 'Interaktyvios schemos', link: '/schemos' }
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
          { text: 'Seimas', link: '/seimas' },
          { text: 'Vyriausybė', link: '/vyriausybe' },
          { text: 'ŠMSM', link: '/smsm' },
          { text: 'Įstatymų leidyba', link: '/istatymu-leidyba' },
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
      { icon: 'facebook', link: 'https://facebook.com' },
      { icon: 'instagram', link: 'https://instagram.com' },
      { icon: 'youtube', link: 'https://youtube.com' },
    ]
  }
})
