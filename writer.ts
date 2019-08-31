import { writeFileSync } from "fs";
import { LamdaResult } from "./aws-lamda";

export interface GatewayResponse {
  request: {}
  proxy: {};
  response: {} | null;
}
export const writeGatwayResponse = (
  path: string,
  method: string,
  { proxy, response, request }: LamdaResult
) => {
  const gatewayResp: GatewayResponse = {
    request,
    proxy,
    response: response ? response : null
  };
  let fileName = `${method}${path.replace(/\//g, "-")}.json`;
  try {
    writeFileSync(fileName, JSON.stringify(gatewayResp), {
      encoding: "utf8",
      flag: "w"
    });
    console.info(`Wrote gateway response tp '${fileName}'`);
  } catch (e) {
    console.error(e);
  }
};
