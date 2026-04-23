import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import pageStyles from '@site/src/pages/index.module.css';
import styles from './styles.module.css';

interface RecentDocsItemProps {
  gridClasses?: string;
}

// Hardcoded recent docs — update when adding new docs
// (Docusaurus doesn't generate a docs list JSON like blog)
const RECENT_DOCS = [
  {
    title: '고급 소프트웨어공학 (COSE0719)',
    path: '/docs/category/cose0719',
    category: 'KNU-MS',
  },
  {
    title: 'Docusaurus 채널톡 플러그인 Swizzle',
    path: '/docs/Tools/docusaurus-channeltalk-plugin-swizzle',
    category: 'Tools',
  },
  {
    title: '논문 관리 구조 & JIK Reference 태그',
    path: '/docs/Tools/research-paper-repo-structure-jik-reference-tag',
    category: 'Tools',
  },
];

export default function RecentDocsItem({gridClasses}: RecentDocsItemProps): JSX.Element {
  return (
    <aside className={clsx(pageStyles.newspaperCard, gridClasses, styles.recentCard)}>
      <div className={styles.recentContent}>
        <div className={styles.recentHeader}>Recent Docs</div>
        <div className={styles.recentList}>
          {RECENT_DOCS.map((doc, i) => (
            <Link key={i} to={doc.path} className={styles.recentItem}>
              <span className={styles.recentTitle}>{doc.title}</span>
              <span className={styles.recentDate}>{doc.category}</span>
            </Link>
          ))}
        </div>
        <Link to="/docs/Intro" className={styles.recentMore}>
          전체 문서 보기 →
        </Link>
      </div>
    </aside>
  );
}
