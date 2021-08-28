import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../../Context/GlobalContext'
import { Card, Main, Wrapper } from './cardStyles'
export interface CountryType {
  name: string
  alpha2Code: string
  alpha3Code: string
  altSpellings: string[]
  area: number
  borders: [string, string, string, string, string, string]
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
  latlng: [number, number]
  nativeName: string
  numericCode: string
  population: number
  region: string
  regionalBlocs: { acronym: string; name: string }[]
  subregion: string
  timezones: [string]
  topLevelDomain: [string]
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

type Border = { border: string }

export const CountryCards: React.FC = () => {
  const { border }: Border = useParams()
  const { countries, searchValue } = useContext(Context)

  const filterCountry =
    countries.filter((item: CountryType) =>
      item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    ) ||
    countries.filter(
      (item: CountryType, index) => item.borders[index] === border
    )

  const mapCountries = filterCountry.map((item: CountryType, index) => {
    return (
      <Card key={item.name}>
        <Link to={`/${item.name}`}>
          <img src={item.flag} alt={item.name} />
          <div>
            <h2>{item.name}</h2>
            <p>
              <b>Population</b>: {item.population}
            </p>
            <p>
              <b>Region</b>: {item.region}
            </p>
            <p>
              <b>Capital</b>: {item.capital}
            </p>
          </div>
        </Link>
      </Card>
    )
  })

  return (
    <Main>
      <Wrapper>{mapCountries}</Wrapper>
    </Main>
  )
}
