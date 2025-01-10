import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'github.blog',
    }],
    deviceSizes: [320, 640, 1080, 1200],
    imageSizes: [64, 128],
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['url-loader'],
          as: '*.js',
        },
      },
    },
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: [{ loader: '@svgr/webpack' }, { loader: 'url-loader' }],
    });

    return config;
  },
};

export default withBundleAnalyzer(config);
