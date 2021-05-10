'use strict';

const React = require('react');
const siteConfig = require('../config.js');

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
const katexStylesheet = require('!css-loader!../static/css/katex/katex.min.css');

const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  const { useKatex } = siteConfig;
  setPostBodyComponents([
    React.createElement('script', {
      key: 'inline-play-tracking',
      dangerouslySetInnerHTML: { __html: `function logPlay(file) {window.plausible ? window.plausible('audioPlay', {props: {file}}) : console.warn('plausible not initialized')}` }
    })
  ])
  if (useKatex) {
    setHeadComponents([
      React.createElement('style', {
        key: 'katex-inline-stylesheet',
        dangerouslySetInnerHTML: { __html: katexStylesheet.toString() }
      })
    ]);
  }
};

module.exports = onRenderBody;
