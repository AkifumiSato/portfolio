import React from 'react'
import styled  from 'styled-components'

const MainTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  font-weight: bold;
  height: 250px;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 30px;
    height: 150px;
    padding: 0;
  }
`

const Category = styled.span`
  display: block;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

const MainText = styled.span`
  display: block;
  font-size: 40px;
  margin-top: 10px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`

export default ({ title, category = '' }) => category ? (
  <MainTitle>
    <Category>{ category }</Category>
    <MainText>{ title }</MainText>
  </MainTitle>
) : (
  <MainTitle>{ title }</MainTitle>
)
