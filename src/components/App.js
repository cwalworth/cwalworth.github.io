import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { withTranslation, Trans } from 'react-i18next'
import I18nSelect from './I18nSelect'

import Header from '../Header'
import {
  HOME,
  PRODUCTS,
  INQUIRY,
  TECHNIQUE,
  ACCESS,
  ABOUT,
  RECRUIT
} from '../constants/routes'
import Home from '../Pages/Home'
import Products from '../Pages/Products'
import Inquiry from '../Pages/Inquiry'
import Technique from '../Pages/Technique'
import Access from '../Pages/Access'
import About from '../Pages/About'
import Recruit from '../Pages/Recruit'

class App extends Component {
  state = {
    lang: 'en'
  }
  handleLangChange = e => {
    let newLang = e.target.value
    this.setState(prevState => ({ lang: newLang }))
    this.props.i18n.changeLanguage(newLang)
  }
  handleCheck = lang => this.state.lang === lang
  render() {
    const { t } = this.props
    return (
      <div>
        <I18nSelect
          lang={this.state.lang}
          handleLangChange={this.handleLangChange}
          handleCheck={this.handleCheck}
        />
        <BrowserRouter>
          <Header props={this.props}>
            <h1>
              <Trans>{t('Title')}</Trans>
            </h1>
          </Header>
          <Switch>
            <Route exact path={HOME} component={Home} />
            <Route path={PRODUCTS} component={Products} />
            <Route path={INQUIRY} component={Inquiry} />
            <Route path={TECHNIQUE} component={Technique} />
            <Route path={ACCESS} component={Access} />
            <Route path={ABOUT} component={About} />
            <Route path={RECRUIT} component={Recruit} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default withTranslation('translations')(App)
