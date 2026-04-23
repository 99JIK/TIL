import React, {useMemo} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {usePluginData} from '@docusaurus/useGlobalData';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import {useLocation} from '@docusaurus/router';

interface PluginData {
  topTags?: {tag: string; count: number}[];
}

const MAX_TAGS = 11;

const FALLBACK_TAGS = [
  'Software Testing',
  'Behavior Tree',
  'Large Language Model',
  'Autonomous Driving',
  'Database',
];

function toSlug(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function PapersTagFilter() {
  const data = usePluginData('paper-stats-plugin') as PluginData | undefined;

  const tags = useMemo(() => {
    const top = data?.topTags ?? [];
    if (top.length === 0) {
      return FALLBACK_TAGS.map((t) => ({label: t, slug: toSlug(t)}));
    }
    return top.slice(0, MAX_TAGS).map((t) => ({label: t.tag, slug: toSlug(t.tag)}));
  }, [data]);

  return (
    <nav className="papersTagFilter" aria-label="Filter by tag">
      <span className="papersTagFilter__label">Tags</span>
      {tags.map((tag) => (
        <a key={tag.slug} href={`/papers/tags/${tag.slug}`}>
          {tag.label}
        </a>
      ))}
      <a href="/papers/tags" style={{fontStyle: 'italic', opacity: 0.7}}>
        All tags...
      </a>
    </nav>
  );
}

function BlogListPageMetadata(props: any) {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: any) {
  const {metadata, items, sidebar} = props;
  const location = useLocation();
  const isPapers = location.pathname.startsWith('/papers');

  return (
    <BlogLayout sidebar={sidebar}>
      {isPapers && <PapersTagFilter />}
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props: any) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
