import { render, screen } from "@testing-library/react"
import App from './App'
import userEvent from '@testing-library/user-event'

test("header renders with correct text", () => {
  render(<App />)
  const headerE1 = screen.getByRole("heading")
  expect(headerE1.textContent).toBe("Testing Playground")
})

// async function using userEvent.click
test("button changes color when clicked", async () => {
  render(<App />)
  const colorBtn = screen.getByRole("button")
// await to allow event to pass
  await userEvent.click(colorBtn)

  expect(colorBtn).toHaveStyle({ backgroundColor: "blue" })
  expect(colorBtn.textContent).toBe("Change button color to green")
})