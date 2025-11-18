import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  test('renders welcome heading', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { name: /welcome to react/i })
    expect(heading).toBeInTheDocument()
  })

  test('renders description text', () => {
    render(<App />)
    const text = screen.getByText(/start building your app here/i)
    expect(text).toBeInTheDocument()
  })

  test('renders a div container', () => {
    render(<App />)
    const container = screen.getByRole('heading').closest('div')
    expect(container).toBeInTheDocument()
  })
})