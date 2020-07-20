import React from 'react';
import {Container, Row, Col, Form, FormGroup, Input, Label, Button} from 'reactstrap';
import Header from '../Header';


const Login = (props) =>( 
    <Container>
        <Row>
            <Header />
        </Row>
        <Row>
            <Col md="4" className="column">
                <Form onSubmit={props.handleLogin}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" />
                    </FormGroup>

                    <Button color="primary" className="float-right">Login</Button>
                </Form>
            </Col>
        </Row>
        
    </Container> );


export default Login;