import { render, screen, fireEvent } from '@testing-library/react'
import HiddenSection from '../components/HiddenSection'

// to-do list dei nostri test

// - il bottone ci sia già all'avvio
// - il bottone all'avvio abbia contenuto "MOSTRA CARD"

// - la card all'avvio NON ci deve essere
// - premendo una volta il bottone, la card deve comparire
// - sempre dopo aver premuto una volta il bottone, il testo del bottone deve diventare "NASCONDI CARD"
// - cliccando DUE volte il bottone, non ci deve essere più la card, il bottone deve contenere "MOSTRA CARD"

// il punto 2) può richiedere l'utilizzo di uno di TRE (x2) metodi della libreria react-testing-library
// getBy*
// findBy*
// queryBy*

// describe delimita un GRUPPO di test che presumibilmente hanno qualcosa in comune
describe('Just button testing', () => {
  // - il bottone ci sia già all'avvio
  it('mounts correctly the button at launch', () => {
    // 4 steps di ogni test
    // 1) montaggio del componente interessato nel VIRTUAL DOM
    render(<HiddenSection />)
    // 2) ricerca dell'elemento tramite i metodi di react-testing-library
    const button = screen.getByRole('button') // verifica che ci sia un bottone a caso nella pagina
    // 3) (opzionale) interazione con i componenti renderizzati
    // 4) verifica dei risultati attesi
    expect(button).toBeInTheDocument()
  })

  // - il bottone all'avvio abbia contenuto "MOSTRA CARD"
  it('contains "MOSTRA CARD" initially', () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const button = screen.getByText(/mostra card/i)
    // 3)
    // 4)
    expect(button).toBeInTheDocument()
  })
})

describe('Other functionalities', () => {
  // - la card all'avvio NON ci deve essere
  it("checks the card's absence at launch", () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const img = screen.queryByRole('img') // questa riga dovrebbe tornare NULL
    console.log('IMG', img)
    // 3)
    // 4)
    // expect(img).not.toBeInTheDocument()
    // expect(img).toBeFalsy()
    expect(img).toBeNull()
  })
  // - premendo una volta il bottone, la card deve comparire
  it('renders the card after clicking the button', () => {
    // 1)
    render(<HiddenSection />)
    // 2)
    const button = screen.getByText(/mostra card/i)
    // 3)
    fireEvent.click(button) // clicco una volta il bottone
    // 4)
    const img = screen.getByRole('img') // ora l'immagine dovrebbe esserci!
    expect(img).toBeInTheDocument()
  })
  // - sempre dopo aver premuto una volta il bottone, il testo del bottone deve diventare "NASCONDI CARD"
  it("changes the button's label after a single click on the button", () => {
    render(<HiddenSection />)
    const button = screen.getByText(/mostra card/i)
    fireEvent.click(button)
    // fireEvent.click(button) // se clicco due volte, l'etichetta del bottone torna ad essere "MOSTRA CARD" !
    const differentLabelButton = screen.getByText(/nascondi card/i)
    expect(differentLabelButton).toBeInTheDocument()
  })
  // - cliccando DUE volte il bottone, non ci deve essere più la card, il bottone deve contenere "MOSTRA CARD"
  it("after two clicks of the button, the button's label resets", () => {
    render(<HiddenSection />)
    const button = screen.getByText(/mostra card/i)
    fireEvent.click(button)
    fireEvent.click(button)
    const differentLabelButton = screen.queryByText(/nascondi card/i)
    expect(differentLabelButton).not.toBeInTheDocument()
  })
})
