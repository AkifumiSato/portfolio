import Link from 'gatsby-link'
import * as React from 'react'
import styled, { css } from 'styled-components'
import color, { colors } from '../../../../styles/color'
import { zIndex } from '../../../../styles/layout'

const NavigationTrigger = styled.button`
  height: 38px;
  padding: 5px;
  display: block;
  width: 40px;
  position: relative;
`

type HamburgerProps = {
  open: boolean
}

const Hamburger = styled.span`
  &,
  &:before,
  &:after {
    background-color: ${colors.gray['400']};
    content: '';
    display: block;
    height: 1px;
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

type MenuWrapperProps = {
  open: boolean
}

const Overlay = styled.button`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: ${({ open }: MenuWrapperProps) => (open ? 'block' : 'none')};
  background-color: rgba(0, 0, 0, 0.3);
`

const MenuWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background-color: ${colors.gray['700']};
  transition-property: transform;
  transition-duration: 0.5s;
  width: 70vw;
  height: 100vh;
  margin-left: auto;

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
  font-size: 20px;
  text-decoration: none;
  white-space: nowrap;
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
  margin: 100px 10px 10px;
  z-index: ${zIndex.overlayContained};
`

type TUrl = {
  name: string
  url: string
  external?: boolean
}

const urlMap: TUrl[] = [
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Blog',
    url: '/blog',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
  {
    name: 'Github',
    url: 'https://github.com/AkifumiSato',
    external: true,
  },
  {
    name: 'Storybook',
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
      <Overlay open={open} onClick={onClick} />
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
