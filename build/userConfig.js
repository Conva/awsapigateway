"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var yargs_1 = __importDefault(require("yargs"));
/**
 * Fetches user specified config from config.json
 */
exports.getUserConfig = function () {
    var argv = yargs_1.default
        .usage("Usage: $0 <command> [options]")
        .epilog("Created by @afshawnlotfi")
        .help('h')
        .options({
        port: { type: "number", alias: "p", default: 3000, describe: "Port to run server" },
        verbose: { type: "boolean", alias: "v", default: false, describe: "Output verbose logs" },
        entryPoint: { type: "string", alias: "e", demandOption: true, describe: "AWS mock server entry point" },
        resource: { type: "string", alias: "r", default: "/{proxy+}", describe: "AWS mock resource type" },
        accountId: { type: "string", default: "123456789012", describe: "AWS mock account id" },
        stage: { type: "string", alias: "s", default: "prod", describe: "AWS mock deployment stage" }
    }).argv;
    return argv;
};
//# sourceMappingURL=userConfig.js.map