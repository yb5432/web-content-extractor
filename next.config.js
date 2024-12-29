/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push({
        'chrome-aws-lambda': 'chrome-aws-lambda',
      });
    }
    return config;
  },
}

module.exports = nextConfig 