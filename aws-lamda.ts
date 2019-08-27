import express from "express";
import fetch, { RequestInit } from "node-fetch";
import { awsProxyFrom } from "./aws-proxy";
export interface LamdaResponse {
  statusCode: number;
  headers: {};
  multiValueHeaders: {
   [key : string]: string[];
  };
  body: string;
  isBase64Encoded: false;
}
export type LamdaResult = {
  Response?: LamdaResponse;
  IsSuccess: boolean;
  Error?: Error;
};

export const lamdaRequestFrom = (payload: {}): RequestInit => {
  return {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/json",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    redirect: "follow", // set to `manual` to extract redirect headers, `error` to reject redirect

    body: JSON.stringify({
      payload: JSON.stringify(payload),
      profile: null,
      region: "us-west-2"
    }),
    method: "POST"
  };
};

export const getLamdaResp = async ({
  body,
  headers,
  method,
  path
}: express.Request): Promise<LamdaResult> => {
  const proxy = awsProxyFrom({
    body,
    headers,
    method,
    path: path.replace(/^\/+/, "")
  });
  const lamdaRequest = lamdaRequestFrom(proxy);
  const fetchResponse = await fetch(
    "http://localhost:5050/webtester-api/Tester/aws-lambda-tools-defaults.json/TestServerless::TestServerless.LambdaEntryPoint::FunctionHandlerAsync",
    lamdaRequest
  );

  try {
    const responseJson: LamdaResponse = JSON.parse(
      JSON.parse(await fetchResponse.text())["response"]
    );
    return {
      Response: responseJson,
      IsSuccess: true
    };
  } catch (e) {
    return {
      Error: e,
      IsSuccess: false
    };
  }
};
