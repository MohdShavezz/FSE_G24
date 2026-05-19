import { render, screen } from '@testing-library/react';
import { describe, expect, it, test } from 'vitest';
import userEvent from '@testing-library/user-event';
import Counter from '../Components/Counter';


describe('Counter Component', () => {
    test('Counter render', () => {
        render(<Counter />);
    })
    test('Counter Content Present', () => {
        render(<Counter />);
        const content = screen.getAllByText(/Counter:/i)[0];
        expect(content).toBeInTheDocument();
        expect(screen.getByText('Count: 0')).toBeInTheDocument();
    })
    it('increments count on click', async () => {
        render(<Counter />)
        const button = screen.getByText('INC')
        await userEvent.click(button)
        await userEvent.click(button)
        expect(screen.getByText('Count: 2')).toBeInTheDocument()
    })
    it('decrements count on click', async () => {
        render(<Counter />)
        const button = screen.getByText('DEC')
        await userEvent.click(button)
        await userEvent.click(button)
        expect(screen.getByText('Count: -2')).toBeInTheDocument()
    })  
    it('resets count to zero on click', async () => {
        render(<Counter />)
        const button = screen.getByText('RESET')
        await userEvent.click(button)
        expect(screen.getByText('Count: 0')).toBeInTheDocument()
    })  
    it('onChange event test', async () => {
        render(<Counter />)
        const inputRef = screen.getAllByPlaceholderText('Count')
        await userEvent.type(inputRef[0], '5')
        expect(inputRef[0]).toHaveValue('5')
    })  
}) 
