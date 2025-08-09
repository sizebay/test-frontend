import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchForm } from '../../components/molecules/SearchForm/SearchForm'

describe('SearchForm', () => {
    const mockOnSearch = jest.fn()
    const mockOnChange = jest.fn()

    beforeEach(() => {
        mockOnSearch.mockClear()
        mockOnChange.mockClear()
    })

    it('deve renderizar o input e botão', () => {
        render(<SearchForm value="" onChange={mockOnChange} onSearch={mockOnSearch} loading={false} />)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('deve chamar onChange quando digitar no input', async () => {
        render(<SearchForm value="" onChange={mockOnChange} onSearch={mockOnSearch} loading={false} />)
        const input = screen.getByRole('textbox')
        await userEvent.type(input, 'teste')
        expect(mockOnChange).toHaveBeenCalledTimes(5)
    })

    it('deve chamar onSearch ao clicar no botão', async () => {
        render(<SearchForm value="abc" onChange={mockOnChange} onSearch={mockOnSearch} loading={false} />)
        await userEvent.click(screen.getByRole('button'))
        expect(mockOnSearch).toHaveBeenCalled()
    })

    it('deve chamar onSearch ao apertar Enter', async () => {
        render(<SearchForm value="abc" onChange={mockOnChange} onSearch={mockOnSearch} loading={false} />)
        const input = screen.getByRole('textbox')
        await userEvent.type(input, '{enter}')
        expect(mockOnSearch).toHaveBeenCalled()
    })

    it('deve desabilitar o botão quando loading for true', () => {
        render(<SearchForm value="abc" onChange={mockOnChange} onSearch={mockOnSearch} loading={true} />)
        expect(screen.getByRole('button')).toBeDisabled()
    })
})
