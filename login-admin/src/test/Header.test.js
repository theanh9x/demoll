import React from 'react';
import {render,screen,cleanup} from '@testing-library/react';
import Header from '../components/directory/Header';

test('should render Header compnent',()=>{
    // expect(true).toBe(true);
    render(<Header/>);
    const todoElement = screen.getByTestId('header');
    expect(todoElement).toBeInTheDocument();
})