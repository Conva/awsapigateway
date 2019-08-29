import { writeFileSync } from "fs";
import { LamdaResult } from "./aws-lamda";

export interface GatewayResponse {
  proxy: {};
  response: {} | null;
}
export const writeGatwayResponse = (
  path: string,
  { proxy, response }: LamdaResult
) => {
  const gatewayResp: GatewayResponse = {
    proxy,
    response: response ? response : null
  };
  let fileName = `request${path.replace(/\//g, "-")}.json`;
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
