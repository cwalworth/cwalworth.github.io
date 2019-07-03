import React from 'react'
import styled from 'styled-components'
import { langs } from './i18n'

const I18nSelect = ({ handleLangChange, handleCheck }) => {
  return (
    <I18nSelectStyles>
      {langs.map(lang => (
        <div key={lang.int}>
          <input
            type="radio"
            name="lang"
            id={lang.int}
            value={lang.lang}
            checked={handleCheck(lang.lang)}
            onChange={handleLangChange}
          />
          <label htmlFor={lang.lang}>{lang.int}</label>
        </div>
      ))}
    </I18nSelectStyles>
  )
}

const I18nSelectStyles = styled.div`
  display: flex;
  margin-bottom: 5px;
`

export default I18nSelect
