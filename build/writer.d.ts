import { LamdaResult } from "./aws-lamda";
export interface GatewayResponse {
    proxy: {};
    response: {} | null;
}
export declare const writeGatwayResponse: (path: string, method: string, { proxy, response }: LamdaResult) => void;
