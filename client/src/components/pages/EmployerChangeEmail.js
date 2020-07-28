import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBSelect,MDBInputGroup } from 'mdbreact';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Button ,Card} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
var mongoose = require('mongoose');

class EmployerChangeEmail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            oldEmail:'',
			newEmail: '',
            confirmEmail: '',
            
		};
		this.handlerCopy = this.handlerCopy.bind(this);
        this.handlerCut = this.handlerCut.bind(this);
        this.handlerPaste = this.handlerPaste.bind(this);
}

handlerCopy(e) {
    console.log(e.target.innerHTML);
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();

    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));

    swal("Sorry, you can't copy it.")
  }

  handlerPaste(e) {
    console.log(e.target.innerHTML);
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();

    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));

    swal("Sorry, you can't paste.")
  }

  handlerCut(e) {
    console.log(e.target.innerHTML);
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();

    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));

    swal("Sorry, you can't cut it.")
  }

handleClick(event) {

	// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
	var apiBaseUrl = '/routes/api/employers/changeEmail/5ed02ba21a7ba21e60d0d064';
	var payload = {
		oldEmail: this.state.oldEmail,
		newEmail: this.state.newEmail,
		confirmEmail: this.state.confirmEmail
	};

	axios
		.post(apiBaseUrl, payload)
		.then(res => {
			swal(res.data.msg)
			setTimeout("document.location.href = '/employerchangeemail';",1500);

		  })
		  .catch((err) => swal(err.response.data.errmsg || err.response.data));
}

changeHandler = (event) => {
	this.setState({ [event.target.name]: event.target.value });
}
validateEmail() {
	return (
		this.state.newEmail.length >= 10 &&
		this.state.newEmail.length <= 30 &&
		this.state.newEmail === this.state.confirmEmail
	);
}

	render() {

		return (
            <div>
            <br/>
            

            <Card 
            style={{
                width:"55%",
                height:"70%",
                paddingLeft:"0.5px",
                backgroundColor:'rgba(0,0,0,0.005)',
                marginLeft:"490px",
                top:"70px",
                paddingTop:"0.1px"
                }}
            >
              <Card.Body style={{backgroundColor:"dark"}}>
                <div>
				<MuiThemeProvider style={{marginLeft:"100px"}}>
					<div>
					<h4 style={{fontWeight:"bold",color:"black",marginLeft:"10px"}}>
                        Please enter your old and new emails.
                        </h4>
                        <		MDBInput
								required 
								 onCopy={this.handlerCopy}
								 onPaste={this.handlerPaste}
								 onCut={this.handlerCut}
                                 label="Old Email" 
                                 type="text"
                                 name="oldEmail"
                                 value={this.state.oldEmail}
                                onChange={this.changeHandler}
                                >
                                </MDBInput>

								<MDBInput
								required
								 onCopy={this.handlerCopy}
								 onPaste={this.handlerPaste}
								 onCut={this.handlerCut} 
                                 label="New Email" 
                                 type="text"
                                 name="newEmail"
                                 value={this.state.newEmail}
                                 className={
										this.state.newEmail.length >= 10 && this.state.newEmail.length <= 30 ? (
											'is-valid'
										) : (
											'is-invalid'
										)
                                    } 
                                onChange={this.changeHandler}
                                >
                                </MDBInput>

								<MDBInput
								required 
								 onCopy={this.handlerCopy}
								 onPaste={this.handlerPaste}
								 onCut={this.handlerCut}
                                 label="Confirm Email" 
                                 type="text"
                                 name="confirmEmail"
                                 value={this.state.confirmEmail}
                                 className={
										this.state.confirmEmail.length >= 10 && this.state.confirmEmail.length <= 30 ? (
											'is-valid'
										) : (
											'is-invalid'
										)
                                    } 
                                onChange={this.changeHandler}
                                >
                                </MDBInput>
							<Button
								className="btn-block btn-rounded z-depth-1a"
								label="Submit"
								variant="omar"
								style={{marginTop:"50px",marginLeft: "50px",marginRight:"2500px",width:"100px", height:"40px" ,backgroundColor:"#a3dbf1"}}
								disabled={!this.validateEmail()}
								onClick={(event) => this.handleClick(event)}
							>
							Submit
							</Button>

                          
					</div>
				</MuiThemeProvider>
                </div>
          </Card.Body>
          </Card>
			</div>
		);
	}
}
const style = {
	margin: 15
};

export default EmployerChangeEmail;
