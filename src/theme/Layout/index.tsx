import React, {useEffect} from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type {WrapperProps} from '@docusaurus/types';
import {useColorMode} from '@docusaurus/theme-common';

type Props = WrapperProps<typeof LayoutType>;

declare global {
  interface Window {
    ChannelIO: any;
  }
}

function bootChannelTalk() {
  const w = window;
  if (w.ChannelIO) return;

  const ch: any = function () {
    ch.c(arguments);
  };
  ch.q = [];
  ch.c = function (args: any) {
    ch.q.push(args);
  };
  w.ChannelIO = ch;

  function l() {
    if (w.ChannelIO.booted) return;
    w.ChannelIO.booted = true;
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
    s.charset = 'UTF-8';
    const x = document.getElementsByTagName('script')[0];
    x.parentNode!.insertBefore(s, x);
  }

  if (document.readyState === 'complete') {
    l();
  } else {
    window.addEventListener('DOMContentLoaded', l, false);
    window.addEventListener('load', l, false);
  }
}

function initializeChannelTalk(theme: 'light' | 'dark') {
  if (window.ChannelIO) {
    window.ChannelIO('boot', {
      pluginKey: 'eed09f27-07bc-49b7-8f04-4cf650271dbc',
      accessSecret: '54a71624ba7a35f25f25a9324993745b',
      appearance: theme === 'dark' ? 'dark' : 'light',
    });
  }
}

function updateChannelTalkTheme(theme: 'light' | 'dark') {
  if (window.ChannelIO) {
    window.ChannelIO('setAppearance', theme === 'dark' ? 'dark' : 'light');
  }
}

function ChannelTalkLoader() {
  const {colorMode} = useColorMode();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    bootChannelTalk();
    initializeChannelTalk(colorMode);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    updateChannelTalkTheme(colorMode);
  }, [colorMode]);

  return null;
}

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <Layout {...props}>
      <ChannelTalkLoader />
      {props.children}
    </Layout>
  );
}
