"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immutable_1 = require("immutable");
const typescript_fsa_1 = require("typescript-fsa");
const typescript_fsa_reducers_1 = require("typescript-fsa-reducers");
const contactValidater_1 = require("../../utils/contactValidater");
// model
const UserRecord = immutable_1.Record({
    name: {
        value: '',
        error: '初期値が設定されています。',
    },
    email: {
        value: '',
        error: '初期値が設定されています。',
    },
    comment: {
        value: '',
        error: '初期値が設定されています。',
    },
});
class UserModel extends UserRecord {
    updateName(value) {
        const error = contactValidater_1.nameValidate(value);
        return this.withMutations(mut => mut.setIn(['name', 'value'], value).setIn(['name', 'error'], error));
    }
    updateEmail(value) {
        const error = contactValidater_1.mailValidate(value);
        return this.withMutations(mut => mut.setIn(['email', 'value'], value).setIn(['email', 'error'], error));
    }
    updateComment(value) {
        const error = contactValidater_1.commentValidate(value);
        return this.withMutations(mut => mut.setIn(['comment', 'value'], value).setIn(['comment', 'error'], error));
    }
    validate() {
        return this.withMutations(mut => mut
            .updateName(this.getIn(['name', 'value']))
            .updateEmail(this.getIn(['email', 'value']))
            .updateComment(this.getIn(['comment', 'value'])));
    }
}
// action
const actionCreator = typescript_fsa_1.default();
var ActionType;
(function (ActionType) {
    ActionType["UpdateName"] = "USER/NAME/UPDATE";
    ActionType["UpdateEmail"] = "USER/EMAIL/UPDATE";
    ActionType["UpdateComment"] = "USER/COMMENT/UPDATE";
    ActionType["Validate"] = "USER/VALIDATE";
})(ActionType || (ActionType = {}));
exports.updateNameAction = actionCreator(ActionType.UpdateName);
exports.updateEmailAction = actionCreator(ActionType.UpdateEmail);
exports.updateCommentAction = actionCreator(ActionType.UpdateComment);
exports.validateAction = actionCreator(ActionType.Validate);
// reducer
const reducer = typescript_fsa_reducers_1.reducerWithInitialState(new UserModel())
    .case(exports.updateNameAction, (state, payload) => state.updateName(payload))
    .case(exports.updateEmailAction, (state, payload) => state.updateEmail(payload))
    .case(exports.updateCommentAction, (state, payload) => state.updateName(payload))
    .case(exports.validateAction, (state) => state.validate());
exports.default = reducer;
//# sourceMappingURL=user.js.map