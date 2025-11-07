import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: '99JIK',
  tagline: 'From Yesterday\'s Insights to Today\'s Wisdom: My Learning  Chronicle.',
  favicon: 'img/favicon.svg',
  trailingSlash: false,
  url: 'https://www.99jik.com',
  baseUrl: '/',
  organizationName: '99jik',
  projectName: 'Today_I_Learned',
  onBrokenLinks: 'warn',
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
          routeBasePath: 'notes',
          blogSidebarTitle: 'All posts',
          onUntruncatedBlogPosts: 'ignore',
          blogSidebarCount: 0,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: 'https://github.com/99jik/today_i_learned/tree/main/',
          postsPerPage: 1,
          feedOptions: {},
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          blogListComponent: '@site/src/components/EmptyBlogList',
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
          postsPerPage: 10, feedOptions: { type: 'all', copyright: `Copyright © ${new Date().getFullYear()} 99JIK` },
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
      title: '99JIK',
      items: [
        { type: 'docSidebar',  sidebarId: 'JIKTILSidebar', position: 'right', label: 'DOCS'},
        { to: '/notes', label: 'NOTES', position: 'right'},
        { to: '/papers', label: 'PAPERS', position: 'right'},
        { href: 'https://github.com/99jik', label: 'GITHUB', position: 'right'}
      ]
    },
    footer: {
      style: 'light',
      links: [
        { title: '99JIK',
          items: [
            { label: 'Docs', to: '/docs/Intro'},
            { label: 'Notes', to: '/notes'},
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
      copyright: `Copyright © ${new Date().getFullYear()} JIK, Built with Docusaurus.`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    colorMode: { respectPrefersColorScheme: true},
    announcementBar: {
      id: 'announcementBar-2',
      content: '⭐️ 저의 사이트에 <b>별표</b>를 눌러주세요! <a target="_blank" rel="noopener noreferrer" href="https://github.com/99jik/Today-I-Learned">99JIK</a> ⭐️',
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
    metadata: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@99jik' },
      { name: 'twitter:creator', content: '@99jik' },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: '/img/favicon.svg' },
      { name: 'og:image:alt', content: '99JIK Logo' },
      { name: 'twitter:image', content: '/img/favicon.svg' },
      { name: 'twitter:image:alt', content: '99JIK Logo' },
    ],
  } satisfies Preset.ThemeConfig,
};
export default config;