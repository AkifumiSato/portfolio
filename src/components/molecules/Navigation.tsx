import * as React from 'react'
import Link from 'gatsby-link'
import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
`

interface IOverlay {
  init: boolean;
  open: boolean;
}

const Overlay = styled.div`
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
  ${({ open, init }: IOverlay) => open ? css`
    animation: ${fadeIn} .3s;
    animation-fill-mode: forwards;
    display: block;
  ` : !init ? css`
    transition: none;
  ` : css`
    animation: ${fadeOut} .3s;
    animation-fill-mode: forwards;
    display: block;
  `}
`

const MenuLink = styled(Link)`
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
`

const MenuListItem = styled.li`
  margin-top: 20px;
  text-align: right;
  &:first-child {
    margin-top: 0;
  }
`

interface IMenuList {
  init: boolean;
  open: boolean;
}

const MenuList = styled.ul`
  display: none;
  margin-top: 10px;
  position: absolute;
  top: 50px;
  right: 10px;
  ${({ open, init }: IMenuList) => init ? `` : open ? css`
    animation: ${fadeIn} .3s;
    animation-fill-mode: forwards;
    display: block;
  ` : css`
    animation: ${fadeOut} .3s;
    animation-fill-mode: forwards;
    display: block;
  `}
`

interface IHamburger {
  open: boolean;
}

const Hamburger = styled.span`
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
  ${(props: IHamburger) => props.open ? css`
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
  ` : css`
    transition: .3s;
  `}
`

const NavigationTrigger = styled.button`
  height: 33px;
  display: block;
  padding: 5px;
  width: 40px;
`

const Wrapper = styled.div`
  position: fixed;
  right: 50px;
  top: 50px;
  z-index: 2;
  @media screen and (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
`

const Navigation: React.FC = () => {
  const [interact, setInteract] = React.useState(true)
  const [open, setOpen] = React.useState(false)
  const onClick = () => {
    setInteract(false)
    setOpen(!open)
  }

  interface IMenuLinks {
    name: string;
    url: string;
  }

  const menuLinks: Array<IMenuLinks> = [
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
  ]

  return (
    <div>
      <Wrapper>
        <NavigationTrigger aria-label="menu" onClick={ onClick }>
          <Hamburger open={ open }> </Hamburger>
        </NavigationTrigger>
        <MenuList init={ interact } open={ open }>
          { menuLinks.map((link, index) => (
            <MenuListItem key={ index }>
              <MenuLink to={ link.url }>{ link.name }</MenuLink>
            </MenuListItem>
          )) }
        </MenuList>
      </Wrapper>
      <Overlay init={ interact } open={ open } onClick={ onClick }> </Overlay>
    </div>
  )
}

export default Navigation