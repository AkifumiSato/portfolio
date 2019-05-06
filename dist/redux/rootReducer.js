"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const user_1 = require("./modules/app/user");
const form_1 = require("./modules/ui/form");
const app = redux_1.combineReducers({ user: user_1.default });
const ui = redux_1.combineReducers({ form: form_1.default });
exports.default = redux_1.combineReducers({
    app,
    ui,
});
//# sourceMappingURL=rootReducer.js.map