import { render, screen } from '@testing-library/react'
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
  //   it()
})

describe('Other functionalities', () => {
  // - la card all'avvio NON ci deve essere
  //   it()
  // - premendo una volta il bottone, la card deve comparire
  //   it()
  // - sempre dopo aver premuto una volta il bottone, il testo del bottone deve diventare "NASCONDI CARD"
  //   it()
  // - cliccando DUE volte il bottone, non ci deve essere più la card, il bottone deve contenere "MOSTRA CARD"
  //   it()
})
