/// <reference types="node" />
import { IncomingHttpHeaders } from "http";
import { UserSpecifiedProxyOptions } from "./userConfig";
export declare type ProxyOptions = {
    body?: any;
    path?: string;
    method?: string;
    headers?: IncomingHttpHeaders;
} & UserSpecifiedProxyOptions;
/**
 * Retrieves claims from authorization header token
 * @param sAuthorization Authorization header value
 */
export declare const getClaims: (sAuthorization: string) => {} | undefined;
/**
 * Create payload for AWS lamda mock server request
 * @param options Options for AWS lamda payload
 */
export declare const awsProxyFrom: ({ headers, body, path, resource, method, account_id, stage }: ProxyOptions) => {
    body: string | null;
    resource: string;
    path: string;
    httpMethod: string;
    isBase64Encoded: string;
    queryStringParameters: {
        foo: string;
    };
    pathParameters: {
        proxy: string;
    };
    stageVariables: {
        baz: string;
    };
    headers: {
        "CloudFront-Forwarded-Proto": string;
        "CloudFront-Is-Desktop-Viewer": string;
        "CloudFront-Is-Mobile-Viewer": string;
        "CloudFront-Is-SmartTV-Viewer": string;
        "CloudFront-Is-Tablet-Viewer": string;
        "CloudFront-Viewer-Country": string;
        "Upgrade-Insecure-Requests": string;
        Via: string;
        "X-Amz-Cf-Id": string;
        "X-Forwarded-For": string;
        "X-Forwarded-Port": string;
        "X-Forwarded-Proto": string;
        'accept'?: string | undefined;
        'accept-language'?: string | undefined;
        'accept-patch'?: string | undefined;
        'accept-ranges'?: string | undefined;
        'access-control-allow-credentials'?: string | undefined;
        'access-control-allow-headers'?: string | undefined;
        'access-control-allow-methods'?: string | undefined;
        'access-control-allow-origin'?: string | undefined;
        'access-control-expose-headers'?: string | undefined;
        'access-control-max-age'?: string | undefined;
        /**
         * Create payload for AWS lamda mock server request
         * @param options Options for AWS lamda payload
         */
        'age'?: string | undefined;
        'allow'?: string | undefined;
        'alt-svc'?: string | undefined;
        'authorization'?: string | undefined;
        'cache-control'?: string | undefined;
        'connection'?: string | undefined;
        'content-disposition'?: string | undefined;
        'content-encoding'?: string | undefined;
        'content-language'?: string | undefined;
        'content-length'?: string | undefined;
        'content-location'?: string | undefined;
        'content-range'?: string | undefined;
        'content-type'?: string | undefined;
        'cookie'?: string | undefined;
        'date'?: string | undefined;
        'expect'?: string | undefined;
        'expires'?: string | undefined;
        'forwarded'?: string | undefined;
        'from'?: string | undefined;
        'host'?: string | undefined;
        'if-match'?: string | undefined;
        'if-modified-since'?: string | undefined;
        'if-none-match'?: string | undefined;
        'if-unmodified-since'?: string | undefined;
        'last-modified'?: string | undefined;
        'location'?: string | undefined;
        'pragma'?: string | undefined;
        'proxy-authenticate'?: string | undefined;
        'proxy-authorization'?: string | undefined;
        'public-key-pins'?: string | undefined;
        'range'?: string | undefined;
        'referer'?: string | undefined;
        'retry-after'?: string | undefined;
        'set-cookie'?: string[] | undefined;
        'strict-transport-security'?: string | undefined;
        'tk'?: string | undefined;
        'trailer'?: string | undefined;
        'transfer-encoding'?: string | undefined;
        'upgrade'?: string | undefined;
        'user-agent'?: string | undefined;
        'vary'?: string | undefined;
        'via'?: string | undefined;
        'warning'?: string | undefined;
        'www-authenticate'?: string | undefined;
    };
    requestContext: {
        accountId: string;
        resourceId: string;
        stage: string;
        requestId: string;
        requestTime: string;
        requestTimeEpoch: number;
        authorizer: {} | null;
        identity: {
            cognitoIdentityPoolId: null;
            accountId: null;
            cognitoIdentityId: null;
            caller: null;
            accessKey: null;
            sourceIp: string;
            cognitoAuthenticationType: null;
            cognitoAuthenticationProvider: null;
            userArn: null;
            userAgent: string;
            user: null;
        };
        path: string;
        resourcePath: string;
        httpMethod: string;
        apiId: string;
        protocol: string;
    };
};
