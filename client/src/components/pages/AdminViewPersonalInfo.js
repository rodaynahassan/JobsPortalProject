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

class AdminViewPersonalInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            firstName: '',
            middleName:'',
            lastName:'',
            gender: '',
            birthdate: new Date(),
            nationality: '',
            maritalStatus:'',
            militaryStatus:'',
            drivingLicense:'',
            country:'',
            city:'',
            address: '',
            postalCode:'',
            mobileNumber:'',
            nationalities: [],
            countries:[],
            cities:[],
            changed:false
		};

		// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.get('/routes/api/jobSeekers/getByID/'+localStorage.getItem('userId'))
			.then((response) => {
                console.log(response.data.data.gender)
				this.setState({
                    firstName: response.data.data.firstName,
                    middleName: response.data.data.middleName,
					lastName: response.data.data.lastName,
                    gender: response.data.data.gender,
                    birthdate: response.data.data.birthdate.substring(0, 10),
					nationality: response.data.data.nationality,
					maritalStatus: response.data.data.maritalStatus,
					militaryStatus: response.data.data.militaryStatus,
                    drivingLicense: response.data.data.drivingLicense,
                    country: response.data.data.country,
					city: response.data.data.city,
                    address: response.data.data.address,
                    postalCode: response.data.data.postalCode,
					mobileNumber: response.data.data.mobileNumber
				});
            }
           );
            
            axios.get('/routes/api/countries')
            .then((res) => {
                this.setState({ countries: res.data.data });
            });  
}

	render() {

		return (

            <Card 
            style={{
                width:"55%",
                height:"100%",
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
					<h5 style={{fontWeight:"bold",color:"black",marginLeft:"10px"}}>
                       Personal info
                        </h5>
                        <br/>
                        
                        <MDBInputGroup
                        style={{color:"blue",  paddingLeft: '10px', justifyItems: 'center' }}
                            prepend="First, middle and last name"
                            inputs={
                            <>
                                <MDBInput
                                style={{color:"blue"}}
                                required 
                                disabled
                                 noTag 
                                 type="text"
                                 name="firstName"
                                 value={this.state.firstName}
                                >
								</MDBInput>
                                <MDBInput
                                required 
                                disabled
                                style={{color:"blue"}}
                                 noTag 
                                 type="text"
                                 name="middleName"
                                 value={this.state.middleName}
                                >
                                </MDBInput>
                                <MDBInput
                                required 
                                style={{color:"blue"}}
                                disabled
                                 noTag 
                                 type="text"
                                 name="lastName"
                                 value={this.state.lastName}
                                 >
                                </MDBInput>
                            </>
                            }
                        />
                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
                                <MDBInput
                                required 
                                style={{color:"blue"}}
                                disabled
                                 label="Gender" 
                                 type="text"
                                 name="lastName"
                                 value={this.state.gender}
                                 >
                                </MDBInput>

							</MDBCol>
						</MDBRow>
                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
                            <MDBInput
                                required 
                                style={{color:"blue"}}
                                disabled
                                 label="Birthdate" 
                                 type="text"
                                 name="lastName"
                                 value={this.state.birthdate}
                                 >
                                </MDBInput>
							</MDBCol>
						</MDBRow>
                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
                            <MDBInput
                                required 
                                style={{color:"blue"}}
                                disabled
                                 label="Nationality" 
                                 type="text"
                                 name="lastName"
                                 value={this.state.nationality}
                                 >
                                </MDBInput>
							</MDBCol>
						</MDBRow>
                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
                            <MDBInput
                                required 
                                style={{color:"blue"}}
                                disabled
                                 label="Country" 
                                 type="text"
                                 name="lastName"
                                 value={this.state.country}
                                 >
                                </MDBInput>
							</MDBCol>
						</MDBRow>
                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
                            <MDBInput
                                required 
                                style={{color:"blue"}}
                                disabled
                                 label="City" 
                                 type="text"
                                 name="lastName"
                                 value={this.state.city}
                                 >
                                </MDBInput>
							</MDBCol>
						</MDBRow>
                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"800px"}}>
						    <MDBCol>
                            <MDBInput
                                required 
                                style={{color:"blue"}}
                                disabled
                                 label="Address" 
                                 type="text"
                                 name="lastName"
                                 value={this.state.address}
                                 >
                                </MDBInput>
							</MDBCol>
						</MDBRow>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"800px"}}>
						    <MDBCol>
                            <MDBInput
                                 disabled
                                 style={{color:"blue"}}
                                 label="Postal Code"
                                 type="text"
                                 name="postalCode"
                                 value={this.state.postalCode}
                                onChange={this.changeHandler}
                            />
                            </MDBCol>
						</MDBRow> 

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"800px"}}>
						    <MDBCol>
                            <MDBInput
                                required 
                                style={{color:"blue"}}
                                disabled
                                 label="Mobile Number" 
                                 type="text"
                                 name="lastName"
                                 value={this.state.mobileNumber}
                                 >
                                </MDBInput>
							</MDBCol>
						</MDBRow>    

                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
                            <MDBCol>
                            <MDBInput
                                required 
                                style={{color:"blue"}}
                                disabled
                                 label="Marital Status" 
                                 type="text"
                                 name="lastName"
                                 value={this.state.maritalStatus}
                                 >
                                </MDBInput>
							</MDBCol>
                        </MDBRow>

                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
                            <MDBCol>
                            <MDBInput
                                required 
                                style={{color:"blue"}}
                                disabled
                                 label="militaryStatus" 
                                 type="text"
                                 name="lastName"
                                 value={this.state.militaryStatus}
                                 >
                                </MDBInput>
							</MDBCol>
                        </MDBRow>

                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
                            <MDBCol>
                            <MDBInput
                                required 
                                style={{color:"blue"}}
                                disabled
                                 label="drivingLicense" 
                                 type="text"
                                 name="lastName"
                                 value={this.state.drivingLicense}
                                 >
                                </MDBInput>
                            </MDBCol>
                        </MDBRow>
					</div>
				</MuiThemeProvider>
                </div>
          </Card.Body>
          </Card>
			
		);
	}
}
const style = {
	margin: 15
};

export default AdminViewPersonalInfo;
