import { aiMlConfig } from "./ai";
import { blockchainConfig } from "./blockchain";
import { fullStackConfig } from "./fullStack";
import { mobileConfig } from "./mobile";
import { suffixLabsConfig } from "./suffixLabs";
import { sreConfig } from "./sre";
import { ResumeConfig } from "../types";

export {
  aiMlConfig,
  blockchainConfig,
  fullStackConfig,
  mobileConfig,
  suffixLabsConfig,
  sreConfig,
};

export const configs: Record<string, ResumeConfig> = {
  ai: aiMlConfig,
  blockchain: blockchainConfig,
  fullStack: fullStackConfig,
  mobile: mobileConfig,
  suffixLabs: suffixLabsConfig,
  sre: sreConfig,
};

export const getConfig = (configType: string): ResumeConfig => {
  const config = configs[configType];
  if (!config) {
    throw new Error(
      `Config type '${configType}' not found. Available types: ${Object.keys(configs).join(", ")}`,
    );
  }
  return config;
};

export const getAvailableConfigTypes = (): string[] => {
  return Object.keys(configs);
};
