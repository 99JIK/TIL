// src/pages/index.tsx
import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import PaperStatsItem from '@site/src/components/HomepageItems/PaperStatsItem';
import FeelingLuckyItem from '@site/src/components/HomepageItems/FeelingLuckyItem';
import GuideItem from '@site/src/components/HomepageItems/GuideItem';
import RecentPapersItem from '@site/src/components/HomepageItems/RecentPapersItem';
import RecentDocsItem from '@site/src/components/HomepageItems/RecentDocsItem';
import ProfileCardItem from '@site/src/components/HomepageItems/ProfileCardItem';
import ResearchTimelineItem from '@site/src/components/HomepageItems/ResearchTimelineItem';

import styles from './index.module.css';

const homepageData = {
  mainArticle: {
    title: "Glad to Introduce Myself",
    summary: "경북대학교 컴퓨터학부 석사 과정에 재학 중인 김정인입니다. 데이터베이스와 소프트웨어 테스팅 기법에 관심이 있으며 현재 KNU STLAB에 소속중입니다.",
    link: "/Who-am-I",
    image: '/img/background.jpg',
  },
  guide: {
    title: "Guide of 99JIK.com",
    summary: "이 사이트은 Docs에서는 주제별 학습 내용을, Papers에서는 논문 요약을 찾아볼 수 있습니다.",
    link: "/How-to-Read",
  },
};

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
        {/* A: Hero — Profile (8) + Lucky+Stats stacked (4) */}
        <ProfileCardItem gridClasses={g.gridA1} />
        <FeelingLuckyItem gridClasses={g.gridA2} />
        <PaperStatsItem gridClasses={g.gridA3} />

        {/* B: Timeline full width (12) */}
        <ResearchTimelineItem gridClasses={g.gridB1} />

        {/* C: Two-column — Papers (6) + Docs (6) */}
        <RecentPapersItem gridClasses={g.gridC1} />
        <RecentDocsItem gridClasses={g.gridC2} />

        {/* D: Guide full width (12) */}
        <GuideItem {...homepageData.guide} gridClasses={g.gridD1} />
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
