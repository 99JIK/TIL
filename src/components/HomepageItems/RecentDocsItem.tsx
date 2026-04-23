import React, {useMemo} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import pageStyles from '@site/src/pages/index.module.css';
import styles from './styles.module.css';

interface RecentDoc {
  title: string;
  permalink: string;
  category: string;
  createdAt: string;
}

interface PluginData {
  items?: RecentDoc[];
}

interface RecentDocsItemProps {
  gridClasses?: string;
}

export default function RecentDocsItem({gridClasses}: RecentDocsItemProps): JSX.Element {
  const data = usePluginData('docs-recent-plugin') as PluginData | undefined;

  const recent = useMemo(() => {
    const items = data?.items ?? [];
    return items.slice(0, 3);
  }, [data]);

  const hasDocs = recent.length > 0;

  return (
    <aside className={clsx(pageStyles.newspaperCard, gridClasses, styles.recentCard)}>
      <div className={styles.recentContent}>
        <div className={styles.recentHeader}>Recent Docs</div>
        {hasDocs ? (
          <div className={styles.recentList}>
            {recent.map((doc, i) => (
              <Link key={i} to={doc.permalink} className={styles.recentItem}>
                <span className={styles.recentTitle}>{doc.title}</span>
                <span className={styles.recentDate}>{doc.category}</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className={styles.recentEmpty}>
            새 포맷으로 다시 쌓는 중입니다. 기존 문서는 아카이브에서 확인할 수 있습니다.
          </p>
        )}
        <Link
          to={hasDocs ? '/docs/category/template' : '/docs/category/archive'}
          className={styles.recentMore}
        >
          {hasDocs ? '전체 문서 보기 →' : '아카이브 보기 →'}
        </Link>
      </div>
    </aside>
  );
}
