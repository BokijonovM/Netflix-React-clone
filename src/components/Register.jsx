import React, {useState} from 'react'
import {Form, Button, Col, Row} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import ModalPage from './ModalPage'

function Register() {
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [ surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [birth, setBirth] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [postal, setPostal] = useState('')

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };
    const handleSurname = (e) => {
        setSurname(e.target.value);
        setSubmitted(false);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };    
 

    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    const handleCity = (e) => {
        setCity(e.target.value);
        setSubmitted(false);
    };    
 

    const handleStreet = (e) => {
        setStreet(e.target.value);
        setSubmitted(false);
    };

    const handlePostal = (e) => {
        setPostal(e.target.value);
        setSubmitted(false);
    };    
 

    const handleBirth = (e) => {
        setBirth(e.target.value);
        setSubmitted(false);
    };




    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '' || surname === '' || postal ==='' || city === '' || street === '' || birth === '') {
        setError(true);
        } else {
        setSubmitted(true);
        setError(false);
        }
        <ModalPage /> 
        navigate('/')
    };

    
    // async function handleSubmit(event){
    //     event.preventDefault();
    //     await submitForm(event.target);
    //     navigate('/', {replace: true})
    // }



    const successMessage = () => {
        return (
        <div
            className="success"
            style={{
            display: submitted ? '' : 'none',
            }}>
            <h1 className='d-flex justify-content-center'>User {name} successfully registered!!</h1>
        </div>
        );
    };
 
  // Showing error message if error is true
    const errorMessage = () => {
        return (
        <div
            className="error"
            style={{
            display: error ? '' : 'none',
            }}>
            <h1 className='d-flex justify-content-center' >Please enter all the fields</h1>
        </div>
        );
    };



    return (
        <div>
           
            <h2  className=' my-4 d-flex justify-content-center'>Welcome to Login page</h2>
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <Form className='d-flex justify-content-center'>
                <Row className='container my-5 register-row-cont'  >
                    <Col>
                        <div className='register-div d-flex justify-content-center'>
                            <Form.Group  controlId="formBasicName">
                            <Form.Label >First Name</Form.Label>
                            <Form.Control onChange={handleName} value={name} required type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicSurname">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control onChange={handleSurname} value={surname} required type="text" placeholder="Enter surname" />
                        </Form.Group>
                        </div>

                       <div className='register-div d-flex justify-content-center'>
                            <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleEmail} value={email} required type="email" placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={handlePassword} value={password} required type="password" placeholder="Password" />
                        </Form.Group>
                       </div>


                         <div className='register-div d-flex justify-content-center'>
                         <Form.Group controlId="formBasicCity">
                            <Form.Label>City address</Form.Label>
                            <Form.Control onChange={handleCity} value={city} required type="text" placeholder="Enter your city address" />
                        </Form.Group>
                        <Form.Group controlId="formBasicStreet">
                            <Form.Label>Street address</Form.Label>
                            <Form.Control onChange={handleStreet} value={street} required type="text" placeholder="Enter your street address" />
                        </Form.Group>
                     </div>

                        <div className='register-div d-flex justify-content-center'>
                            <Form.Group controlId="formBasicPostal">
                                <Form.Label>Postal code</Form.Label>
                                <Form.Control onChange={handlePostal} value={postal} required type="number" placeholder="Enter postal code" />
                            </Form.Group>
                             <Form.Group className='' controlId="formBasicDate">
                                <Form.Label>Date of birth</Form.Label>
                                <Form.Control onChange={handleBirth} value={birth} required type="date" placeholder="Enter your street address" />
                        </Form.Group>
                        </div>

                        <div className='register-div d-flex justify-content-center'>
                           
                                <Button  className='mr-5' onClick={handleSubmit} disabled={!name || !surname || !postal || !password || !street || !email || !city || !birth } variant="primary" type="submit">
                                    Submit
                                </Button>
                                <ModalPage />
                            
                            
                                
                        </div>
                        
                           
                        

                        
                        
                        
                    </Col>
                    
                </Row>
               
            </Form>
        </div>
    )
}

export default Register
