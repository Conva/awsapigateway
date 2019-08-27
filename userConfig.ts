import userConfig from "./config.json";

export interface UserSpceifiedMockServerOptions {
  entryPoint?: string; // Entry point of mock server
}

export interface UserSpecifiedProxyOptions {
  resource?: string;
  account_id?: string;
  stage?: string;
}
export type UserPresets = UserSpecifiedProxyOptions &
  UserSpceifiedMockServerOptions;

/**
 * Fetches user specified config from config.json
 */
export const getUserConfig = () => {
  const vUserConfig: UserPresets = userConfig;
  if (!vUserConfig.entryPoint) {
    throw new Error("Entry point for mock server not specified in config.json");
  }
  return userConfig;
};
