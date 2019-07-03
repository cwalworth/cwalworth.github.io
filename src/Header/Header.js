import React from 'react'
import { StyledHeader } from './Header.styled'
import Navigation from '../Navigation'

const Header = (props, { children }) => {
  return (
    <StyledHeader>
      <div>{children}</div>
      <Navigation props={props} />
    </StyledHeader>
  )
}

export default Header
