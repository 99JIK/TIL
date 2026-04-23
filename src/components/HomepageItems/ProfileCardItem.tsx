import React, {useMemo} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import pageStyles from '@site/src/pages/index.module.css';
import styles from './styles.module.css';

interface PluginData {
  topTags?: {tag: string; count: number}[];
}

const FALLBACK_INTERESTS = [
  'Software Testing',
  'Behavior Tree',
  'Large Language Model',
  'Database',
  'Autonomous Driving',
];

const MAX_TAGS = 5;

function toSlug(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export default function ProfileCardItem({gridClasses}: {gridClasses?: string}): JSX.Element {
  const data = usePluginData('paper-stats-plugin') as PluginData | undefined;

  const interests = useMemo(() => {
    const top = data?.topTags ?? [];
    if (top.length === 0) return FALLBACK_INTERESTS;
    return top.slice(0, MAX_TAGS).map((t) => t.tag);
  }, [data]);

  return (
    <aside className={clsx(pageStyles.newspaperCard, gridClasses, styles.profileCard)}>
      <div className={styles.profileContent}>
        <img src="https://github.com/99JIK.png" alt="99JIK" className={styles.profileAvatar} />
        <div className={styles.profileName}>99JIK</div>
        <div className={styles.profileLab}>KNU STLAB · 경북대 컴퓨터학부 석사과정</div>
        <div className={styles.profileInterests}>
          {interests.map((tag) => (
            <Link key={tag} to={`/papers/tags/${toSlug(tag)}`} className={styles.profileTag}>
              {tag}
            </Link>
          ))}
        </div>
        <div className={styles.profileLinks}>
          <Link to="https://github.com/99jik" className={styles.profileLink}>GitHub</Link>
          <Link to="mailto:99jik@99jik.com" className={styles.profileLink}>Email</Link>
          <Link to="https://99jik.com" className={styles.profileLinkPrimary}>About →</Link>
        </div>
      </div>
    </aside>
  );
}
