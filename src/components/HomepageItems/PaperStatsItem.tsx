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
  totalPapers?: number;
  totalTags?: number;
  papers?: PaperPost[];
}

interface PaperStatsItemProps {
  gridClasses?: string;
}

function getRelativeDate(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days === 0) return '오늘';
  if (days === 1) return '어제';
  if (days < 30) return `${days}일 전`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}개월 전`;
  return `${Math.floor(months / 12)}년 전`;
}

export default function PaperStatsItem({gridClasses}: PaperStatsItemProps): JSX.Element {
  const pluginData = usePluginData('paper-stats-plugin') as PluginData | undefined;

  const stats = useMemo(() => {
    const items = pluginData?.papers ?? [];
    const sorted = [...items].sort(
      (a, b) => new Date(b.summaryDate).getTime() - new Date(a.summaryDate).getTime(),
    );
    const latestDate = sorted[0]?.summaryDate ?? '';

    return {
      totalPapers: pluginData?.totalPapers ?? items.length,
      totalTags: pluginData?.totalTags ?? 0,
      lastUpdated: latestDate ? getRelativeDate(latestDate) : '-',
    };
  }, [pluginData]);

  return (
    <aside className={clsx(pageStyles.newspaperCard, gridClasses, styles.statsCard)}>
      <div className={styles.statsContent}>
        <div className={styles.statsHeader}>Paper Stats</div>
        <div className={styles.statsGrid}>
          <Link to="/papers" className={styles.statItem}>
            <span className={styles.statNumber}>{stats.totalPapers}</span>
            <span className={styles.statLabel}>논문</span>
          </Link>
          <Link to="/papers/tags" className={styles.statItem}>
            <span className={styles.statNumber}>{stats.totalTags}</span>
            <span className={styles.statLabel}>태그</span>
          </Link>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{stats.lastUpdated}</span>
            <span className={styles.statLabel}>업데이트</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
