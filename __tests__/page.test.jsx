import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../src/app/page'
 
describe('Home', () => {
  it('test renders Home', () => {
    render(<Home />)
 
    const heading = screen.getByRole('heading', { level: 1 })
    const navbar = screen.getByTestId('navbar')
    const filter = screen.getByTestId('filter')
    const result = screen.getByTestId('result')
  
    expect(navbar).toBeInTheDocument()
    expect(heading).toBeInTheDocument()
    expect(filter).toBeInTheDocument()
    expect(result).toBeInTheDocument()
  })


})