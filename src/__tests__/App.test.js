import { render, screen } from '@testing-library/react'
import App from '../App'

it('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/react testing lecture/i) // /  /i non tiene conto delle maiuscole/minuscole
  expect(linkElement).toBeInTheDocument()
})
