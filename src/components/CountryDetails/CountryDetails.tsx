import React, { useContext, Fragment, FC } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Context } from '../../Context/GlobalContext'
import { CountryType } from '../Cards/CountryCards'
import {
  Back,
  Borders,
  Description,
  DescriptionWrapper,
  Details,
  SectionStyle,
} from './detailStyles'

type ParamsType = {
  countryName: string
}

interface BorderType {
  item: CountryType
  countries: any
}

const BorderContainer: FC<BorderType> = ({ item, countries }) => {
  console.log(item.borders);
  
  return (
    <Borders>
      { item.hasOwnProperty("borders") === false ? 
        <h3>This country has no borders</h3>
        :
        <Fragment>
          <h3>Border Countries: </h3>
          <ul>
            {item.borders && item.borders.map((border) => {
              console.log(border);
              
              const borderCountry: any = countries.find(
                (country: CountryType) => country.cca3 === border
              )
              let countryName = borderCountry.name.common.split(' ')
              countryName = countryName.length > 1 ? countryName[0] : countryName

              return (
                <li key={`border_${countryName}_${countryName.length}`}>
                  <Link to={`/${countryName}`}>{countryName}</Link>
                </li>
              )
            })}
          </ul>
        </Fragment>
      }
    </Borders>
  )
}

export const CountryDetails: React.FC = () => {
  const { countries } = useContext(Context)
  const { countryName }: ParamsType = useParams()
  
  
  const country = countries.filter(
    (item: CountryType) => item.name.common === countryName
    )

  return (
    <>
      {country && country.length === 0 ? (
        <div>This country is not the map yet.</div>
      ) : (
        <Fragment>
          {country.map((item: CountryType) => {
            const currencyProps = Object.values(item.currencies)
            console.log(item);
            
            
            return (
              <SectionStyle key={item.name.common}>
                <Back>
                  <Link to='/'>Back</Link>
                </Back>
                <Details>
                  <div>
                    <img src={item.flags.png} alt={item.name.official} />
                  </div>
                  <DescriptionWrapper>
                    <Description>
                      <div>
                        <h2>{item.name.common}</h2>
                        <div>
                          <p>
                            <b>Native Name</b>: {item.nativeName}
                          </p>
                          <p>
                            <b>Population</b>: {item.population}
                          </p>
                          <p>
                            <b>Region</b>: {item.region}
                          </p>
                          <p>
                            <b>Sub Region</b>: {item.subregion}
                          </p>
                          <p>
                            <b>Capital</b>: {item.capital}
                          </p>
                        </div>
                      </div>

                      <div>
                        <p>
                          <b>Top Level Domain</b>: {item.tld}
                        </p>
                        <p>
                          <b>Currencies</b>: {currencyProps.map((curr: any) => curr.symbol )}
                        </p>
                        <div>
                          <b>Languages</b>:{' '}
                          {item.languages.eng}
                        </div>
                      </div>
                    </Description>
                    <BorderContainer item={item} countries={countries} />
                  </DescriptionWrapper>
                </Details>
              </SectionStyle>
            )})
          }
        </Fragment>
      )}
    </>
  )
}
