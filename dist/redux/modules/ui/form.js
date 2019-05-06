"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
const typescript_fsa_1 = require("typescript-fsa");
const typescript_fsa_reducers_1 = require("typescript-fsa-reducers");
const FormModel = immutable_1.Record({
    isChanged: false,
});
// action
const actionCreator = typescript_fsa_1.default();
var ActionType;
(function (ActionType) {
    ActionType["Change"] = "FORM/CHANGE";
})(ActionType || (ActionType = {}));
exports.changeAction = actionCreator(ActionType.Change);
// reducer
const reducer = typescript_fsa_reducers_1.reducerWithInitialState(new FormModel())
    .case(exports.changeAction, (state) => state.set('isChanged', true));
exports.default = reducer;
//# sourceMappingURL=form.js.map