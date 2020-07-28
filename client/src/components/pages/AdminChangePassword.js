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

class AdminChangePassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            oldPassword:'',
			newPassword: '',
            confirmPassword: '',
            
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
	var apiBaseUrl = '/routes/api/admins/changePassword/5e7d35d36626c516005f62a1';
	var payload = {
		oldPassword: this.state.oldPassword,
		newPassword: this.state.newPassword,
		confirmPassword: this.state.confirmPassword
	};

	axios
		.post(apiBaseUrl, payload)
		.then(res => {
            swal(res.data.msg)
            setTimeout("document.location.href = '/adminchangepassword';",1500);

		  })
		  .catch((err) => swal(err.response.data.errmsg || err.response.data));
}

changeHandler = (event) => {
	this.setState({ [event.target.name]: event.target.value });
}
validatePassword() {
	return (
		this.state.newPassword.length >= 8 &&
		this.state.newPassword.length <= 20 &&
		this.state.newPassword === this.state.confirmPassword
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
                        Please enter your old and new passwords.
                        </h4>
                                <MDBInput
                               onCopy={this.handlerCopy}
                               onPaste={this.handlerPaste}
                               onCut={this.handlerCut}
                                required 
                                 label="Old Password" 
                                 type="text"
                                 name="oldPassword"
                                 value={this.state.oldPassword}
                                onChange={this.changeHandler}
                                >
                                </MDBInput>

								<MDBInput
                                required 
                                onCopy={this.handlerCopy}
                                onPaste={this.handlerPaste}
                                onCut={this.handlerCut}
                                 label="New Password" 
                                 type="text"
                                 name="newPassword"
                                 value={this.state.newPassword}
                                 className={
										this.state.newPassword.length >= 8 && this.state.newPassword.length <= 20 ? (
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
                                 label="Confirm Password" 
                                 type="text"
                                 name="confirmPassword"
                                 value={this.state.confirmPassword}
                                 className={
										this.state.confirmPassword.length >= 8 && this.state.confirmPassword.length <= 20 ? (
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
								disabled={!this.validatePassword()}
								onClick={(event) => 
									this.handleClick(event)
								}
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

export default AdminChangePassword;
