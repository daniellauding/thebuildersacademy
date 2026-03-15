import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/nextjs-vite",
  "staticDirs": [
    "../public"
  ],
  async viteFinal(config) {
    return {
      ...config,
      server: {
        ...config.server,
        host: '0.0.0.0',
        strictPort: false,
        allowedHosts: [
          'claudebot.taild61ab7.ts.net',
          'localhost',
          '.ts.net',
        ],
      },
    };
  },
};
export default config;