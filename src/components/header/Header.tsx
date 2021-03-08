import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    box-shadow: 0px 5px 6px 1px #000;

    h1 {
        margin: 0;
        font-size: 22px;
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

export const Header: React.FC = ({children, ...restProps}) => {
    return (
        <Container>
            <h1 data-testid="title">Where in the world</h1>
            <div data-testid="mode">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                <span>Dark Mode</span>
            </div>
        </Container>
    )
}
