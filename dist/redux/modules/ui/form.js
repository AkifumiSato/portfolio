"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
const redux_actions_1 = require("redux-actions");
// model
const FormModel = immutable_1.Record({
    isChanged: false,
});
// actions
const { form: { change, }, } = redux_actions_1.createActions({
    FORM: {
        CHANGE: () => true,
    },
});
exports.change = change;
// reducer
const reducer = redux_actions_1.handleActions(new Map([
    [
        change,
        (state) => state.set('isChanged', true),
    ],
]), new FormModel());
exports.default = reducer;
//# sourceMappingURL=form.js.map