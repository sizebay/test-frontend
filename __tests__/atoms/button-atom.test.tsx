import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import ButtonAtom from "@/components/atoms/button-atom"
import { describe, expect, it, jest } from '@jest/globals'

describe("ButtonAtom", () => {
  it("renders and clicks", () => {
    const onClick = jest.fn()
    render(<ButtonAtom onClick={onClick}>Clique</ButtonAtom>)
    const btn = screen.getByRole("button", { name: "Clique" })
    expect(btn).toBeInTheDocument()
    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("respects disabled state", () => {
    const onClick = jest.fn()
    render(
      <ButtonAtom disabled onClick={onClick}>
        Desabilitado
      </ButtonAtom>,
    )
    const btn = screen.getByRole("button", { name: "Desabilitado" })
    expect(btn).toBeDisabled()
  })
})
