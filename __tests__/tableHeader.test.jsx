import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import TableHeader from '../src/component/TableHeader'

describe('Test TableHeader component', () => {
    const Wrapper = ({ children }) => {
        return (
            <table>
                <thead>{children}</thead>
            </table>
        );
    };

    it('call onSort with field and order when header clicked', () => {
        const mockOnSort = jest.fn()

        render(<Wrapper><TableHeader onSort={mockOnSort} /></Wrapper>)
        const idColumnHeader = screen.getByText(/id/i)

        fireEvent.click(idColumnHeader)

        expect(mockOnSort).toHaveBeenCalledWith('id', 'desc')
    })

    it('change sort symbol when header clicked', () => {
        render(<Wrapper><TableHeader onSort={() => {}} /></Wrapper>)
    
        const idColumnHeader = screen.getByText(/name/i)
    
        fireEvent.click(idColumnHeader)
        const idSortSymbolAfterFirstClick = screen.getByText('↓')
        expect(idSortSymbolAfterFirstClick).toBeInTheDocument()
    
        fireEvent.click(idColumnHeader)
        const idSortSymbolAfterSecondClick = screen.getByText('↑')
        expect(idSortSymbolAfterSecondClick).toBeInTheDocument()
      })
})
