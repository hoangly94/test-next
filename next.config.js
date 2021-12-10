/** @type {import('next').NextConfig} */
const path = require('path');
const withCSS = require('@zeit/next-css')
const { withPlugins } = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['sezy-design']);

module.exports = withPlugins([withTM], {
  reactStrictMode: true,
});