import { defineConfig } from 'vitepress'
import svgLoader from 'vite-svg-loader'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Atstovavimo gidas",
  lang: "lt-LT",
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
      { href: 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,700;1,200;1,400;1,500&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap', rel: 'stylesheet' }
    ]
  ],
  description: "Vieningai Už Studentų Ateitį",
  srcDir: 'src',
  vite: {
    plugins: [svgLoader()],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    /* editLink: {
      pattern: 'https://github.com/vu-sa/atstovavimas.vusa.lt/edit/main/src/:path',
      text: 'Atnaujinti šį puslapį',
    }, */
    /* lastUpdated: {
      formatOptions: {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
    },
    text: 'Atnaujinta',
    }, */

    search: {
      provider: 'local',
      options: {
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
      { text: 'Institucijos', link: '/kap' },
      { text: 'Atstovavimas', link: '/studentams-atstovaujancios-organizacijos' },
      { text: 'Schemos', link: '/schemos' }
    ],

    sidebar: [
      {
        text: 'Įvadas',
        link: '/ivadas'
      },
      {
        text: 'Schemos',
        link: '/schemos'
      },
      {
        text: 'Institucijos',
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
        text: 'Atstovavimas',
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
