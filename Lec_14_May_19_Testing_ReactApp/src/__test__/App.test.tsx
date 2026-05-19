import { render, screen } from '@testing-library/react';
import { describe, expect, it,test } from 'vitest';
import App from '../App';


describe('App Component', () => {
    test('App render', () => { 
        render(<App />);
        const content = screen.getAllByText(/Home/i)[0];        
        expect(content).toBeInTheDocument();
        expect(screen.getByText(/Counter/i)).toBeInTheDocument(); //case insensitive
        expect(screen.getByText(/Users/i)).toBeInTheDocument(); 
    })
}) 