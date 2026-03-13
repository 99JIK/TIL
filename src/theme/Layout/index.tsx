import React, { useEffect } from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type {WrapperProps} from '@docusaurus/types';
type Props = WrapperProps<typeof LayoutType>;
declare global {
  interface Window {
    ChannelIO: any;
  }
}
function bootChannelTalk() {
  var w = window;
  if (w.ChannelIO) {
    return;
  }
  var ch = function() {
    ch.c(arguments);
  };
  ch.q = [];
  ch.c = function(args) {
    ch.q.push(args);
  };
  w.ChannelIO = ch;
  function l() {
    if (w.ChannelIO.booted) {
      return;
    }
    w.ChannelIO.booted = true;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
    s.charset = 'UTF-8';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }
  if (document.readyState === 'complete') {
    l();
  } else if (window.attachEvent) {
    window.attachEvent('onload', l);
  } else {
    window.addEventListener('DOMContentLoaded', l, false);
    window.addEventListener('load', l, false);
  }
}

function initializeChannelTalk() {
  if (window.ChannelIO) {
    window.ChannelIO('boot', {
      "pluginKey": "232733" 
    });
  }
}
export default function LayoutWrapper(props: Props): JSX.Element {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      bootChannelTalk();
      initializeChannelTalk();
    }
  }, []);

  return (
    <Layout {...props}>
      {props.children}
    </Layout>
  );
}