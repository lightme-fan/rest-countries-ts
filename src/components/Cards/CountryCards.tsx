import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../../Context/GlobalContext'
import { Card, Main, Wrapper } from './cardStyles'
export interface CountryType {
  name: { common: string, nativeName: any, official: string, population: number }
  cca2: string
  cca3: string
  ccn3: string
  cioc: string
  altSpellings: string[]
  area: number
  borders: string[]
  callingCodes: [string]
  capital: [string]
  currencies: any
  demonym: string
  flags: {png: string, svg: string }
  gini: number
  languages: { eng: string, swa: string }
  latlng: [number, number]
  nativeName: string
  numericCode: string
  population: number
  region: string
  regionalBlocs: { acronym: string; name: string }[]
  subregion: string
  timezones: [string]
  tld: [string]
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
      item.name.common.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    ) ||
    countries.filter(
      (item: CountryType, index) => item.borders[index] === border
    )

  const mapCountries = filterCountry.map((item: CountryType, index) => {
    
    return (
      <Card key={item.name.common}>
        <Link to={`/${item.name.common}`}>
          <img src={item.flags.png} alt={item.name.common} />
          <div>
            <h2>{item.name.common}</h2>
            <p>
              <b>Population</b>: {item.name.population}
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
