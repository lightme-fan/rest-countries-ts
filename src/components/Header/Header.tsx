import React from 'react'
import { Link } from 'react-router-dom'
import { WrapperContainer } from '../../globalStyles'
import { Container, Mode, Wrapper } from './headerStyles'

interface HeaderType {
  onClick: () => void
}

export const Header: React.FC<HeaderType> = ({ onClick }) => {
  return (
    <Container>
      <WrapperContainer>
        <Wrapper>
          <h1>
            <Link to='/'>Where in the world?</Link>
          </h1>
          <Mode onClick={onClick}>
            <span>Dark Mode</span>
          </Mode>
        </Wrapper>
      </WrapperContainer>
    </Container>
  )
}
