import { render, screen } from '@testing-library/react';
import { describe, expect, it,test } from 'vitest';
import Home from '../Home';

describe('Home Component', () => {
    test('Home render', () => { 
        render(<Home />);
    })
    test.only('Home content', () => {
        render(<Home />);
        const content = screen.getAllByText('Home')[0];        
        expect(content).toBeInTheDocument();
        expect(screen.getByText(/this is the home page/i)).toBeDefined(); 
    })
}) 