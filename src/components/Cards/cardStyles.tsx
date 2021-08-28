import styled from 'styled-components'

export const Main = styled.main`
  margin: 2rem 0;
`

export const Wrapper = styled.div`
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

export const Card = styled.section`
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
