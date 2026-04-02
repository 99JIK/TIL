import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import pageStyles from '@site/src/pages/index.module.css';
import styles from './styles.module.css';

const INTERESTS = [
  'Software Testing',
  'Behavior Tree',
  'Large Language Model',
  'Database',
  'Autonomous Driving',
];

export default function ProfileCardItem({gridClasses}: {gridClasses?: string}): JSX.Element {
  return (
    <aside className={clsx(pageStyles.newspaperCard, gridClasses, styles.profileCard)}>
      <div className={styles.profileContent}>
        <img src="https://github.com/99JIK.png" alt="99JIK" className={styles.profileAvatar} />
        <div className={styles.profileName}>99JIK</div>
        <div className={styles.profileLab}>KNU STLAB · 경북대 컴퓨터학부 석사과정</div>
        <div className={styles.profileInterests}>
          {INTERESTS.map((tag) => (
            <Link key={tag} to={`/papers/tags/${tag.toLowerCase().replace(/ /g, '-')}`} className={styles.profileTag}>
              {tag}
            </Link>
          ))}
        </div>
        <div className={styles.profileLinks}>
          <Link to="https://github.com/99jik" className={styles.profileLink}>GitHub</Link>
          <Link to="mailto:99jik@99jik.com" className={styles.profileLink}>Email</Link>
          <Link to="/Who-am-I" className={styles.profileLinkPrimary}>About →</Link>
        </div>
      </div>
    </aside>
  );
}
