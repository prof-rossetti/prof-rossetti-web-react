
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
//import Table from 'react-bootstrap/Table'

export default function Teaching() {

    var cardStyle={marginBottom: 15, marginTop:15}
    var cardImgStyle = {marginBottom:10}

    return (
        <Container fluid>
            <h2>Teaching</h2>

            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Img src="https://via.placeholder.com/2x1?text=Placeholder" style={cardImgStyle}/>
                    <Card.Text>
                        Card text...
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Img src="https://via.placeholder.com/2x1?text=Placeholder" style={cardImgStyle}/>
                    <Card.Text>
                        Card text...
                    </Card.Text>
                </Card.Body>
            </Card>

        </Container>
    )
}
