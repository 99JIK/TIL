import React from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  translateTagsPageTitle,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import type {Props} from '@theme/BlogTagsListPage';
import SearchMetadata from '@theme/SearchMetadata';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

function groupByLetter(
  tags: Props['tags'],
): Record<string, Props['tags']> {
  const groups: Record<string, Props['tags']> = {};
  for (const tag of tags) {
    const letter = tag.label[0].toUpperCase();
    if (!groups[letter]) groups[letter] = [];
    groups[letter].push(tag);
  }
  return groups;
}

export default function BlogTagsListPage({tags, sidebar}: Props): React.ReactNode {
  const title = translateTagsPageTitle();

  const sorted = [...tags].sort((a, b) => b.count - a.count);
  const popular = sorted.slice(0, 12);
  const maxCount = popular[0]?.count ?? 1;

  const allSorted = [...tags].sort((a, b) => a.label.localeCompare(b.label));
  const grouped = groupByLetter(allSorted);
  const letters = Object.keys(grouped).sort();

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogTagsListPage,
      )}>
      <PageMetadata title={title} />
      <SearchMetadata tag="blog_tags_list" />
      <BlogLayout sidebar={sidebar}>
        <Heading as="h1">{title}</Heading>
        <p className={styles.subtitle}>
          {tags.length}개의 태그로 논문을 분류하고 있습니다
        </p>

        {/* Popular Tags */}
        <section className={styles.section}>
          <Heading as="h2" className={styles.sectionTitle}>
            Popular
          </Heading>
          <div className={styles.popularGrid}>
            {popular.map((tag) => {
              const ratio = tag.count / maxCount;
              return (
                <a
                  key={tag.permalink}
                  href={tag.permalink}
                  className={styles.popularCard}>
                  <span className={styles.popularLabel}>{tag.label}</span>
                  <div className={styles.popularMeta}>
                    <span className={styles.popularCount}>{tag.count}</span>
                    <div
                      className={styles.popularBar}
                      style={{width: `${Math.max(ratio * 100, 8)}%`}}
                    />
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* All Tags by Letter */}
        <section className={styles.section}>
          <Heading as="h2" className={styles.sectionTitle}>
            All Tags
          </Heading>
          <div className={styles.letterNav}>
            {letters.map((letter) => (
              <a key={letter} href={`#letter-${letter}`} className={styles.letterLink}>
                {letter}
              </a>
            ))}
          </div>
          <div className={styles.allTagsContainer}>
            {letters.map((letter) => (
              <div key={letter} className={styles.letterGroup} id={`letter-${letter}`}>
                <div className={styles.letterLabel}>{letter}</div>
                <div className={styles.letterTags}>
                  {grouped[letter].map((tag) => (
                    <a
                      key={tag.permalink}
                      href={tag.permalink}
                      className={styles.tagItem}>
                      <span>{tag.label}</span>
                      <span className={styles.tagCount}>{tag.count}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
