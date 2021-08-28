import React, { useContext } from 'react'
import { Context } from '../../Context/GlobalContext'
import { Form } from './formStyles'
import { WrapperContainer } from '../../globalStyles'

export const SearchForm: React.FC = () => {
  const { searchValue, selectValue, handleChange, handleSelectChange } =
    useContext(Context)

  return (
    <Form>
      <WrapperContainer>
        <div>
          <fieldset>
            <input
              type='text'
              value={searchValue}
              onChange={handleChange}
              placeholder='Search for a country...'
            />
          </fieldset>

          <select value={selectValue} onChange={handleSelectChange}>
            <option style={{ color: `#FFF` }}>Filter by Region</option>
            <option value='africa'>Africa</option>
            <option value='america'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
          </select>
        </div>
      </WrapperContainer>
    </Form>
  )
}
