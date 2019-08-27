#!/usr/bin/env node
import bodyParser from "body-parser";
import express from "express";
import { getLamdaResp } from "./aws-lamda";
import { getUserConfig } from "./userConfig";
// Create a new express application instance
const app: express.Application = express();

const argv = getUserConfig();

// Initialize body parsers
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(async (req, res, next) => {
  const { IsSuccess, Response, Error, StatusCode } = await getLamdaResp(req);
  if (IsSuccess && Response) {
    Object.keys(Response.multiValueHeaders).map(field => {
      const headers = Response.multiValueHeaders[field];
      res.setHeader(field, headers);
    });
    res.statusCode = Response.statusCode;
    res.send(Response.body);
    console.info(
      `Successful ${req.method} to ${req.path} with status ${StatusCode}` +
        (argv.verbose
        ? ` with body: \n${Response.body}`
        : "")
    );
  } else {
    const sError = JSON.stringify(Error);
    console.error(`Error interfacing with AWS mock server: ${sError}`);
    res.send(500).send(sError);
  }
});

app.listen(argv.port, function() {
  console.info(`AWS mock gateway listening on port ${argv.port}`);
});
