"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const gatsby_link_1 = require("gatsby-link");
const user_1 = require("../redux/modules/app/user");
const form_1 = require("../redux/modules/ui/form");
const CustomInput_1 = require("../components/molecules/CustomInput");
const CustomTextarea_1 = require("../components/molecules/CustomTextarea");
const encode = (data) => Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
const handleSubmit = (e, required) => {
    e.preventDefault();
    const isError = Object.values(required).some(({ error }) => Boolean(error));
    const sendBody = Object.entries(required).reduce((accumulator, [key, { value }]) => {
        accumulator[key] = value;
        return accumulator;
    }, {});
    if (isError)
        return false;
    const form = e.currentTarget;
    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
            'form-name': form.getAttribute('name'),
            ...sendBody,
        }),
    })
        .then(() => gatsby_link_1.navigateTo(form.getAttribute('action')))
        .catch(error => alert(error));
};
const NetlifyForm = (props) => {
    const { children, isChanged, name, email, comment, changeDispatcher, nameDispatcher, emailDispatcher, commentDispatcher, validateDispatcher, } = props;
    const updateChangeFlg = () => !isChanged && changeDispatcher();
    return (React.createElement("form", { name: "contact", method: "post", action: "/thanks/", "data-netlify": "true", "data-netlify-honeypot": "bot-field", onSubmit: e => {
            handleSubmit(e, { name, email, comment });
            validateDispatcher();
            updateChangeFlg();
        } },
        React.createElement("div", { style: { display: 'none' } },
            React.createElement("label", null,
                "Don\u2019t fill this out if you're human: ",
                React.createElement("input", { name: "bot-field" }))),
        React.createElement(CustomInput_1.default, { type: 'text', name: 'name', placeholder: 'Your name', value: name.value, onBlur: (e) => {
                nameDispatcher(e.currentTarget.value);
                updateChangeFlg();
            }, error: isChanged ? name.error : '' }),
        React.createElement(CustomInput_1.default, { type: 'mail', name: 'email', placeholder: 'Email: xxxx@mail.com', value: email.value, onBlur: (e) => {
                emailDispatcher(e.currentTarget.value);
                updateChangeFlg();
            }, error: isChanged ? email.error : '' }),
        React.createElement(CustomTextarea_1.default, { name: 'comment', value: comment.value, onBlur: (e) => {
                commentDispatcher(e.currentTarget.value);
                updateChangeFlg();
            }, error: isChanged ? comment.error : '' }),
        children,
        React.createElement("input", { type: "hidden", name: "form-name", value: "contact" })));
};
const mapStateToProps = (state) => ({
    isChanged: state.ui.form.isChanged,
    email: state.app.user.email,
    name: state.app.user.name,
    comment: state.app.user.comment,
});
const mapDispatchToProps = (dispatch) => ({
    changeDispatcher: () => dispatch(form_1.changeAction()),
    nameDispatcher: (value) => dispatch(user_1.updateNameAction(value)),
    emailDispatcher: (value) => dispatch(user_1.updateEmailAction(value)),
    commentDispatcher: (value) => dispatch(user_1.updateCommentAction(value)),
    validateDispatcher: () => dispatch(user_1.validateAction()),
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NetlifyForm);
//# sourceMappingURL=NetlifyForm.js.map