import React from 'react';
import { fireEvent, render, cleanup } from '@testing-library/react';
import { Header } from './Header';

test('<Heade />', () => {
    const { queryByTestId } = render(<Header />)
    expect(queryByTestId('title')).toBeTruthy()
    
})