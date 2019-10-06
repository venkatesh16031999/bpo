import React from 'react';
import Auxillary from '../hoc/auxillary';
import {Form,Button} from 'react-bootstrap';



const Signin=(props)=>{

    return(

        <Auxillary >
                <Form className="ma10 pa5 br6 " >

    <Form.Group controlId="formGridAddress1">
    <Form.Label>Name</Form.Label>
    <Form.Control placeholder="Enter Your Name" onChange={props.nameChange} />
  </Form.Group>

  
    <Form.Group  controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter Your email" onChange={props.emailChange} />
    </Form.Group>

    <Form.Group  controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Enter Your Password" onChange={props.passwordChange} />
    </Form.Group>
  

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Company Name</Form.Label>
    <Form.Control placeholder="Company Name" onChange={props.companyChange} />
  </Form.Group>


    <Form.Group  controlId="formGridState" onChange={props.countryChange}>
      <Form.Label>Country</Form.Label>
      <Form.Control as="select">
        <option value="India">India</option>
         <option value="United States">United States</option>
         <option value="Germany">Germany</option>
         <option value="Australia">Australia</option>
         <option value="Europe">Europe</option>
         <option value="Brazil">Brazil</option>
         <option value="South Africa">South Africa</option>
         <option value="Japan">Japan</option>
         <option value="China">China</option>
         <option value="Singapore">Sngapore</option>
      </Form.Control>
    </Form.Group>

 

  <Form.Group id="formGridCheckbox" onClick={props.onclicktoenable}>
    <Form.Check type="checkbox" label="Check me out"  />
  </Form.Group>

  <Button variant="primary" type="button" onClick={props.formSubmit}>
    Sign Up
  </Button>
</Form>

        </Auxillary>
       

    );


}

export default Signin;