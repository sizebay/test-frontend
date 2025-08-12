import { render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import InputAtom from "@/components/atoms/input-atom"
import { describe, expect, it } from '@jest/globals'

describe("InputAtom", () => {
  it("renders with label (sr-only) and updates value", () => {
    render(<InputAtom label="Usuário" id="user" placeholder="Digite" />)
    const input = screen.getByPlaceholderText("Digite") as HTMLInputElement
    expect(input).toBeInTheDocument()
    fireEvent.change(input, { target: { value: "vercel" } })
    expect(input.value).toBe("vercel")
  })
})
