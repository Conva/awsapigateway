import express from "express";
import { RequestInit } from "node-fetch";
export interface LamdaRequest {
    headers: {};
    body: string;
}
export declare type LamdaResponse = LamdaRequest & {
    multiValueHeaders: {
        [key: string]: string[];
    };
    statusCode: number;
    isBase64Encoded: false;
};
export declare type LamdaResult = {
    response?: LamdaResponse;
    request: LamdaRequest;
    isSuccess: boolean;
    error?: Error;
    proxy: {};
};
/**
 * Creates AWS lamda request to send to Lamda mock server
 * @param payload Payload to include in request
 */
export declare const lamdaRequestFrom: (payload: {}) => RequestInit;
/**
 * Interfaces with AWS Lamda Mock Server function handler
 * @param params Parameters from Rest request
 */
export declare const getLamdaResult: ({ body, headers, method, path, statusCode }: express.Request) => Promise<LamdaResult>;
