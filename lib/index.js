"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewWallet = exports.stringTrim = exports.addNewTokenInfo = exports.addTokenToMetamask = exports.networkSwitcher = exports.removeEFromNumber = exports.useWeb3Contract = exports.NumericInput = void 0;
// components
var NumericInput_1 = require("./components/NumericInput/NumericInput");
Object.defineProperty(exports, "NumericInput", { enumerable: true, get: function () { return NumericInput_1.NumericInput; } });
// hooks
var useWeb3Contract_1 = require("./hooks/useWeb3Contract");
Object.defineProperty(exports, "useWeb3Contract", { enumerable: true, get: function () { return useWeb3Contract_1.useWeb3Contract; } });
// metamask
var metamask_1 = require("./metamask/metamask");
Object.defineProperty(exports, "removeEFromNumber", { enumerable: true, get: function () { return metamask_1.removeEFromNumber; } });
var metamask_2 = require("./metamask/metamask");
Object.defineProperty(exports, "networkSwitcher", { enumerable: true, get: function () { return metamask_2.networkSwitcher; } });
var metamask_3 = require("./metamask/metamask");
Object.defineProperty(exports, "addTokenToMetamask", { enumerable: true, get: function () { return metamask_3.addTokenToMetamask; } });
// helpers
var helpers_1 = require("./helpers/helpers");
Object.defineProperty(exports, "addNewTokenInfo", { enumerable: true, get: function () { return helpers_1.addNewTokenInfo; } });
var helpers_2 = require("./helpers/helpers");
Object.defineProperty(exports, "stringTrim", { enumerable: true, get: function () { return helpers_2.stringTrim; } });
var helpers_3 = require("./helpers/helpers");
Object.defineProperty(exports, "createNewWallet", { enumerable: true, get: function () { return helpers_3.createNewWallet; } });
//# sourceMappingURL=index.js.map