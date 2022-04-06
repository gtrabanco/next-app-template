/** @type {import('next').NextConfig} */

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];

const compilerOptions = {
  styledComponents: true,
  reactRemoveProperties: true,
};

if (process.env.NODE_ENV === 'production') {
  compilerOptions.removeConsole = {
    exclude: ['error'],
  };
}

module.exports = {
  trailingSlash: false,
  poweredByHeader: false,
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  onDemandEntries: {
    maxInactiveAge: 5000,
    pagesBufferLength: 2,
  },
  compiler: {
    ...compilerOptions,
  },
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  pageExtensions: ['page.jsx', 'page.js'],
};
