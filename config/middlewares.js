module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'https://bnjdesign.com.tw',
        'https://www.bnjdesign.com.tw',
        'http://bnjdesign.com.tw',
        'http://www.bnjdesign.com.tw',
        'http://localhost:3000',
        'http://localhost:8000',
        'http://localhost:5500',
        'http://127.0.0.1:5500'
      ],
      headers: '*'
    }
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
