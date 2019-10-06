import React from 'react';
import Auxillary from '../hoc/auxillary';
import {Form,Col,Button,Row,Container,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Login=(props)=>{

    return(
<Auxillary >

<Container fluid={true}>
<Row className="justify-center bg-left"  >

<Col lg={8} style={{backgroundSize:"cover",height:"92vh",backgroundImage:"url('https://png2.cleanpng.com/sh/f1ff7273dc13a583b3aac91f7b4fec7f/L0KzQYm3VsIxN5RnjpH0aYP2gLBuTgdwep1pRd9qcD3khL3ok711cJYyhNdqZHX1Pbr1Tf1mNZD6jOV4dYLmebBuTcVjOpJrTdg5M0K7coKATsc1PmQ3Tas5MUW1SYa7UsEzQGM1T5D5bne=/kisspng-world-map-atlas-the-leader-in-me-outsourcing-5b2af5f0328b17.746325901529542128207.png')"}}>
<h1 className="tc">WE CONNECT AND WE SERVE </h1>
</Col>
    <Col lg={4} style={{backgroundColor: "gainsboro"}}>
    
    <Form className="ma10 pa5 br6  " style={{marginTop:"100px",borderRadius:"5px",}}  >

<Form.Group  controlId="formGridEmail">
<Form.Label>Email</Form.Label>
<Form.Control type="email" placeholder="Enter Your email" />
</Form.Group>

<Form.Group  controlId="formGridPassword">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Enter Your Password" />
</Form.Group>


<Button variant="primary" type="button"   onClick={props.disable}>
<Nav.Link > <Link to="/data" style={{color:"white",padding:"2px"}}>Login</Link></Nav.Link>
</Button>
</Form>
    
    </Col>
</Row>
</Container>


</Auxillary>

    );

}

export default Login;