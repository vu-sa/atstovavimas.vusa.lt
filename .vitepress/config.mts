import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Atstovavimo gidas",
  cleanUrls: true,
  appearance: false,
  sitemap: {
    hostname: 'https://atstovavimas.vusa.lt'
  },
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
      { href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap', rel: 'stylesheet' }
    ]
  ],
  description: "Vieningai Už Studentų Ateitį",
  srcDir: 'src',
  locales: {
    root: {
      label: 'Lietuvių',
      lang: 'lt-LT',
      themeConfig: {
        editLink: {
          pattern: 'https://github.com/vu-sa/atstovavimas.vusa.lt/edit/main/src/:path',
          text: 'Atnaujinti šį puslapį',
        },
        lastUpdated: {
          formatOptions: {
            month: 'long',
            year: 'numeric',
            day: 'numeric',
            forceLocale: true
          },
          text: 'Atnaujinta',
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
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      themeConfig: {
        editLink: {
          pattern: 'https://github.com/vu-sa/atstovavimas.vusa.lt/edit/main/src/:path',
          text: 'Edit this page',
        },
        lastUpdated: {
          formatOptions: {
            month: 'long',
            year: 'numeric',
            day: 'numeric',
            forceLocale: true
          },
          text: 'Last updated',
        },
        darkModeSwitchLabel: 'Dark mode',
        langMenuLabel: 'Language',
        docFooter: {
          prev: 'Previous',
          next: 'Next',
        },
        returnToTopLabel: 'Return to top',
        sidebarMenuLabel: 'Contents',
        outline: {
          label: 'On this page...',
        },
        nav: [
          { text: 'Institutions', link: '/en/kap' },
          { text: 'Representation', link: '/en/studentams-atstovaujancios-organizacijos' },
          { text: 'Diagrams', link: '/en/schemos' }
        ],
        sidebar: [
          {
            text: 'Introduction',
            link: '/en/ivadas'
          },
          {
            text: 'Diagrams',
            link: '/en/schemos'
          },
          {
            text: 'Institutions',
            items: [
              { text: 'Core Academic Unit', link: '/en/kap' },
              { text: 'Vilnius University', link: '/en/vu' },
              { text: 'City', link: '/en/miestas' },
              { text: 'Higher Education', link: '/en/aukstasis-mokslas' },
              { text: 'Parliament', link: '/en/seimas' },
              { text: 'Government', link: '/en/vyriausybe' },
              { text: 'Ministry of Education', link: '/en/smsm' },
              { text: 'Legislative Process', link: '/en/istatymu-leidyba' },
            ]
          },
          {
            text: 'Representation',
            items: [
              { text: 'Student Representative Organizations', link: '/en/studentams-atstovaujancios-organizacijos' },
              { text: 'Student Representation', link: '/en/studentu-atstovavimas' },
            ]
          },
          {
            text: "Concluding Remarks",
            link: "/en/baigiamasis-zodis"
          }
        ],
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search',
                buttonAriaLabel: 'Search',
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate',
                  closeText: 'Close',
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/vieningai.vu.sa' },
      { icon: 'instagram', link: 'https://www.instagram.com/vu.studentu.atstovybe' },
      { icon: 'youtube', link: 'https://www.youtube.com/@VilnUniSA' },
    ]
  }
})
