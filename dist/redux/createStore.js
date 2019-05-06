"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const rootReducer_1 = require("./rootReducer");
const windowGlobal = typeof window !== 'undefined' && window;
const composeEnhancers = windowGlobal.devToolsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : redux_1.compose;
const createStore = () => redux_1.createStore(rootReducer_1.default, composeEnhancers);
exports.default = createStore();
//# sourceMappingURL=createStore.js.map