import { render, screen, fireEvent } from '@testing-library/react'
import FetchComponent from '../components/FetchComponent'
// to-do list

describe('user list behavior', () => {
  // - all'avvio compaia il campo di ricerca
  it('renders input field at launch', () => {
    render(<FetchComponent />)
    const searchField = screen.getByPlaceholderText(/cerca per nome/i)
    expect(searchField).toBeInTheDocument()
  })

  // - all'avvio NON ci sono elementi nella lista
  it('creates an empty user list at launch', () => {
    render(<FetchComponent />)
    const userslist = screen.queryAllByTestId('list-element')
    // al primo render mi aspetto che questa userslist sia un array vuoto -> un array di lunghezza 0
    expect(userslist).toHaveLength(0)
  })

  // - finita la fetch, la lista deve contenere esattamente 10 elementi
  it('creates a list with 10 users when the fetch inside the useEffect resolves', async () => {
    render(<FetchComponent />)
    const userslist = await screen.findAllByTestId('list-element')
    // stiamo aspettando indefinitamente che le Promise nel componente vengano risolte
    // la loro risoluzione provocherà una lista di utenti nella pagina
    expect(userslist).toHaveLength(10)
  })

  // - inserendo "kurtis" nel campo di ricerca, otteniamo una lista con esattamente UN elemento
  it('creates a list with just 1 user after waiting for the fetch the complete and writing "kurtis" in the search field', async () => {
    render(<FetchComponent />)
    const searchField = screen.getByPlaceholderText(/cerca per nome/i)
    // dobbiamo scrivere "kurtis" dentro l'input field
    fireEvent.change(searchField, { target: { value: 'kurtis' } }) // cambio l'input value del target
    const userslist = await screen.findAllByTestId('list-element') // deve essere una array con UN elemento
    expect(userslist).toHaveLength(1)
  })
})
