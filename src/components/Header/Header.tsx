import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { WrapperContainer } from '../../styles'

const Container = styled.header`
  padding: 1rem 0;
  box-shadow: 1px 0px 5px 0px rgba(0, 0, 0, 0.75);
  background: ${({ theme }: any) => theme.active};
  color: ${({ theme }: any) => theme.text};
  transition: all 0.5s linear;
  width: 100%;
  position: fixed;
  top: 0;

  h1 {
    margin: 0;
    font-size: 22px;
    a {
      color: ${({ theme }: any) => theme.text};
    }

    @media (max-width: 500px) {
      font-size: 16px;
    }
  }

  div {
    position: relative;
  }

  svg {
    width: 24px;
    height: 20px;
    position: absolute;
    left: -32px;
    top: 2px;
  }
`

const Wrapper = styled.div`
  margin: auto;
  padding: 1rem 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Mode = styled.button`
  padding-left: 30px;
  border: none;
  color: ${({ theme }: any) => theme.text};
  background-image: url(${({ theme }: any) => theme.icon});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 18px;
`

interface HeaderType {
  onClick: () => void
}

export const Header: React.FC<HeaderType> = ({ onClick }) => {
  return (
    <Container>
      <WrapperContainer>
        <Wrapper>
          <h1 data-testid='title'>
            <Link to='/'>Where in the world?</Link>
          </h1>
          <Mode data-testid='mode' onClick={onClick}>
            <span>Dark Mode</span>
          </Mode>
        </Wrapper>
      </WrapperContainer>
    </Container>
  )
}
