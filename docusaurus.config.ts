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
          routeBasePath: 'blog',
          blogTitle: 'Blog',
          blogDescription: '학회·세미나 참석, 일정, 기타 기록을 남기는 공간입니다.',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          onUntruncatedBlogPosts: 'ignore',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl: 'https://github.com/99jik/today_i_learned/tree/main/',
          postsPerPage: 10,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} 99JIK`,
          },
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, katexOptions]],
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
        ...(process.env.NODE_ENV === 'production'
          ? {
              gtag: {
                trackingID: 'G-JRP5YY0FL7',
                anonymizeIP: true,
              },
            }
          : {}),
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
    './src/plugins/announcements-plugin',
    './src/plugins/docs-recent-plugin',
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
    blog: {
      sidebar: {
        groupByYear: true,
      },
    },
    navbar: {
      title: 'Today I Learned',
      items: [
        { href: 'https://99jik.com', label: '99jik.com', position: 'right'},
        { type: 'docSidebar',  sidebarId: 'JIKTILSidebar', position: 'right', label: 'Docs'},
        { to: '/papers', label: 'Papers', position: 'right'},
        { to: '/blog', label: 'Blog', position: 'right'},
        { href: 'https://github.com/99jik', label: 'GitHub', position: 'right'}
      ]
    },
    footer: {
      style: 'light',
      links: [
        { title: 'SERVICE',
          items: [
            { label: 'Docs', to: '/docs/category/template'},
            { label: 'Papers', to: '/papers'},
            { label: 'Blog', to: '/blog'},
            { label: 'Tags', to: '/papers/tags'},
          ],
        },
        { title: 'CONNECT',
          items: [
            { label: '99jik.com', href: 'https://99jik.com'},
            { label: 'GitHub', href: 'https://github.com/99jik'},
            { label: 'Email', href: 'mailto:99jik@99jik.com'},
            { label: 'Discord', href: 'https://discord.gg/RDts8j6KWh'},
          ],
        },
        { title: 'GROUP',
          items: [
            { label: 'KNU STLAB', href: 'https://selab.knu.ac.kr'},
          ],
        },
      ],
      copyright: `<div class="footerBrand"><span class="footerBrandName">Today I Learned</span><span class="footerBrandTagline">From Yesterday's Insights to Today's Wisdom.</span><span class="footerBrandMeta">© ${new Date().getFullYear()} 99JIK · <a href="https://til.99jik.com">til.99jik.com</a></span></div>`,
    },
    prism: { theme: prismThemes.github, darkTheme: prismThemes.dracula },
    colorMode: { respectPrefersColorScheme: true},
    algolia: {
      appId: '8WIWZU5PYJ',
      apiKey: '7e193130add354e27c60a0320f072b38',
      indexName: 'TIL.99JIK.COM',
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