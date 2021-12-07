import React from 'react'
import { Link } from 'react-router-dom'
import { WrapperContainer } from '../../globalStyles'
import { Container, Mode, Wrapper } from './headerStyles'

interface HeaderType {
  onClick: () => void
  mode: string
}

export const Header: React.FC<HeaderType> = ({ onClick, mode }) => {
  return (
    <Container>
      <WrapperContainer>
        <Wrapper>
          <h1>
            <Link to='/'>Where in the world?</Link>
          </h1>
          <Mode onClick={onClick}>
            <span>{mode} Mode</span>
          </Mode>
        </Wrapper>
      </WrapperContainer>
    </Container>
  )
}
