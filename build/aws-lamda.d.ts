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
    Response?: LamdaResponse;
    IsSuccess: boolean;
    StatusCode: number | null;
    Error?: Error;
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
export declare const getLamdaResp: ({ body, headers, method, path }: express.Request) => Promise<LamdaResult>;
