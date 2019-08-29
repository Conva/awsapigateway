"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
exports.writeGatwayResponse = function (path, method, _a) {
    var proxy = _a.proxy, response = _a.response;
    var gatewayResp = {
        proxy: proxy,
        response: response ? response : null
    };
    var fileName = "" + method + path.replace(/\//g, "-") + ".json";
    try {
        fs_1.writeFileSync(fileName, JSON.stringify(gatewayResp), {
            encoding: "utf8",
            flag: "w"
        });
        console.info("Wrote gateway response tp '" + fileName + "'");
    }
    catch (e) {
        console.error(e);
    }
};
//# sourceMappingURL=writer.js.map