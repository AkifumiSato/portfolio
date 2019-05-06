"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const gatsby_link_1 = require("gatsby-link");
const styled_components_1 = require("styled-components");
const fadeIn = styled_components_1.keyframes `
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOut = styled_components_1.keyframes `
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
`;
const Overlay = styled_components_1.default.div `
  background-color: rgba(255, 255, 255, 0.75);
  bottom: 0;
  display: none;
  left: 0;
  margin: auto;
  position: fixed;
  right: 0;
  top: 0;
  transition: .3s;
  z-index: 1;
  ${({ open, init }) => open ? styled_components_1.css `
    animation: ${fadeIn} .3s;
    animation-fill-mode: forwards;
    display: block;
  ` : !init ? styled_components_1.css `
    transition: none;
  ` : styled_components_1.css `
    animation: ${fadeOut} .3s;
    animation-fill-mode: forwards;
    display: block;
  `}
`;
const MenuLink = styled_components_1.default(gatsby_link_1.default) `
  color: #aaa;
  font-size: 35px;
  position: relative;
  text-decoration: none;
  transition: .3s;
  transition-property: color;
  &::after {
    background-color: #333;
    content: '';
    display: block;
    height: 1px;
    left: 0;
    position: absolute;
    top: 100%;
    transition: .3s;
    width: 0;
    will-change: color, width;
  }
  @media screen and (min-width: 769px) {
    &:hover {
      color: #333;
    }
    &:hover:after {
      width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
  font-size: 30px;
  }
`;
const MenuListItem = styled_components_1.default.li `
  margin-top: 20px;
  text-align: right;
  &:first-child {
    margin-top: 0;
  }
`;
const MenuList = styled_components_1.default.ul `
  display: none;
  margin-top: 10px;
  position: absolute;
  top: 50px;
  right: 10px;
  ${({ open, init }) => init ? `` : open ? styled_components_1.css `
    animation: ${fadeIn} .3s;
    animation-fill-mode: forwards;
    display: block;
  ` : styled_components_1.css `
    animation: ${fadeOut} .3s;
    animation-fill-mode: forwards;
    display: block;
  `}
`;
const Hamburger = styled_components_1.default.span `
  &,
  &:before,
  &:after {
    background-color: #333;
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    top: 11px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 30px;
  }
  & {
    top: 16px;
  }
  &:before {
    top: -11px;
    transition: .3s;
  }
  
  &:after {
    top: 11px;
    transition: .3s;
  }
  ${(props) => props.open ? styled_components_1.css `
    transition: .3s;
    background-color: transparent!important;
    &:before {
      top: 0;
      transform: rotate(-45deg);
    }
    &::after {
      top: 0;
      transform: rotate(45deg);
    }
  ` : styled_components_1.css `
    transition: .3s;
  `}
`;
const NavigationTrigger = styled_components_1.default.button `
  height: 33px;
  display: block;
  padding: 5px;
  width: 40px;
`;
const Wrapper = styled_components_1.default.div `
  position: fixed;
  right: 50px;
  top: 50px;
  z-index: 2;
  @media screen and (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;
const Navigation = () => {
    const [interact, setInteract] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const onClick = () => {
        setInteract(false);
        setOpen(!open);
    };
    const menuLinks = [
        {
            name: 'about',
            url: '/about/',
        },
        {
            name: 'blog',
            url: '/blog/',
        },
        {
            name: 'contact',
            url: '/contact/',
        },
    ];
    return (React.createElement("div", null,
        React.createElement(Wrapper, null,
            React.createElement(NavigationTrigger, { "aria-label": "menu", onClick: onClick },
                React.createElement(Hamburger, { open: open }, " ")),
            React.createElement(MenuList, { init: interact, open: open }, menuLinks.map((link, index) => (React.createElement(MenuListItem, { key: index },
                React.createElement(MenuLink, { to: link.url }, link.name)))))),
        React.createElement(Overlay, { init: interact, open: open, onClick: onClick }, " ")));
};
exports.default = Navigation;
//# sourceMappingURL=Navigation.js.map