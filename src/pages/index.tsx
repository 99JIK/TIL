// src/pages/index.tsx
import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

// 새로 만든 홈페이지 아이템 컴포넌트들
import MainArticleItem from '@site/src/components/HomepageItems/MainArticleItem';
import KeywordsAdItem from '@site/src/components/HomepageItems/KeywordsAdItem';
import AdPlaceholderItem from '@site/src/components/HomepageItems/AdPlaceholderItem';
import FeelingLuckyItem from '@site/src/components/HomepageItems/FeelingLuckyItem';
import GuideItem from '@site/src/components/HomepageItems/GuideItem';

import styles from './index.module.css';

// 홈페이지 콘텐츠 데이터
const homepageData = {
  mainArticle: {
    title: "Glad to Introduce Myself",
    summary: "경북대학교 컴퓨터학부 석사 과정에 재학 중인 김정인입니다. 데이터베이스와 소프트웨어 테스팅 기법에 관심이 있으며 현재 KNU STLAB에 소속중입니다.",
    link: "/Who-am-I",
    image: '/img/background.jpg',
  },
  keywordsAd: {
    title: "Paper I Read",
    text: "제가 읽고 정리한 논문들을 키워드 별로 찾아보세요.",
    link: "/papers/tags",
    linkText: "키워드별 논문 보기",
  },
  guide: {
    title: "Guide of 99JIK.com",
    summary: "이 사이트은 Docs에서는 주제별 학습 내용을, Papers에서는 논문 요약을 찾아볼 수 있습니다.",
    link: "/How-to-Read",
  },
  // 광고 플레이스홀더 데이터 (필요시 추가)
  adPlaceholder: {
    imageUrl: "/img/ad.gif",
    altText: "광고 영역",
    linkUrl: "#" // 실제 광고 링크
  }
};

// 그리드 아이템 설정 (예: 12컬럼 기반)
// [x, y, width, height] 또는 CSS grid-area 이름 사용 가능
// 여기서는 grid-column과 grid-row를 CSS에서 직접 제어하는 방식을 사용합니다.
// 대신 각 컴포넌트에 특정 클래스를 부여하여 CSS에서 제어합니다.
const gridItemLayout = {
  mainArticle: styles.gridMainArticle, // 예: grid-column: span 7; grid-row: span 2;
  keywordsAd: styles.gridKeywordsAd,   // 예: grid-column: span 5; grid-row: span 1;
  adPlaceholder: styles.gridAdPlaceholder, // 예: grid-column: span 5; grid-row: span 1; (키워드 광고 아래)
  feelingLucky: styles.gridLatestNews,   // 예: grid-column: span 7; grid-row: span 2;
  guide: styles.gridGuide,             // 예: grid-column: span 5; grid-row: span 2;
};


function NewspaperHomepageLayout(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const today = new Date();
  const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  return (
    <div className={styles.newspaperContainer}>
      <header className={styles.newspaperHeader}>
        <Heading as="h1" className={styles.newspaperTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.newspaperDate}>{formattedDate} | 오늘의 배움을 기록합니다.</p>
      </header>

      <div className={styles.newspaperGrid}>
        <MainArticleItem {...homepageData.mainArticle} gridClasses={gridItemLayout.mainArticle} />
        <KeywordsAdItem {...homepageData.keywordsAd} gridClasses={gridItemLayout.keywordsAd} />
        <AdPlaceholderItem 
          gridClasses={gridItemLayout.adPlaceholder}
          imageUrl={homepageData.adPlaceholder?.imageUrl}
          linkUrl={homepageData.adPlaceholder?.linkUrl}
        />

        <FeelingLuckyItem gridClasses={gridItemLayout.feelingLucky} /> 
        <GuideItem {...homepageData.guide} gridClasses={gridItemLayout.guide} />
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
      wrapperClassName={styles.homePageWrapper}
    >
      <NewspaperHomepageLayout />
    </Layout>
  );
}
