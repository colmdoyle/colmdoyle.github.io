'use strict';

const React = require('react');
const siteConfig = require('../config.js');

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved

const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setPostBodyComponents([
    React.createElement('script', {
      key: 'inline-play-tracking',
      dangerouslySetInnerHTML: { __html: `function logPlay(file) {window.plausible ? window.plausible('audioPlay', {props: {file}}) : console.warn('plausible not initialized')}` }
    })
  ])

};

module.exports = onRenderBody;
