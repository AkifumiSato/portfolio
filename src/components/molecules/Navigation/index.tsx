import Link from 'gatsby-link'
import * as React from 'react'
import styled, { css } from 'styled-components'
import color from '../../../styles/color'
import { zIndex } from '../../../styles/layout'

type MenuWrapperProps = {
  open: boolean
}

const MenuWrapper = styled.div`
  background-color: ${color.gray.deep};
  position: absolute;
  width: 100vw;
  height: 100vh;
  right: 0;
  top: 0;
  transition-property: transform;
  transition-duration: 0.5s;

  ${({ open }: MenuWrapperProps) =>
    open
      ? css`
          transform: translateX(0);
        `
      : css`
          transform: translateX(100%);
        `}
`

const MenuLink = styled(Link)`
  color: ${color.white.base};
  font-size: 35px;
  position: relative;
  text-decoration: none;
  transition: 0.3s;
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
    transition: 0.3s;
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

const MenuList = styled.ul`
  margin-top: 10px;
  position: absolute;
  top: 100px;
  right: 10px;
  z-index: ${zIndex.overlayContained};
`

type HamburgerProps = {
  open: boolean
}

const Hamburger = styled.span`
  &,
  &:before,
  &:after {
    background-color: ${color.gray.base};
    content: '';
    display: block;
    height: 2px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 30px;
    z-index: ${zIndex.overlayContained};
  }
  & {
    top: 18px;
  }
  &:before {
    top: -11px;
    transition: 0.3s;
  }

  &:after {
    top: 11px;
    transition: 0.3s;
  }
  ${(props: HamburgerProps) =>
    props.open
      ? css`
          transition: 0.3s;
          background-color: transparent !important;
          &:before {
            top: 0;
            transform: rotate(-45deg);
            background-color: ${color.white.base};
          }
          &::after {
            top: 0;
            transform: rotate(45deg);
            background-color: ${color.white.base};
          }
        `
      : css`
          transition: 0.3s;
        `}
`

const NavigationTrigger = styled.button`
  height: 38px;
  padding: 5px;
  display: block;
  width: 40px;
  position: relative;
`

type TUrl = {
  name: string
  url: string
  external?: boolean
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
  const [open, setOpen] = React.useState(false)
  const onClick = React.useCallback(() => {
    setOpen(!open)
  }, [open])

  return (
    <>
      <NavigationTrigger aria-label="menu" onClick={onClick}>
        <Hamburger open={open} />
      </NavigationTrigger>
      <MenuWrapper open={open}>
        <MenuList>
          {urlMap.map((link, index) => (
            <MenuListItem key={index}>
              {link.external ? (
                <ExternalLink href={link.url} target="blank" rel="noopener">
                  {link.name}
                </ExternalLink>
              ) : (
                <MenuLink to={link.url}>{link.name}</MenuLink>
              )}
            </MenuListItem>
          ))}
        </MenuList>
      </MenuWrapper>
    </>
  )
}

export default Navigation
