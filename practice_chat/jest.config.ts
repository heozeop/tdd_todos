import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};

export default config;
