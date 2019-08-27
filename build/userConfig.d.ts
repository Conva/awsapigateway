/// <reference types="yargs" />
export interface UserSpceifiedMockServerOptions {
    entryPoint?: string;
}
export interface UserSpecifiedProxyOptions {
    resource?: string;
    account_id?: string;
    stage?: string;
}
export declare type UserPresets = UserSpecifiedProxyOptions & UserSpceifiedMockServerOptions;
/**
 * Fetches user specified config from config.json
 */
export declare const getUserConfig: () => {
    [x: string]: unknown;
    port: number;
    entryPoint: string;
    resource: string;
    account_id: string;
    stage: string;
    _: string[];
    $0: string;
};
