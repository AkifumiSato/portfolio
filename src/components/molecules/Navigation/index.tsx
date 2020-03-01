import Link from 'gatsby-link'
import * as React from 'react'
import styled, { css, keyframes } from 'styled-components'
import color from '../../../styles/color'
import { zIndex } from '../../../styles/layout'

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
  background-color: ${ color.navy.deep };
  bottom: 0;
  display: none;
  left: 0;
  margin: auto;
  position: fixed;
  right: 0;
  top: 0;
  transition: .3s;
  z-index: ${ zIndex.overlay };
  ${ ({ open, init }: IOverlay) => open ? css`
    animation: ${ fadeIn } .3s;
    animation-fill-mode: forwards;
    display: block;
  ` : !init ? css`
    transition: none;
  ` : css`
    animation: ${ fadeOut } .3s;
    animation-fill-mode: forwards;
    display: block;
  ` }
`

const MenuLink = styled(Link)`
  color: ${ color.white.base };
  font-size: 35px;
  position: relative;
  text-decoration: none;
  transition: .3s;
  transition-property: color;
  white-space: nowrap;
  
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
  
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`

const ExternalLink = MenuLink.withComponent('a')

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
  top: 100px;
  right: 10px;
  z-index: ${ zIndex.overlayContained };

  ${ ({ open, init }: IMenuList) => init ? `` : open ? css`
    animation: ${ fadeIn } .3s;
    animation-fill-mode: forwards;
    display: block;
  ` : css`
    animation: ${ fadeOut } .3s;
    animation-fill-mode: forwards;
    display: block;
  ` }
`

interface IHamburger {
  open: boolean;
}

const Hamburger = styled.span`
  &,
  &:before,
  &:after {
    background-color: ${ color.gray.base };
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 30px;
    z-index: ${ zIndex.overlayContained };
  }
  & {
    top: 18px;
  }
  &:before {
    top: -11px;
    transition: .3s;
  }
  
  &:after {
    top: 11px;
    transition: .3s;
  }
  ${ (props: IHamburger) => props.open ? css`
    transition: .3s;
    background-color: transparent!important;
    &:before {
      top: 0;
      transform: rotate(-45deg);
      background-color: ${ color.white.base };
    }
    &::after {
      top: 0;
      transform: rotate(45deg);
      background-color: ${ color.white.base };
    }
  ` : css`
    transition: .3s;
  ` }
`

const NavigationTrigger = styled.button`
  height: 38px;
  padding: 5px;
  display: block;
  width: 40px;
  position: relative;
`

type TUrl = {
  name: string;
  url: string;
  external?: boolean;
}

const urlMap: TUrl[] = [
  {
    name: 'About',
    url: '/about/',
  },
  {
    name: 'Blog',
    url: '/blog/',
  },
  {
    name: 'Contact',
    url: '/contact/',
  },
  {
    name: 'story book',
    url: 'https://storybook.akfm.dev',
    external: true,
  },
]

const Navigation: React.FC = () => {
  const [interact, setInteract] = React.useState(true)
  const [open, setOpen] = React.useState(false)
  const onClick = React.useCallback(() => {
    setInteract(false)
    setOpen(!open)
  }, [open])

  return (
    <>
      <Overlay init={ interact } open={ open } onClick={ onClick } />
      <NavigationTrigger aria-label="menu" onClick={ onClick }>
        <Hamburger open={ open } />
      </NavigationTrigger>
      <MenuList init={ interact } open={ open }>
        { urlMap.map((link, index) => (
          <MenuListItem key={ index }>
            { link.external ?
              <ExternalLink href={ link.url } target="blank" rel="noopener">{ link.name }</ExternalLink> :
              <MenuLink to={ link.url }>{ link.name }</MenuLink> }
          </MenuListItem>
        )) }
      </MenuList>
    </>
  )
}

export default Navigation
