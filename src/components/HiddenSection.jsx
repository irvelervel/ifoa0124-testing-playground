import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const HiddenSection = function () {
  const [show, setShow] = useState(false)

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6} className="text-center">
          <Button
            onClick={() => {
              setShow(!show) // inverte il valore attuale di show
            }}
          >
            {show ? 'NASCONDI' : 'MOSTRA'} CARD
            {/* condizione ? se true : se false */}
          </Button>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6} className="text-center">
          {show && (
            <Card>
              <Card.Img variant="top" src="https://placedog.net/600" />
              <Card.Body>
                <Card.Title>Card Nascosta</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default HiddenSection
