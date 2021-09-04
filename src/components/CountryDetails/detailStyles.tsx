import styled from 'styled-components'

export const SectionStyle = styled.section`
  padding: 158px 16px 64px 16px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 650px) {
    padding: 158px 16px;
  }
`

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const Back = styled.div`
  a {
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

    color: ${({ theme }: any) => theme.text};
  }
`

export const Details = styled.div`
  padding-top: 62px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`

export const Description = styled.section`
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

export const Borders = styled.div`
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
