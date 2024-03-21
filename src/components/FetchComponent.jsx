import { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Form from 'react-bootstrap/Form'

const FetchComponent = function () {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

  const fetchData = function () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella request')
        }
      })
      .then((users) => {
        setData(users)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    // come componentDidMount
    fetchData()
  }, [])

  return (
    <div>
      {/* un input controllato per la ricerca */}
      <Form.Control
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Cerca per nome"
      />
      <ListGroup>
        {data
          .filter((u) => u.name.toLowerCase().includes(query.toLowerCase()))
          .map((u) => {
            return (
              <ListGroup.Item key={u.id} data-testid="list-element">
                {u.name} - {u.phone}
              </ListGroup.Item>
            )
          })}
      </ListGroup>
    </div>
  )
}

export default FetchComponent
