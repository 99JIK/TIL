import React, {useEffect} from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type {WrapperProps} from '@docusaurus/types';

type Props = WrapperProps<typeof LayoutType>;

declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
  }
}

function bootCrisp() {
  if (window.$crisp) return;
  window.$crisp = [];
  window.CRISP_WEBSITE_ID = 'ad733172-a6e8-4c76-accb-78e3b5748820';

  const s = document.createElement('script');
  s.src = 'https://client.crisp.chat/l.js';
  s.async = true;
  document.getElementsByTagName('head')[0].appendChild(s);
}

function CrispLoader() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    bootCrisp();
  }, []);

  return null;
}

export default function LayoutWrapper(props: Props): JSX.Element {
  return (
    <Layout {...props}>
      <CrispLoader />
      {props.children}
    </Layout>
  );
}
