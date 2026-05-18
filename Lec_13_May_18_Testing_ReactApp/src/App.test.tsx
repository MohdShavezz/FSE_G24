import { describe, expect, it, test } from 'vitest'
import {render,screen} from '@testing-library/react'
import App from './App'

describe('App Component', () => {
    test('App renders', () => { 
        render(<App/>)
    })
    test('text checking', () => { 
        render(<App/>)
        expect(screen.getByText('Get started')).toBeDefined()
    })
    
})  