---
title: Docusaurus에 ChannelTalk 위젯 연동하기
description: SSR 환경에서 브라우저 전용 스크립트를 안전하게 주입하는 swizzle 패턴.
tags: [docusaurus, channeltalk, swizzle, ssr]
sidebar_position: 1
last_update:
  date: 2026-03-13
---

# Docusaurus에 ChannelTalk 위젯 연동하기

## Context

Docusaurus 사이트에 ChannelTalk(채널톡) 채팅 위젯을 붙일 때 참고. 단순히 `<script>` 태그로 주입하면 SSR 빌드 단계에서 `window`가 없어 빌드가 깨진다. Layout 컴포넌트를 swizzle해서 `useEffect` 안에서 초기화하는 패턴이 정답.

## Prerequisites

- Docusaurus 3.x 프로젝트
- ChannelTalk 대시보드에서 발급한 `pluginKey`, `accessSecret`

## Steps

### 1. Layout 컴포넌트 swizzle

```bash
npm run swizzle @docusaurus/theme-classic Layout -- --wrap
```

`src/theme/Layout/index.tsx`가 생성된다. 이 파일에서 원본 Layout을 래핑한다.

### 2. SSR 안전하게 스크립트 주입

`useEffect` 안에서 `typeof window !== 'undefined'` 확인 후 초기화한다.

```tsx
useEffect(() => {
  if (typeof window !== 'undefined') {
    bootChannelTalk();
  }
}, []);
```

### 3. ChannelIO boot 호출

`pluginKey`만이 아니라 `accessSecret`도 함께 전달해야 인증이 통과된다.

```tsx
window.ChannelIO('boot', {
  pluginKey: 'YOUR_PLUGIN_KEY',
  accessSecret: 'YOUR_ACCESS_SECRET',
});
```

### 4. 중복 부팅 방지

라우트 전환마다 `boot`가 다시 호출되지 않도록 가드를 둔다.

```tsx
function bootChannelTalk() {
  if (window.ChannelIO) return;
  // 스크립트 로더 + boot 호출
}
```

## Verification

빌드가 통과하고, 사이트에서 채팅 아이콘이 우측 하단에 뜨면 정상. 라우트를 이동해도 위젯이 두 번 로드되지 않아야 한다.

```bash
npm run build
```

## Why this approach

Docusaurus는 빌드 시 SSR을 수행하므로 `window` / `document` 같은 브라우저 전용 API를 최상위에서 직접 호출하면 빌드가 깨진다. `useEffect`는 클라이언트에서만 실행되므로 외부 스크립트 초기화에 적합하다.

## Related

- [ChannelTalk 웹 플러그인 설치](https://developers.channel.io/docs/web-channelio-script)
- [Docusaurus Swizzling](https://docusaurus.io/docs/swizzling)
