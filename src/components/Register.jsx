import React from 'react'
import {Form, Button, Col, Row} from 'react-bootstrap'

function Register() {
    return (
        <div>
            <h2 className='pl-5 mt-4 mb-4'>Welcome to Login page</h2>
            <Form className='d-flex justify-content-center'>
                <Row className='container my-5 register-row-cont'  >
                    <Col>
                        <div className='register-div d-flex justify-content-center'>
                            <Form.Group  controlId="formBasicName">
                            <Form.Label >First Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicSurname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control required type="text" placeholder="Enter surname" />
                        </Form.Group>
                        </div>

                       <div className='register-div d-flex justify-content-center'>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control required type="email" placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required type="password" placeholder="Password" />
                        </Form.Group>
                       </div>


                         <div className='register-div d-flex justify-content-center'>
                         <Form.Group controlId="formBasicCity">
                            <Form.Label>City address</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your city address" />
                        </Form.Group>
                        <Form.Group controlId="formBasicStreet">
                            <Form.Label>Street address</Form.Label>
                            <Form.Control required type="text" placeholder="Enter your street address" />
                        </Form.Group>
                     </div>

                        <div className='register-div d-flex justify-content-center'>
                            <Form.Group controlId="formBasicPostal">
                                <Form.Label>Postal code</Form.Label>
                                <Form.Control required type="text" placeholder="Enter postal code" />
                            </Form.Group>
                             <Form.Group className='' controlId="formBasicDate">
                                <Form.Label>Date of birth</Form.Label>
                                <Form.Control required type="date" placeholder="Enter your street address" />
                        </Form.Group>
                        </div>
                        
                             
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>

                        
                        
                        
                    </Col>
                    
                </Row>
               
            </Form>
        </div>
    )
}

export default Register
