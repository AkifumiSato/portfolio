"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const rootReducer_1 = require("./rootReducer");
const windowGlobal = typeof window !== 'undefined' && window;
const devtools = windowGlobal.devToolsExtension
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f;
const createStore = () => redux_1.createStore(rootReducer_1.default, redux_1.compose(devtools));
exports.store = createStore();
exports.default = ({ element }) => exports.store = { store: exports.store } > { element } < /Provider>;
//# sourceMappingURL=redux-wrapper.js.map