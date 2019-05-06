"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const FormError_1 = require("../atoms/FormError");
const styled_components_1 = require("styled-components");
const Wrapper = styled_components_1.default.div `
  position: relative;
  width: 400px;
  &:not(:first-child) {
    margin-top: 30px;
  }
  &:after {
    background-color: #aaa;
    bottom: 0;
    content: '';
    display: block;
    height: 1px;
    left: 0;
    position: absolute;
    transition: .3s;
    width: 300px;
  }
  &:focus-within:after {
    background-color: #00C5B2;
    height: 2px;
    transition: .3s;
    width: 400px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;  
    &:after {
      width: 100%;
    }
    &:focus-within:after {
      width: 100%;
    }
  }
`;
const MyInput = styled_components_1.default.input `
  font-size: 18px;
  line-height: 2;
  padding: 10px;
  width: 100%;
  &::placeholder {
    color: #aaa;
  }
`;
const CustomInput = (props) => {
    const { type = 'text', name, placeholder = '', value = '', onBlur = () => true, error = '', } = props;
    const [tmpValue, setTmpValue] = React.useState(value);
    return (React.createElement(Wrapper, null,
        React.createElement(MyInput, { value: tmpValue, onChange: e => setTmpValue(e.target.value), onBlur: e => onBlur(e), type: type, name: name, placeholder: placeholder }),
        (() => error && React.createElement(FormError_1.default, { text: error }))()));
};
exports.default = CustomInput;
//# sourceMappingURL=CustomInput.js.map