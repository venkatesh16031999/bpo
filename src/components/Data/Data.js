import React,{Component} from 'react';
import {Card,Button,Table} from 'react-bootstrap';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class Data extends Component{
    state={
        data:[],
    }

    idpassingHandler=(id)=>{
      console.log(this.props);
      this.props.history.push({
        pathname:"/"+id
      });
    }

    fetchusers=()=>{
        axios.get("http://localhost:3001/getusers",{
            mode:"no-cors"
        }).then(res=>{
            
            this.setState({data:[...res.data]});
            
        })
    }

    componentDidMount(){
       this.fetchusers();
    }


    render(){

      

        return(
            <Card className="text-center">
      <Card.Header><h1>Client Data</h1></Card.Header>
      <Card.Body>
    
      <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>SI.NO</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Company</th>
          <th>Country</th>
         
        </tr>
      </thead>
      <tbody style={{maxHeight:"20vh"}}>
    {
        this.state.data.map((list,index)=>{
            return (
                <tr onClick={()=>this.idpassingHandler(list.id)}>
                <th>{index+1}</th>
                <th>{list.name}</th>
                <th>{list.email}</th>
                <th>{list.phone}</th>
                <th>{list.company}</th>
                <th>{list.country}</th>
               
              </tr>
            );
        })
    }
     
     
      </tbody>
    </Table>
    
      </Card.Body>
      </Card>
     
        );
    }
}

export default withRouter(Data);
