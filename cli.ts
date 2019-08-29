#!/usr/bin/env node
import bodyParser from "body-parser";
import express from "express";
import { getLamdaResult } from "./aws-lamda";
import { getUserConfig } from "./userConfig";
import { writeGatwayResponse } from "./writer";
// Create a new express application instance
const app: express.Application = express();

const argv = getUserConfig();

// Initialize body parsers
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(async (req, res, _) => {
  const lamdaResult = await getLamdaResult(req);
  const { isSuccess, response, error } = lamdaResult;
  if (isSuccess && response) {
    Object.keys(response.multiValueHeaders).map(field => {
      const headers = response.multiValueHeaders[field];
      res.setHeader(field, headers);
    });
    res.statusCode = response.statusCode;
    res.send(response.body);
    console.info(
      `Successful ${req.method} to ${req.path} with status ${response.statusCode}` +
        (argv.verbose ? ` with body: \n${response.body}` : "")
    );
    if (argv.writeResult) {
      writeGatwayResponse(req.path, req.method, lamdaResult);
    }
  } else {
    const sError = JSON.stringify(error);
    console.error(`Error interfacing with AWS mock server: ${sError}`);
    res.send(500).send(sError);
  }
});

app.listen(argv.port, function() {
  console.info(`AWS mock gateway listening on port ${argv.port}`);
});
