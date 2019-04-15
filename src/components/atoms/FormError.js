import React  from 'react'
import styled from 'styled-components'

const Error = styled.p`
  cursor: pointer;
  background-color: #f8BBd0;
  bottom: -45px;
  border-radius: 5px;
  color: #b71c1c;
  font-size: 14px;
  left: 10px;
  line-height: 1;
  padding: 10px;
  position: absolute;
  z-index: 10;
  &:before {
    border-color: transparent transparent #f8BBd0;
    border-style: solid;
    border-width: 6px;
    content: '';
    display: block;
    left: 30px;
    position: absolute;
    top: -12px;
    transform: translateX(-50%);
  }
`

export default ({ text }) => (
  <Error>{ text }</Error>
)