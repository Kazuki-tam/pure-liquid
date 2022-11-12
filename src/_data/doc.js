/* eslint-disable */
require('dotenv').config();
const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async () => {
  try {
    const MICROCMS_DOMAIN = process.env.MICROCMS_DOMAIN;
    const MICROCMS_API_KEY = process.env.MICROCMS_API_KEY;
    if (!MICROCMS_DOMAIN || !MICROCMS_API_KEY) return;
    const url = `${MICROCMS_DOMAIN}/api/v1/page`;
    return EleventyFetch(url, {
      duration: '1d',
      type: 'json',
      fetchOptions: {
        headers: {
          // microCMS API key
          'X-MICROCMS-API-KEY': MICROCMS_API_KEY,
        },
      },
    });
  } catch (e) {
    console.error(e);
    return {
      // fallback data
    };
  }
};
