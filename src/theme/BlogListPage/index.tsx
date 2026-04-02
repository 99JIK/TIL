import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import {useLocation} from '@docusaurus/router';

// Popular tags for the Papers section (sorted by frequency)
const POPULAR_TAGS = [
  {label: 'Artificial Intelligence', slug: 'artificial-intelligence'},
  {label: 'Machine Learning', slug: 'machine-learning'},
  {label: 'Large Language Model', slug: 'large-language-model'},
  {label: 'Deep Learning', slug: 'deep-learning'},
  {label: 'Software Testing', slug: 'software-testing'},
  {label: 'Behavior Tree', slug: 'behavior-tree'},
  {label: 'Robotics', slug: 'robotics'},
  {label: 'Computer Vision', slug: 'computer-vision'},
  {label: 'Code Generation', slug: 'code-generation'},
  {label: 'Software Engineering', slug: 'software-engineering'},
  {label: 'JIK Reference', slug: 'jik-reference'},
];

function PapersTagFilter() {
  return (
    <nav className="papersTagFilter" aria-label="Filter by tag">
      <span className="papersTagFilter__label">Tags</span>
      {POPULAR_TAGS.map((tag) => (
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
