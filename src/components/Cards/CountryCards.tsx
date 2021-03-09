import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../../Context/GlobalContext'


const Main = styled.main`
    margin: 2rem 0;
`

const Wrapper = styled.div`
    max-width: 1120px;
    margin: 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 10%;
    align-items: center;

    @media (min-width: 512px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5%;
        margin: 0;
    }

    @media (min-width: 900px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 5%;
    }
`

const Card = styled.section`
    width: 90%;
    border-radius: 8px;
    box-shadow: -1px 2px 4px -1px #000000;
    padding-bottom: 1rem;
    margin: 2rem 0;

    img {
        width: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    div {
        padding: 0 1rem;
    }
`

interface CountryType {
    alpha2Code: string;
    alpha3Code: string;
    altSpellings: string[]
    area: number
    borders: [string, string, string, string, string, string]
    callingCodes: [string]
    capital: string
    cioc: string
    currencies: {code: string, name: string, symbol: string}[]
    demonym: string
    flag: string
    gini: number
    languages: {iso639_1: string, iso639_2: string, name: string, nativeName: string}[]
    latlng: [number, number]
    name: string
    nativeName: string
    numericCode: string
    population: number
    region: string
    regionalBlocs: {acronym: string, name: string}[]
    subregion: string
    timezones: [string]
    topLevelDomain: [string]
    translations: {
        br: string,
        de: string,
        es: string,
        fa: string,
        fr: string,
        hr: string,
        it: string,
        ja: string,
        nl: string,
        pt: string,
    }
}

export const CountryCards: React.FC = () => {
    const { countries } = useContext(Context)
    
    const mapCountries= countries.map((item: CountryType) =>{
        return (
            <Card key={item.name}>
                <img src={item.flag}/>
                <div>
                    <h2>{item.name}</h2>
                    <p><b>Population</b>: {item.population}</p>
                    <p><b>Region</b>: {item.region}</p>
                    <p><b>Capital</b>: {item.capital}</p>
                </div>
            </Card>)
    })
    
    return (
        <Main>
            <Wrapper>
                {mapCountries}
            </Wrapper>
        </Main>
    )
}
