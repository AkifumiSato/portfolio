"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const FormError_1 = require("../atoms/FormError");
const styled_components_1 = require("styled-components");
const Wrapper = styled_components_1.default.div `
  position: relative;
`;
const MyTextarea = styled_components_1.default.textarea `
  border: 1px solid #aaa;
  border-radius: 5px;
  box-sizing: border-box;
  font-size: 18px;
  line-height: 1.5;
  outline: 1px solid transparent;
  padding: 20px;
  margin-top: 60px;
  width: 100%;
  &:focus {
    border: 2px solid #00C5B2;
    padding: 19px;
  }
  &::placeholder {
    color: #aaa;
  }
`;
const CustomTextarea = (props) => {
    const { name, cols = 30, rows = 5, value = '', placeholder = 'Free Text', onBlur = () => true, error = '', } = props;
    const [tmpValue, setTmpValue] = React.useState(value);
    return (React.createElement(Wrapper, null,
        React.createElement(MyTextarea, { name: name, cols: cols, rows: rows, value: tmpValue, onChange: e => setTmpValue(e.target.value), onBlur: e => onBlur(e), placeholder: placeholder }),
        (() => error && React.createElement(FormError_1.default, { text: error }))()));
};
exports.default = CustomTextarea;
//# sourceMappingURL=CustomTextarea.js.map