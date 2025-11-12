import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: '🎯 ForgeNest',
      transparentMode: 'top',
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'API Reference',
        url: '/docs/api-reference',
      },
      {
        text: 'Live App',
        url: 'https://forgenest.vercel.app/',
        external: true,
      },
    ],
  };
}
