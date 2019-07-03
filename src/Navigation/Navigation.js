import React from 'react'
import { Link } from 'react-router-dom'
import { withTranslation, Trans } from 'react-i18next'
import { ROUTES } from '../constants/routes'
import { StyledNavigation, StyledUl } from './Navigation.styled'

const Navigation = props => {
  const { t } = props
  return (
    <StyledNavigation>
      <StyledUl>
        {ROUTES.map(route => (
          <li key={route.title}>
            <Link className="links" exact to={route.route}>
              <Trans>{t(`${route.title}`)}</Trans>
            </Link>
          </li>
        ))}
      </StyledUl>
    </StyledNavigation>
  )
}

export default withTranslation('navigation')(Navigation)
