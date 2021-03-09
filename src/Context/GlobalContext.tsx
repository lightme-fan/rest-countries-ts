import React, { createContext, useEffect, useReducer, useState } from 'react'

type ValueType = {
    countries: [];
    isModeDark: boolean;
}

const initialValue: ValueType = {
    countries: [],
    isModeDark: false,
}

type State = {
    countries: any;
    isModeDark: boolean;
}

interface CountryType {
    conutry: {
        alpha2Code: string;
        alpha3Code: string;
        altSpellings: string[]
        area: number
        borders: string[]
        callingCodes: [string]
        capital: string
        cioc: string
        currencies: {code: string, name: string, symbol: string}[]
        demonym: string
        flag: string
        gini: number
        languages: {iso639_1: string, iso639_2: string, name: string, nativeName: string}[]
        latlng: number[]
        name: string
        nativeName: string
        numericCode: string
        population: number
        region: string
        regionalBlocs: {acronym: string, name: string}[]
        subregion: string
        timezones: string[]
        topLevelDomain: string[]
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
}

type Action = 
| { type: 'FETCH_API', payload: CountryType[] } 
| { type: 'CHANGE_MODE' }


const reducer = (state: State = initialValue, action: Action) => {
    switch (action.type) {
        case 'FETCH_API':
            return {...state, countries: [...action.payload]}
        default:
            return state
    }
}


export const Context = createContext(initialValue);

export const ContextProvider: React.FC = ({children}) => {
    const [ state, dispacth ] = useReducer(reducer, initialValue)
    
    const fetchApi = async (request: string) => {
        const response = await fetch(request);
        const data = await response.json()
        dispacth({type: 'FETCH_API', payload: data})
    }

    useEffect(() => {
        fetchApi('https://restcountries.eu/rest/v2/all')
    }, [])

    return (
        <Context.Provider value={{countries: state.countries, isModeDark: false}}>
            {children}
        </Context.Provider>
    ) 
}
