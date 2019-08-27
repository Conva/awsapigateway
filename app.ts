// lib/app.ts
import bodyParser from "body-parser";
import express from "express";
import { getLamdaResp } from "./aws-lamda";

// Create a new express application instance
const app: express.Application = express();

// Initialize body parsers
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use(async (req, res, next) => {
  const { IsSuccess, Response, Error } = await getLamdaResp(req);
  if (IsSuccess && Response) {
    Object.keys(Response.multiValueHeaders).map(field => {
      const headers = Response.multiValueHeaders[field];
      res.setHeader(field, headers);
    });
    res.statusCode = Response.statusCode;
    res.send(Response.body);
  } else {
    res.send(500).send(JSON.stringify(Error));
  }
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
