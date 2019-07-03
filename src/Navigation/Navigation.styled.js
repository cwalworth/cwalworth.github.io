import styled from 'styled-components'

export const StyledNavigation = styled.nav`
  height: 50px;
  border: 4px solid red;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
export const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  padding: 0;
  & .links {
    border: 2px solid blue;
    margin: 5px;
    padding: 10px 20px;
    &:link {
      text-decoration: none;
    }
    &:active,
    :visited {
      color: black;
    }
    &:hover {
      cursor: pointer;
    }
  }
`
