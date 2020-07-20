import React from 'react';
import { Container, Row } from 'reactstrap';
import Header from '../Header';
import queryString from 'query-string'

const Dashboard = (props) =>{   console.log(props);
    console.log(props.queryString);   return(
    <Container>
  
        <Row>
        <Header />
        <h1>Dashboard</h1>
        </Row>
    </Container>
   ) }


export default Dashboard;