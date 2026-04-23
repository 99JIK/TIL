// src/pages/index.tsx
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import PaperStatsItem from '@site/src/components/HomepageItems/PaperStatsItem';
import FeelingLuckyItem from '@site/src/components/HomepageItems/FeelingLuckyItem';
import AnnouncementItem from '@site/src/components/HomepageItems/AnnouncementItem';
import RecentPapersItem from '@site/src/components/HomepageItems/RecentPapersItem';
import RecentDocsItem from '@site/src/components/HomepageItems/RecentDocsItem';
import RecentBlogItem from '@site/src/components/HomepageItems/RecentBlogItem';
import ProfileCardItem from '@site/src/components/HomepageItems/ProfileCardItem';
import ResearchTimelineItem from '@site/src/components/HomepageItems/ResearchTimelineItem';

import styles from './index.module.css';

const g = styles;

function NewspaperHomepageLayout(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return (
    <div className={g.newspaperContainer}>
      <header className={g.newspaperHeader}>
        <Heading as="h1" className={g.newspaperTitle}>
          {siteConfig.title}
        </Heading>
        <p className={g.newspaperDate}>{formattedDate} | 오늘의 배움을 기록합니다.</p>
      </header>

      <div className={g.newspaperGrid}>
        {/* A: Profile (4) + Announcements (8) — asymmetric hero */}
        <ProfileCardItem gridClasses={g.gridA1} />
        <AnnouncementItem gridClasses={g.gridA2} />

        {/* B: Timeline (8) + Stats (4) — data + numbers */}
        <ResearchTimelineItem gridClasses={g.gridB1} />
        <PaperStatsItem gridClasses={g.gridB2} />

        {/* C: Papers (4) + Docs (4) + Blog (4) — recent trio */}
        <RecentPapersItem gridClasses={g.gridC1} />
        <RecentDocsItem gridClasses={g.gridC2} />
        <RecentBlogItem gridClasses={g.gridC3} />

        {/* D: Feeling Lucky full width — big CTA */}
        <FeelingLuckyItem gridClasses={g.gridD1} />
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`새로운 소식 - ${siteConfig.title}`}
      description={siteConfig.tagline}
      wrapperClassName={g.homePageWrapper}
    >
      <NewspaperHomepageLayout />
    </Layout>
  );
}
