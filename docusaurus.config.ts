import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const katexOptions = {
  strict: false, // 또는 'ignore'로 설정
};

const config: Config = {
  title: 'Today I Learned',
  tagline: 'From Yesterday\'s Insights to Today\'s Wisdom: My Learning  Chronicle.',
  favicon: 'img/favicon.svg',
  trailingSlash: false,
  url: 'https://til.99jik.com',
  baseUrl: '/',
  organizationName: '99jik',
  projectName: 'Today_I_Learned',
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
    localeConfigs: {
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko-KR',
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
          rehypePlugins: [[rehypeKatex, katexOptions]],
          blogListComponent: '@site/src/components/EmptyBlogList',
        },
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: 'https://github.com/99jik/today_i_learned/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, katexOptions]],
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
  plugins: [
    './src/plugins/paper-stats-plugin',
    [
    '@docusaurus/plugin-content-blog',{
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: 'https://github.com/99jik/today_i_learned/tree/main/',
          onInlineAuthors: 'ignore',
          onInlineTags: 'ignore',
          id: 'Paper',
          path: './papers',
          routeBasePath: 'papers',
          blogSidebarTitle: 'Paper I Read',
          blogSidebarCount: 'ALL',
          postsPerPage: 10, feedOptions: { type: 'all', copyright: `Copyright © ${new Date().getFullYear()} 99JIK` },
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, katexOptions]],
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
      title: 'Today I Learned',
      items: [
        { type: 'docSidebar',  sidebarId: 'JIKTILSidebar', position: 'right', label: 'Docs'},
        { to: '/papers', label: 'Papers', position: 'right'},
        { href: 'https://github.com/99jik', label: 'GitHub', position: 'right'}
      ]
    },
    footer: {
      style: 'light',
      links: [
        { title: 'SERVICE',
          items: [
            { label: 'Docs', to: '/docs/Intro'},
            { label: 'Papers', to: '/papers'},
            { label: 'Tags', to: '/papers/tags'},
          ],
        },
        { title: 'ABOUT',
          items: [
            { label: 'Who am I', to: '/Who-am-I'},
            { label: 'How to Read', to: '/How-to-Read'},
          ],
        },
        { title: 'CONTACT',
          items: [
            { label: 'EMAIL', href: 'mailto:99jik@99jik.com'},
            { label: 'Discord', href: 'https://discord.gg/RDts8j6KWh'},
            { label: 'GitHub', href: 'https://github.com/99jik'},
          ],
        },
        { title: 'GROUP',
          items: [
            { label: 'Altruistic Hive', href: 'https://altruistic-hive.org'},
            { label: 'KNU STLAB', href: 'https://selab.knu.ac.kr'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 99JIK. Built with Docusaurus.`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    colorMode: { respectPrefersColorScheme: true},
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
      { name: 'og:image', content: 'https://til.99jik.com/img/og-card.svg' },
      { name: 'og:image:alt', content: 'Today I Learned' },
      { name: 'twitter:image', content: 'https://til.99jik.com/img/og-card.svg' },
      { name: 'twitter:image:alt', content: 'Today I Learned' },
    ],
  } satisfies Preset.ThemeConfig,
};
export default config;