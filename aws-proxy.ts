export interface UserSpecifiedProxyOptions {
  resource?: string;
  account_id?: string;
  stage?: string;
}

export type ProxyOptions = {
  body?: any;
  path?: string;
  method?: string;
  headers?: {};
} & UserSpecifiedProxyOptions;

export const awsProxyFrom = ({
  headers = {},
  body,
  path = "",
  resource = "/{proxy+}",
  method = "POST",
  account_id = "123456789012",
  stage = "prod"
}: ProxyOptions) => {
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
    headers: {
      ...headers,
      ...{
        "CloudFront-Forwarded-Proto": "https",
        "CloudFront-Is-Desktop-Viewer": "true",
        "CloudFront-Is-Mobile-Viewer": "false",
        "CloudFront-Is-SmartTV-Viewer": "false",
        "CloudFront-Is-Tablet-Viewer": "false",
        "CloudFront-Viewer-Country": "US",
        "Upgrade-Insecure-Requests": "1",
        Via: "1.1 08f323deadbeefa7af34d5feb414ce27.cloudfront.net (CloudFront)",
        "X-Amz-Cf-Id":
          "cDehVQoZnx43VYQb9j2-nvCh-9z396Uhbp027Y2JvkCPNLmGJHqlaA==",
        "X-Forwarded-For": "127.0.0.1, 127.0.0.2",
        "X-Forwarded-Port": "443",
        "X-Forwarded-Proto": "https"
      }
    },
    requestContext: {
      accountId: account_id,
      resourceId: "123456",
      stage: "{{stage}}",
      requestId: "c6af9ac6-7b61-11e6-9a41-93e8deadbeef",
      requestTime: "09/Apr/2015:12:34:56 +0000",
      requestTimeEpoch: 1428582896000,
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
      path: `/${stage}/${path}`,
      resourcePath: resource,
      httpMethod: method,
      apiId: "1234567890",
      protocol: "HTTP/1.1"
    }
  };
};
