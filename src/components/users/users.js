import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Card,Button,ListGroup,ListGroupItem} from 'react-bootstrap';
import Axios from 'axios';

class User extends Component{
    state={
        loadedData:false,
    }

    componentDidMount(){
        
        
        Axios.post("http://localhost:3001/getusers/" + this.props.match.params.id).then(res=>{
            this.setState({
                loadedData:res.data
            });
        });;
    }



    render(){
        console.log(!!this.state.loadedData[0]);

        var user;

if(this.state.loadedData[0]){
    
     user=(

        <React.Fragment>
        <Card className="text-center">
        <Card.Header>Welcome {this.state.loadedData[0].name} </Card.Header>
        <Card.Body>
                                        
        <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://image.flaticon.com/icons/svg/17/17004.svg" height={200} />
<Card.Body>
<Card.Text><h3> <b>{this.state.loadedData[0].name}</b> </h3></Card.Text>
<Card.Text>
    Be Pleasure to Joining the largest Bpo management system in our branch {this.state.loadedData[0].country}
</Card.Text>
</Card.Body>
<ListGroup className="list-group-flush">
<ListGroupItem>Email : {this.state.loadedData[0].email}</ListGroupItem>
<ListGroupItem>Company : {this.state.loadedData[0].company}</ListGroupItem>
<ListGroupItem>Phone Number:{this.state.loadedData[0].phone}</ListGroupItem>
</ListGroup>
<Card.Body>
<Card.Link href="#">Card Link</Card.Link>
<Card.Link href="#">Another Link</Card.Link>
</Card.Body>
</Card>

        </Card.Body>
        
      </Card>
     </React.Fragment>
    );


}    


else{
    user=(<p>error</p>)
}


        return(
            <React.Fragment>
                {user}
            </React.Fragment>
        );
    }
}

export default withRouter(User);