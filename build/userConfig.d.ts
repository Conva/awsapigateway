/// <reference types="yargs" />
export interface UserSpceifiedMockServerOptions {
    entryPoint?: string;
}
export interface UserSpecifiedProxyOptions {
    resource?: string;
    accountId?: string;
    stage?: string;
}
export declare type UserPresets = UserSpecifiedProxyOptions & UserSpceifiedMockServerOptions;
/**
 * Fetches user specified config from config.json
 */
export declare const getUserConfig: () => {
    [x: string]: unknown;
    port: number;
    verbose: boolean;
    entryPoint: string;
    resource: string;
    accountId: string;
    stage: string;
    _: string[];
    $0: string;
};
