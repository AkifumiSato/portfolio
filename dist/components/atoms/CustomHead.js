"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_helmet_1 = require("react-helmet");
const CustomHead = (props) => {
    const { title, description = '東京のフロントエンドエンジニア、佐藤昭文のポートフォリオサイトです。', } = props;
    return (React.createElement(react_helmet_1.default, null,
        React.createElement("html", { lang: "ja" }),
        React.createElement("title", null, title),
        React.createElement("meta", { content: description, name: "description" })));
};
exports.default = CustomHead;
//# sourceMappingURL=CustomHead.js.map