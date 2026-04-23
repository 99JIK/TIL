import React, {useMemo} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import blogList from '@generated/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json';
import pageStyles from '@site/src/pages/index.module.css';
import styles from './styles.module.css';

interface BlogPost {
  title: string;
  permalink: string;
  date: string;
  unlisted?: boolean;
}

interface RecentBlogItemProps {
  gridClasses?: string;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
}

export default function RecentBlogItem({gridClasses}: RecentBlogItemProps): JSX.Element {
  const recentPosts = useMemo(() => {
    const items = (blogList.items ?? []) as BlogPost[];
    return items
      .filter((p) => !p.unlisted)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
  }, []);

  const hasPosts = recentPosts.length > 0;

  return (
    <aside className={clsx(pageStyles.newspaperCard, gridClasses, styles.recentCard)}>
      <div className={styles.recentContent}>
        <div className={styles.recentHeader}>Recent Blog</div>
        {hasPosts ? (
          <div className={styles.recentList}>
            {recentPosts.map((post, i) => (
              <Link key={i} to={post.permalink} className={styles.recentItem}>
                <span className={styles.recentTitle}>{post.title}</span>
                <span className={styles.recentDate}>{formatDate(post.date)}</span>
              </Link>
            ))}
          </div>
        ) : (
          <p className={styles.recentEmpty}>
            학회·세미나 참석 기록을 여기에 남길 예정입니다.
          </p>
        )}
        <Link to="/blog" className={styles.recentMore}>
          전체 블로그 보기 →
        </Link>
      </div>
    </aside>
  );
}
