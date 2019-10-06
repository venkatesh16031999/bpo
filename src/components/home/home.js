import React,{Component} from 'react';
import {Col,Row,Container} from 'react-bootstrap';
import Signin from '../signin/signin';
import axios from 'axios';



class Home extends Component{
        state={
            disable:true,
            name: "",
            email: "",
            phone: 787876565,
            company: "",
            country: "",
            password:""

        }
  
        formSubmitHandler=()=>{
            var details={
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                company: this.state.company,
                country: this.state.country,
                password:this.state.password
            }
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': 'JWT fefege...'
              }
           axios.post("http://localhost:3001/register",details,{
            headers: headers
          }).then(res=>{
               console.log(res.data);
           }).catch(e=>{
               console.log("Something Wrong");
           })
        }
        
        nameChangeHandler=(event)=>{
            this.setState({
                name:event.target.value
            });
            
        }

        emailChangeHandler=(event)=>{
            this.setState({
                email:event.target.value
            });
        }

        passwordChangeHandler=(event)=>{
            this.setState({
                password:event.target.value
            });
        }

        companyChangeHandler=(event)=>{
            this.setState({
                company:event.target.value
            });
        }

        countryChangeHandler=(event)=>{
            this.setState({
                country:event.target.value
            });
        }



        
   
   

    render(){

        

        return(
            <Container fluid="true"
           
            
            >
                <Row>
                    <Col lg={8}  style={{
                backgroundImage:"url('https://png2.cleanpng.com/sh/f1ff7273dc13a583b3aac91f7b4fec7f/L0KzQYm3VsIxN5RnjpH0aYP2gLBuTgdwep1pRd9qcD3khL3ok711cJYyhNdqZHX1Pbr1Tf1mNZD6jOV4dYLmebBuTcVjOpJrTdg5M0K7coKATsc1PmQ3Tas5MUW1SYa7UsEzQGM1T5D5bne=/kisspng-world-map-atlas-the-leader-in-me-outsourcing-5b2af5f0328b17.746325901529542128207.png')",
                backgroundSize:"cover",
                height:"92.2vh"
                    }}>
                        <h1 className="tc">WE CONNECT AND WE SERVE </h1>
                    </Col>
                    <Col lg={4} style={{backgroundColor: "gainsboro"}}>
                        <Signin 
                        nameChange={(event)=>{this.nameChangeHandler(event)}}
                        emailChange={(event)=>{this.emailChangeHandler(event)}}
                        passwordChange={(event)=>{this.passwordChangeHandler(event)}}
                        companyChange={(event)=>{this.companyChangeHandler(event)}}
                        countryChange={(event)=>{this.countryChangeHandler(event)}}
                        
                        formSubmit={this.formSubmitHandler}
                        disable={this.state.disable} />

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Home;