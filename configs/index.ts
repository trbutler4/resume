import { aiMlConfig } from './ai-ml';
import { blockchainConfig } from './blockchain';
import { fullStackConfig } from './full-stack';
import { mobileConfig } from './mobile';
import { suffixLabsConfig } from './suffix-labs';
import { ResumeConfig } from '../types';

export { aiMlConfig, blockchainConfig, fullStackConfig, mobileConfig, suffixLabsConfig };

export const configs: Record<string, ResumeConfig> = {
  'ai-ml': aiMlConfig,
  'blockchain': blockchainConfig,
  'full-stack': fullStackConfig,
  'mobile': mobileConfig,
  'suffix-labs': suffixLabsConfig,
};

export const getConfig = (configType: string): ResumeConfig => {
  const config = configs[configType];
  if (!config) {
    throw new Error(`Config type '${configType}' not found. Available types: ${Object.keys(configs).join(', ')}`);
  }
  return config;
};

export const getAvailableConfigTypes = (): string[] => {
  return Object.keys(configs);
};