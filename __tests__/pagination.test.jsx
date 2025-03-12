import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Pagination from '../src/component/Pagination'

describe('Pagination', () => {
  it('renders record range', () => {
    render(<Pagination totalRecords={50} currentPage={1} totalPages={5} pageSize={10} onPageChange={() => {}} />)
    expect(screen.getByText('Showing 1 to 10 of 50 entries')).toBeInTheDocument()
  })

  it('calls onPageChange when a pagination clicked', () => {
    const mockOnPageChange = jest.fn()

    render(<Pagination totalRecords={50} currentPage={1} totalPages={5} pageSize={10} onPageChange={mockOnPageChange} />)

    fireEvent.click(screen.getByText('Next'))
    expect(mockOnPageChange).toHaveBeenCalledWith(2)

    fireEvent.click(screen.getByText('Last'))
    expect(mockOnPageChange).toHaveBeenCalledWith(5)
  })

  it('disables first buttons', () => {
    render(<Pagination totalRecords={50} currentPage={1} totalPages={5} pageSize={10} onPageChange={() => {}} />)

    expect(screen.getByText('First')).toBeDisabled()
    expect(screen.getByText('Prev.')).toBeDisabled()
    expect(screen.getByText('Next')).not.toBeDisabled()
    expect(screen.getByText('Last')).not.toBeDisabled()
  })

  it('disables last buttons', () => {
    render(<Pagination totalRecords={50} currentPage={5} totalPages={5} pageSize={10} onPageChange={() => {}} />)

    expect(screen.getByText('First')).not.toBeDisabled()
    expect(screen.getByText('Prev.')).not.toBeDisabled()
    expect(screen.getByText('Next')).toBeDisabled()
    expect(screen.getByText('Last')).toBeDisabled()
  })
  
})
