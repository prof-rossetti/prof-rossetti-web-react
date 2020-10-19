
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default function Home() {

    return (
        <Container fluid>
            <h2>Home</h2>

            <Card>
                <Card.Body>
                    <Card.Title><h3>Card Title</h3></Card.Title>
                    <Card.Text>
                        Card text...
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title><h3>Card Title</h3></Card.Title>
                    <Card.Text>
                        Card text...
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    )
}
