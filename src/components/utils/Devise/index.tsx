import styled from 'styled-components'

export const OnlyPC = styled.div`
  display: block;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const OnlySP = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`
