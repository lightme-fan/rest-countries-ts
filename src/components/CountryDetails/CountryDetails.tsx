import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../../Context/GlobalContext'
import { CountryType } from '../Cards/CountryCards'

type ParamsType = {
  countryName: string
}

export const CountryDetails: React.FC = () => {
  const { countries } = useContext(Context)
  const { countryName }: ParamsType = useParams()

  const country = countries.filter(
    (item: CountryType) => item.name === countryName
  )

  console.log(country)

  return (
    <>
      {country.map((item: CountryType) => {
        console.log(item.borders)

        return (
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

                <Borders>
                  <h3>Border Countries: </h3>
                  {!item.borders ? (
                    <span>"This country doesn't have any borders."</span>
                  ) : (
                    <ul>
                      {item.borders.map((border) => (
                        <li>
                          <Link to={border}>{border}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </Borders>
              </DescriptionWrapper>
            </Details>
          </SectionStyle>
        )
      })}
    </>
  )
}

const SectionStyle = styled.section`
  padding: 158px 16px 64px 16px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 650px) {
    padding: 158px 16px;
  }
`

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const Back = styled.div`
  max-width: 30px;
  cursor: pointer;
  padding: 10px 28px 10px 60px;
  border: none;
  box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 7px;
  background-color: ${({ theme }: any) => theme.active};
  background-image: url(${({ theme }: any) => theme.leftArrow});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: 22% 50%;

  a {
    color: ${({ theme }: any) => theme.text};
  }
`

const Details = styled.div`
  padding-top: 62px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

const Description = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    padding-bottom: 22px;
  }

  @media (max-width: 650px) {
    display: grid;
    gap: 20px;
  }
`

const Borders = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: start;
    padding-top: 36px;
  }

  h3,
  ul {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    row-gap: 34px;
    flex-wrap: wrap;
  }

  li a {
    padding: 10px 20px;
    box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.65);
    background-color: ${({ theme }: any) => theme.active};
    color: ${({ theme }: any) => theme.text};
    border-radius: 6px;
  }
`
