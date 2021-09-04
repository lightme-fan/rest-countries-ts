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
  return (
    <Borders>
      <h3>Border Countries: </h3>
      <ul>
        {item.borders.map((border) => {
          const borderCountry: any = countries.find(
            (country: CountryType) => country.alpha3Code === border
          )
          let countryName = borderCountry?.name
          countryName = countryName.split(' ')
          countryName = countryName.length > 1 ? countryName[0] : countryName

          return (
            <li key={`border_${countryName}_${countryName.length}`}>
              <Link to={`/${countryName}`}>{countryName}</Link>
            </li>
          )
        })}
      </ul>
    </Borders>
  )
}

export const CountryDetails: React.FC = () => {
  const { countries } = useContext(Context)
  const { countryName }: ParamsType = useParams()

  const country = countries.filter(
    (item: CountryType) => item.name === countryName
  )

  return (
    <>
      {country && country.length === 0 ? (
        <div>This country is not the map yet.</div>
      ) : (
        <Fragment>
          {country.map((item: CountryType) => (
            <SectionStyle key={item.name}>
              <Back>
                <Link to='/'>Back</Link>
              </Back>
              <Details>
                <div>
                  <img src={item.flag} alt={item.name} />
                </div>
                <DescriptionWrapper>
                  <Description>
                    <div>
                      <h2>{item.name}</h2>
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
                        <b>Top Level Domain</b>: {item.topLevelDomain}
                      </p>
                      <p>
                        <b>Currencies</b>: {item.currencies.map((i) => i.code)}
                      </p>
                      <div>
                        <b>Languages</b>:{' '}
                        {item.languages.map((i) => (
                          <span>{i.name}, </span>
                        ))}
                      </div>
                    </div>
                  </Description>
                  {item.borders && !item.borders.length ? (
                    <h3>This country has no borders</h3>
                  ) : (
                    <BorderContainer item={item} countries={countries} />
                  )}
                </DescriptionWrapper>
              </Details>
            </SectionStyle>
          ))}
        </Fragment>
      )}
    </>
  )
}
