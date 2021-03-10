import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Context } from '../../Context/GlobalContext'
import { CountryType } from '../Cards/CountryCards'

type ParamsType = {
    countryName: string
}


export const CountryDetails: React.FC = () => {
    const {countries } = useContext(Context)
    const { countryName }: ParamsType = useParams();

    const country = countries.filter((item: CountryType) => item.name === countryName)
    console.log(country);
    
    return (
        <div>
            {country.map((item: CountryType) => {
                return (
                    <section key={item.name}>
                        <img src={item.flag} />
                        <h2>{item.name}</h2>

                        <div>
                            <p><b>Native Name</b>: {item.nativeName}</p>
                            <p><b>Population</b>: {item.population}</p>
                            <p><b>Region</b>: {item.region}</p>
                            <p><b>Sub Region</b>: {item.subregion}</p>
                            <p><b>Capital</b>: {item.capital}</p>
                        </div>

                        <div>
                            <p><b>Top Level Domain</b>: {item.topLevelDomain}</p>
                            <p><b>Currencies</b>: {item.currencies.map(i => i.code)}</p>
                            <div><b>Languages</b>: {item.languages.map(i => (<span>{i.name}, </span>))}</div>
                        </div>

                        <div>
                            <h3>Border Countries</h3>
                            <ul>
                                {item.borders.map((border, index) =>
                                    <Link to={border}>{border}</Link>
                                )}
                            </ul>
                        </div>
                    </section>
                )
            })}
        </div>
    )
}
