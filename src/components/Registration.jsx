import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Form, Button } from 'react-bootstrap'

const Registration = (props) => {

const showstates = () => {
   console.log(props.formValue)
}
    return (
        <div className='Registration'>
            <Container>
                <Row>
                    <Col md={6} className='mx-auto py-1'>
                        <Form onSubmit={showstates()}>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control type="text" placeholder="Name" required
                              onChange={(e) => {
                                  props.setformValue({
                                      ...props.formValue,
                                      name: e.target.value
                                    })
                              }}
                              />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                              <Form.Control type="text" placeholder="Surname" onChange={(e) => {
                                  props.setformValue({
                                      ...props.formValue,
                                      surname: e.target.value
                                    })
                              }} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control type="email" placeholder="Email" onChange={(e) => {
                                  props.setformValue({
                                      ...props.formValue,
                                      email: e.target.value
                                    })
                              }} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                              <Form.Control type="password" placeholder="Password" onChange={(e) => {
                                  props.setformValue({
                                      ...props.formValue,
                                      password: e.target.value
                                    })
                              }} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicNumber">
                              <Form.Control type="number" placeholder="Year of Birth" min={1910} onChange={(e) => {
                                  props.setformValue({
                                      ...props.formValue,
                                      year: e.target.value
                                    })
                              }} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                              <Form.Control type="text" placeholder="Street Adress" onChange={(e) => {
                                  props.setformValue({
                                      ...props.formValue,
                                      adress: e.target.value
                                    })
                              }} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicText">
                              <Form.Control type="text" placeholder="City" onChange={(e) => {
                                  props.setformValue({
                                      ...props.formValue,
                                      city: e.target.value
                                    })
                              }} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicPostalCode">
                              <Form.Control type="text" placeholder="Postal Code" onChange={(e) => {
                                  props.setformValue({
                                      ...props.formValue,
                                      postalCode: e.target.value
                                    })
                              }} required />
                            </Form.Group>
                            <Form.Group controlId="formBasicCardNumber">
                              <Form.Control type="number"  placeholder="Card Number" onChange={(e) => {
                                  props.setformValue({
                                      ...props.formValue,
                                      cardNumber: e.target.value
                                    })
                              }}  required />
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
