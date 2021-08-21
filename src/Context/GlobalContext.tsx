import React, { createContext, useEffect, useReducer } from 'react'

type ValueType = {
  countries: []
  isModeDark: boolean
  searchValue: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const initialValue: ValueType = {
  countries: [],
  isModeDark: false,
  searchValue: '',
  handleChange: () => {},
  handleSelectChange: () => {},
}

type State = {
  countries: any
  searchValue: string
  isModeDark: boolean
}

type CountryType = {
  conutry: {
    alpha2Code: string
    alpha3Code: string
    altSpellings: string[]
    area: number
    borders: string[]
    callingCodes: [string]
    capital: string
    cioc: string
    currencies: { code: string; name: string; symbol: string }[]
    demonym: string
    flag: string
    gini: number
    languages: {
      iso639_1: string
      iso639_2: string
      name: string
      nativeName: string
    }[]
    latlng: number[]
    name: string
    nativeName: string
    numericCode: string
    population: number
    region: string
    regionalBlocs: { acronym: string; name: string }[]
    subregion: string
    timezones: string[]
    topLevelDomain: string[]
    translations: {
      br: string
      de: string
      es: string
      fa: string
      fr: string
      hr: string
      it: string
      ja: string
      nl: string
      pt: string
    }
  }
}

export type Action =
  | { type: 'FETCH_API'; payload: CountryType[] }
  | { type: 'CHANGE_MODE' }
  | { type: 'SEARCH_COUNTRY'; payload: string }
  | { type: 'SELECT_COUNTRY'; payload: string }
  | { type: 'SET_THEME_MODE' }

const reducer = (state: State = initialValue, action: Action) => {
  switch (action.type) {
    case 'FETCH_API':
      return { ...state, countries: action.payload }
    case 'SEARCH_COUNTRY':
      return { ...state, searchValue: action.payload }
    case 'SELECT_COUNTRY':
      return { ...state, searchValue: action.payload }
    case 'SET_THEME_MODE':
      return { ...state, isModeDark: !state.isModeDark }
    default:
      return state
  }
}

export const Context = createContext(initialValue)

export const ContextProvider: React.FC = ({ children }) => {
  const [state, dispacth] = useReducer(reducer, initialValue)

  const fetchApi = async (request: string) => {
    const response = await fetch(request)
    const data = await response.json()
    dispacth({ type: 'FETCH_API', payload: data })
  }

  useEffect(() => {
    fetchApi('https://restcountries.eu/rest/v2/all')
  }, [])

  //   https://restcountries.eu/rest/v2/region/{region}
  const handleSelectChange = async (e: any) => {
    const region = e.target.value
    const data = await fetchApi(
      `https://restcountries.eu/rest/v2/region/${region}`
    )
    console.log(data)
  }

  return (
    <Context.Provider
      value={{
        countries: state.countries,
        searchValue: state.searchValue,
        isModeDark: false,
        handleChange: (e) =>
          dispacth({ type: 'SEARCH_COUNTRY', payload: e.target.value }),
        handleSelectChange: handleSelectChange,
      }}>
      {children}
    </Context.Provider>
  )
}
