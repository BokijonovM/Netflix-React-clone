import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'

const Registration = () => {
    return (
        <div className='Registration'>
            <Container>
                <Row>
                    <Col md={6} className='mx-auto py-1'>
                        <Form >
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control type="text" placeholder="Name" required/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                              <Form.Control type="text" placeholder="Surname" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control type="email" placeholder="Email" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                              <Form.Control type="password" placeholder="Password" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicNumber">
                              <Form.Control type="number" placeholder="Year of Birth" min={1910} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                              <Form.Control type="text" placeholder="Street Adress" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                              <Form.Control type="text" placeholder="City" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPostalCode">
                              <Form.Control type="text" placeholder="Postal Code" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                              <Form.Control type="password" placeholder="Enter your password" required />
                            </Form.Group>
                            <Form.Group controlId="formBasicCardNumber">
                              <Form.Control type="number"  placeholder="Card Number"  required />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                              Submit
                            </Button>
                        </Form>           
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Registration
