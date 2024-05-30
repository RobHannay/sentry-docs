import type {Config} from 'tailwindcss';
import sharedConfig from '@sentry-docs/tailwind-config';

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  presets: [sharedConfig],
};

export default config;
