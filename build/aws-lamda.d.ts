import express from "express";
import { RequestInit } from "node-fetch";
export interface LamdaResponse {
    statusCode: number;
    headers: {};
    multiValueHeaders: {
        [key: string]: string[];
    };
    body: string;
    isBase64Encoded: false;
}
export declare type LamdaResult = {
    response?: LamdaResponse;
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
export declare const getLamdaResult: ({ body, headers, method, path }: express.Request) => Promise<LamdaResult>;
