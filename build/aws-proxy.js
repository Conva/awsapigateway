"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_decode_1 = __importDefault(require("jwt-decode"));
/**
 * Retrieves claims from authorization header token
 * @param sAuthorization Authorization header value
 */
exports.getClaims = function (sAuthorization) {
    try {
        var tMatch = sAuthorization.match(/Bearer (.*)/);
        var token = tMatch ? tMatch[1] : null;
        if (token) {
            return jwt_decode_1.default(token);
        }
        else {
            return undefined;
        }
    }
    catch (_a) {
        return undefined;
    }
};
/**
 * Create payload for AWS lamda mock server request
 * @param options Options for AWS lamda payload
 */
exports.awsProxyFrom = function (_a) {
    var _b = _a.headers, headers = _b === void 0 ? {} : _b, body = _a.body, _c = _a.path, path = _c === void 0 ? "" : _c, _d = _a.resource, resource = _d === void 0 ? "/{proxy+}" : _d, _e = _a.method, method = _e === void 0 ? "POST" : _e, _f = _a.accountId, accountId = _f === void 0 ? "123456789012" : _f, _g = _a.stage, stage = _g === void 0 ? "prod" : _g;
    var authorizer = null;
    var authorization = headers["authorization"];
    if (authorization && !Array.isArray(authorization)) {
        authorizer = {
            claims: exports.getClaims(authorization)
        };
    }
    return {
        body: JSON.stringify(body) || null,
        resource: resource,
        path: path,
        httpMethod: method,
        isBase64Encoded: "false",
        queryStringParameters: {
            foo: "bar"
        },
        pathParameters: {
            proxy: path
        },
        stageVariables: {
            baz: "qux"
        },
        headers: __assign({}, headers, {
            "CloudFront-Forwarded-Proto": "https",
            "CloudFront-Is-Desktop-Viewer": "true",
            "CloudFront-Is-Mobile-Viewer": "false",
            "CloudFront-Is-SmartTV-Viewer": "false",
            "CloudFront-Is-Tablet-Viewer": "false",
            "CloudFront-Viewer-Country": "US",
            "Upgrade-Insecure-Requests": "1",
            Via: "1.1 08f323deadbeefa7af34d5feb414ce27.cloudfront.net (CloudFront)",
            "X-Amz-Cf-Id": "cDehVQoZnx43VYQb9j2-nvCh-9z396Uhbp027Y2JvkCPNLmGJHqlaA==",
            "X-Forwarded-For": "127.0.0.1, 127.0.0.2",
            "X-Forwarded-Port": "443",
            "X-Forwarded-Proto": "https"
        }),
        requestContext: {
            accountId: accountId,
            resourceId: "123456",
            stage: stage,
            requestId: "c6af9ac6-7b61-11e6-9a41-93e8deadbeef",
            requestTime: "09/Apr/2015:12:34:56 +0000",
            requestTimeEpoch: 1428582896000,
            authorizer: authorizer,
            identity: {
                cognitoIdentityPoolId: null,
                accountId: null,
                cognitoIdentityId: null,
                caller: null,
                accessKey: null,
                sourceIp: "127.0.0.1",
                cognitoAuthenticationType: null,
                cognitoAuthenticationProvider: null,
                userArn: null,
                userAgent: "Custom User Agent String",
                user: null
            },
            path: "/" + stage + "/" + path,
            resourcePath: resource,
            httpMethod: method,
            apiId: "1234567890",
            protocol: "HTTP/1.1"
        }
    };
};
//# sourceMappingURL=aws-proxy.js.map