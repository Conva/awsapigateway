import { LamdaResult } from "./aws-lamda";
export interface GatewayResponse {
    request: {};
    proxy: {};
    response: {} | null;
}
export declare const writeGatwayResponse: (path: string, method: string, { proxy, response, request }: LamdaResult) => void;
