# Mock AWS API Gateway Proxy Server (awsapigateway)

The purpose of this project is to convert regular REST requests into the AWS Gateway Proxy format as to feed into a local AWS Lamda Mock server. The need for this project because support on interfacing REST requests with more complex lamda functions that needed a function handler and proxy (i.e ASP .NET core with AWS Lamda functions) was very limited.

## Installation

`npm install -g github:afshawnlotfi/awsapigateway`

## Usage

<b>Server Entry (`-s`) required!</b><br>
Server entry should look something like this: <br>
[http://localhost:5050/webtester-api/Tester/aws-lambda-tools-defaults.json/`NAME_OF_LAMBDA`::`NAME_OF_LAMBDA`.LambdaEntryPoint::FunctionHandlerAsync]()

```
Usage: awsapigateway <command> [options]

Options:
  --version         Show version number                                [boolean]
  -h                Show help                                          [boolean]
  --port, -p        Port to run server                  [number] [default: 3000]
  --entryPoint, -e  AWS mock server entry point              [string] [required]
  --resource, -r    AWS mock resource type       [string] [default: "/{proxy+}"]
  --account_id      AWS mock account id       [string] [default: "123456789012"]
  --stage, -s       AWS mock deployment stage         [string] [default: "prod"]

Created by @afshawnlotfi
```

## Author

[<b>afshawnlotfi</b>](https://github.com/afshawnlotfi)

## License

MIT
