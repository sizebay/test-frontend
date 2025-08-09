import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from '../../components/atoms/Input/Input'

describe('Input component', () => {
    it('deve renderizar o input com placeholder', () => {
        render(<Input placeholder="Digite algo" />)
        const input = screen.getByPlaceholderText('Digite algo')
        expect(input).toBeInTheDocument()
    })

    it('deve permitir digitar texto', async () => {
        render(<Input placeholder="Digite" />)
        const input = screen.getByPlaceholderText('Digite')
        await userEvent.type(input, 'Hello')
        expect(input).toHaveValue('Hello')
    })

    it('deve aceitar props como disabled', () => {
        render(<Input disabled />)
        const input = screen.getByRole('textbox')
        expect(input).toBeDisabled()
    })
})
