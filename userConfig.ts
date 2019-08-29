import yargs from "yargs";

export interface UserSpceifiedMockServerOptions {
  entryPoint?: string; // Entry point of mock server
}

export interface UserSpecifiedProxyOptions {
  resource?: string;
  accountId?: string;
  stage?: string;
}
export type UserPresets = UserSpecifiedProxyOptions &
  UserSpceifiedMockServerOptions;

/**
 * Fetches user specified config from config.json
 */
export const getUserConfig = () => {
  const argv = yargs
    .usage("Usage: $0 <command> [options]")
    .epilog("Created by @afshawnlotfi")
    .help("h")
    .options({
      port: {
        type: "number",
        alias: "p",
        default: 3000,
        describe: "Port to run server"
      },
      writeResult: {
        type: "boolean",
        alias: "w",
        default: false,
        describe:
          "Writes result of gateway and response from server to json file"
      },
      verbose: {
        type: "boolean",
        alias: "v",
        default: false,
        describe: "Output verbose logs"
      },
      entryPoint: {
        type: "string",
        alias: "e",
        demandOption: true,
        describe: "AWS mock server entry point"
      },
      resource: {
        type: "string",
        alias: "r",
        default: "/{proxy+}",
        describe: "AWS mock resource type"
      },
      accountId: {
        type: "string",
        default: "123456789012",
        describe: "AWS mock account id"
      },
      stage: {
        type: "string",
        alias: "s",
        default: "prod",
        describe: "AWS mock deployment stage"
      }
    }).argv;
  return argv;
};
