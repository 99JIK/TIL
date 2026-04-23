---
title: "Docusaurus에 ChannelTalk 채팅 위젯 연동하기"
sidebar_label: "Docusaurus ChannelTalk 연동"
tags: [docusaurus, channeltalk, react, swizzle]
date: 2026-03-13
---

# Docusaurus에 ChannelTalk 채팅 위젯 연동하기

## 배운 것

Docusaurus 사이트에 ChannelTalk(채널톡) 채팅 위젯을 추가하려면, 레이아웃 컴포넌트를 **swizzle**해서 `useEffect` 훅으로 스크립트를 주입해야 한다.  
단순히 `<script>` 태그를 삽입하는 방식은 SSR(서버사이드 렌더링) 환경에서 `window` 객체가 없어 오류가 발생한다.

## 핵심 포인트

### 1. Layout 컴포넌트 swizzle

```bash
npm run swizzle @docusaurus/theme-classic Layout -- --wrap
```

`src/theme/Layout/index.tsx` 파일이 생성되며, 이 파일에서 원본 Layout을 래핑할 수 있다.

### 2. SSR 안전한 스크립트 주입 패턴

`useEffect` 내에서 `typeof window !== 'undefined'`를 확인한 뒤 스크립트를 주입해야 한다.

```tsx
useEffect(() => {
  if (typeof window !== 'undefined') {
    bootChannelTalk();
    initializeChannelTalk();
  }
}, []);
```

### 3. ChannelTalk boot 설정

`pluginKey`와 함께 `accessSecret`도 전달해야 인증이 정상 동작한다.  
채널톡 대시보드 → 설정 → 플러그인에서 두 값을 모두 확인할 수 있다.

```tsx
window.ChannelIO('boot', {
  pluginKey: "YOUR_PLUGIN_KEY",
  accessSecret: "YOUR_ACCESS_SECRET"
});
```

### 4. 중복 부팅 방지

`ChannelIO.booted` 플래그를 체크해 여러 번 `boot`가 호출되는 것을 막는다.

```tsx
function bootChannelTalk() {
  if (window.ChannelIO) return; // 이미 로드된 경우 스킵
  // ...
}
```

## 왜 이렇게 하나?

Docusaurus는 빌드 시 SSR을 수행하므로, 브라우저 전용 API(`window`, `document`)를 최상위에서 직접 호출하면 빌드가 깨진다.  
`useEffect`는 클라이언트 사이드에서만 실행되므로 안전하게 외부 스크립트를 초기화할 수 있다.

## 참고

- [ChannelTalk 웹 플러그인 설치 가이드](https://developers.channel.io/docs/web-channelio-script)
- [Docusaurus Swizzling](https://docusaurus.io/docs/swizzling)
