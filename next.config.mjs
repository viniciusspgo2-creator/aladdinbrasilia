/** @type {import('next').NextConfig} */
const config = { reactStrictMode: true, poweredByHeader: false, experimental: { serverActions: { bodySizeLimit: '4mb' } } };
export default config;
