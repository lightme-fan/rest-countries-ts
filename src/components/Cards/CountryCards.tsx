import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../../Context/GlobalContext'

const Main = styled.main`
  margin: 2rem 0;
`

const Wrapper = styled.div`
  margin: 0;
  padding: 16px 1rem 1rem 1rem;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    row-gap: 1.5rem;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 70px;
  }
`

const Card = styled.section`
  width: 100%;
  border-radius: 8px;
  box-shadow: -1px 2px 4px -1px #000000;
  padding-bottom: 42px;
  margin: 1rem 0;
  background-color: ${({ theme }: any) => theme.active};
  a {
    color: ${({ theme }: any) => theme.text};
  }

  img {
    width: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    max-height: 240px;
    height: 100%;
  }

  div {
    padding: 16px 24px;
  }

  &:hover {
    background-color: ${({ theme }: any) => theme.hover};
  }
`
export interface CountryType {
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
  name: string
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
