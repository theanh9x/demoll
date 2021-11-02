import React from 'react';
import {render,screen,cleanup} from '@testing-library/react';
import Dashboard from '../components/Dashboard';

test('should render dashboard compnent',()=>{
    // expect(true).toBe(true);
    render(<Dashboard/>);
    const todoElement = screen.getByTestId('dashboard');
    expect(todoElement).toBeInTheDocument();
})