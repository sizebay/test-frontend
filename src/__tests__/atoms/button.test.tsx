import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '../../components/atoms/Button/Button'

describe('Button component', () => {
    it('deve renderizar o botão com texto', () => {
        render(<Button>Enviar</Button>)
        const button = screen.getByRole('button', { name: /enviar/i })
        expect(button).toBeInTheDocument()
    })

    it('deve chamar onClick quando clicado', async () => {
        const handleClick = jest.fn()
        render(<Button onClick={handleClick}>Clique</Button>)
        const button = screen.getByRole('button', { name: /clique/i })
        await userEvent.click(button)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('deve estar desabilitado se a prop disabled for true', () => {
        render(<Button disabled>Desabilitado</Button>)
        const button = screen.getByRole('button', { name: /desabilitado/i })
        expect(button).toBeDisabled()
    })
})
