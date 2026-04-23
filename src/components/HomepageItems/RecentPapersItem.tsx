import React, {useMemo} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import pageStyles from '@site/src/pages/index.module.css';
import styles from './styles.module.css';

interface PaperPost {
  title: string;
  permalink: string;
  summaryDate: string;
}

interface PluginData {
  papers?: PaperPost[];
}

interface RecentPapersItemProps {
  gridClasses?: string;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

export default function RecentPapersItem({gridClasses}: RecentPapersItemProps): JSX.Element {
  const pluginData = usePluginData('paper-stats-plugin') as PluginData | undefined;

  const recentPapers = useMemo(() => {
    const items = pluginData?.papers ?? [];
    return [...items]
      .sort((a, b) => new Date(b.summaryDate).getTime() - new Date(a.summaryDate).getTime())
      .slice(0, 3);
  }, [pluginData]);

  return (
    <aside className={clsx(pageStyles.newspaperCard, gridClasses, styles.recentCard)}>
      <div className={styles.recentContent}>
        <div className={styles.recentHeader}>Recent Papers</div>
        <div className={styles.recentList}>
          {recentPapers.map((paper, i) => (
            <Link key={i} to={paper.permalink} className={styles.recentItem}>
              <span className={styles.recentTitle}>{paper.title}</span>
              <span className={styles.recentDate}>{formatDate(paper.summaryDate)}</span>
            </Link>
          ))}
        </div>
        <Link to="/papers" className={styles.recentMore}>
          전체 논문 보기 →
        </Link>
      </div>
    </aside>
  );
}
