import React, {useMemo} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import paperList from '@generated/docusaurus-plugin-content-blog/Paper/blog-post-list-prop-Paper.json';
import pageStyles from '@site/src/pages/index.module.css';
import styles from './styles.module.css';

interface PaperPost {
  title: string;
  permalink: string;
  date: string;
}

interface ResearchTimelineItemProps {
  gridClasses?: string;
}

export default function ResearchTimelineItem({gridClasses}: ResearchTimelineItemProps): JSX.Element {
  const timeline = useMemo(() => {
    const items = (paperList.items ?? []) as PaperPost[];

    // Group by month (last 12 months)
    const now = new Date();
    const months: {key: string; label: string; count: number}[] = [];

    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
      const label = `${d.getMonth() + 1}월`;
      const count = items.filter((p) => p.date.startsWith(key)).length;
      months.push({key, label, count});
    }

    const maxCount = Math.max(...months.map((m) => m.count), 1);
    const totalRecent = months.reduce((s, m) => s + m.count, 0);

    return {months, maxCount, totalRecent};
  }, []);

  return (
    <aside className={clsx(pageStyles.newspaperCard, gridClasses, styles.timelineCard)}>
      <div className={styles.timelineContent}>
        <div className={styles.timelineHeader}>
          <span className={styles.timelineTitle}>Research Timeline</span>
          <span className={styles.timelineTotal}>최근 12개월 · {timeline.totalRecent}편</span>
        </div>
        <div className={styles.timelineBars}>
          {timeline.months.map((m) => (
            <div key={m.key} className={styles.timelineCol}>
              <div className={styles.timelineBarWrap}>
                <div
                  className={styles.timelineBar}
                  style={{height: `${Math.max((m.count / timeline.maxCount) * 100, 4)}%`}}
                  title={`${m.key}: ${m.count}편`}
                />
              </div>
              <span className={styles.timelineLabel}>{m.label}</span>
              {m.count > 0 && (
                <span className={styles.timelineCount}>{m.count}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
