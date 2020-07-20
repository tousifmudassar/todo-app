import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';

const Header = () =>{
    return(
        <Container>
            <Row>
                <Col>
                    <Link to="/">Login</Link>&nbsp;
                    <Link to="/dashboard" >Dashboard</Link>&nbsp;
                    <Link to="/profile">Profile</Link>
                </Col>
            </Row>
        </Container>    
    )
}

export default Header;