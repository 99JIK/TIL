import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: '99JIK',
  tagline: 'From Yesterday\'s Insights to Today\'s Wisdom: My Learning  Chronicle.',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  url: 'https://www.99jik.com',
  baseUrl: '/',
  organizationName: '99jik',
  projectName: 'Today_I_Learned',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
      },
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
      },
    },
  },
  presets: [
    [
      'classic', 
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          path: './blog',
          routeBasePath: 'how-can-you-find?/blog',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: 'https://github.com/99jik/today_i_learned/tree/main/',
          postsPerPage: 10, feedOptions: { type: 'all', copyright: `Copyright © ${new Date().getFullYear()} JIK\'s TIL` },
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: 'https://github.com/99jik/today_i_learned/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: { 
          trackingID: 'G-FQ51TK8K1C',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  plugins: [[
    '@docusaurus/plugin-content-blog',{
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: 'https://github.com/99jik/today_i_learned/tree/main/',
          id: 'Paper',
          path: './papers',
          routeBasePath: 'papers',
          blogSidebarTitle: 'Paper I Read',
          blogSidebarCount: 'ALL',
          postsPerPage: 10, feedOptions: { type: 'all', copyright: `Copyright © ${new Date().getFullYear()} JIK\'s TIL` },
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
    ]
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA32PN8a+NA+XH',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    navbar: {
      title: 'JIK\'s TIL',
      items: [
        { type: 'docSidebar',  sidebarId: 'JIKTILSidebar', position: 'right', label: 'DOCS'},
        { to: '/papers', label: 'PAPERS', position: 'right'},
        { href: 'https://github.com/99jik', label: 'GITHUB', position: 'right'}
      ]
    },
    footer: {
      style: 'light',
      links: [
        { title: 'JIK\'s TIL',
          items: [
            { label: 'Docs', to: '/docs/intro'},
            { label: 'Papers', to: '/papers'}
          ],
        },
        { title: 'Contact',
          items: [
            { label: 'E-Mail', href: 'mailto:99junginkim@gmail.com'},
            { label: 'Discord', href: 'https://discord.gg/vgEmEtbHmc'}
          ],
        },
        { title: 'Group',
          items: [
            { label: 'Altruistic Hive', href: 'https://altruistic-hive.org'},
            { label: 'KNU STLAB', href: 'https://selab.knu.ac.kr'}
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JIK, Built with Docusaurus.`, // 저작권 문구
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    colorMode: { respectPrefersColorScheme: true},
    announcementBar: {
      id: 'announcementBar-2',
      content: '⭐️ 저의 학습 기록에 <b>별표</b>를 눌러주세요! <a target="_blank" rel="noopener noreferrer" href="https://github.com/99jik/Today-I-Learned">JIK\'s TIL</a> ⭐️',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    algolia: {
      appId: 'M0K8OUDJUD',
      apiKey: '47a8935c75521e24ddd40a579d7a5c13',
      indexName: 'til-jungin',
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
};
export default config;