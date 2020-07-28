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

class EmployerPersonalInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            firstName: '',
            middleName:'',
            lastName:'',
            gender: '',
            jobRoles: '',
            mobileNumber:'',
            companyName:'',
            companyNumber:'',
            companyWebsite:'',
            country:'',
            industryOfCompany:'',
            companySize: ''
		};

		// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.get('/routes/api/employers/getByID/'+localStorage.getItem('employerId'))
			.then((response) => {
				this.setState({
                    firstName: response.data.data.firstName,
                    middleName: response.data.data.middleName,
					lastName: response.data.data.lastName,
                    jobRoles: response.data.data.jobRoles,
                    mobileNumber: response.data.data.mobileNumber,
                    country: response.data.data.country,
                    companyName: response.data.data.companyName,
                    companyNumber: response.data.data.companyNumber,
					companyWebsite: response.data.data.companyWebsite,
                    industryOfCompany: response.data.data.industryOfCompany,
					companySize: response.data.data.companySize
				});
            }
           );
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
                        Employer's info
                        </h5>
                        <br/>
                        
                        <MDBInputGroup
                        style={{ paddingLeft: '10px', justifyItems: 'center' }}
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
                                style={{color:"blue"}}
                                required 
                                 noTag 
                                 type="text"
                                 name="middleName"
                                 value={this.state.middleName}
                                 disabled
                                >
                                </MDBInput>
                                <MDBInput
                                style={{color:"blue"}}
                                required 
                                 noTag 
                                 disabled
                                 type="text"
                                 name="lastName"
                                 value={this.state.lastName}
                                >
                                </MDBInput>
                            </>
                            }
                        />

                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"800px"}}>
						    <MDBCol>
                            <div className="form-group">
                            <MDBInput
                                style={{color:"blue"}}
                                label="Mobile number"
                                 type="text"
                                 name="mobileNumber"
                                 value={this.state.mobileNumber}
                                 disabled
                            />
                            </div>
                            </MDBCol>
						</MDBRow>    

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"800px"}}>
						    <MDBCol>
                            <MDBInput
                                style={{color:"blue"}}
                                label="Job roles"
                                 required 
                                 type="textarea"
                                 name="jobRoles"
                                 value={this.state.jobRoles}
                                 disabled
                            />
                            </MDBCol>
						</MDBRow>
                        <br/>
                        <h5 style={{fontWeight:"bold",color:"black",marginLeft:"10px"}}>
                        Company info
                        </h5>
                        
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"800px"}}>
						    <MDBCol>
                            <MDBInput
                                style={{color:"blue"}}
                                label="Company name"
                                 type="text"
                                 name="companyName"
                                 value={this.state.companyName}
                                 disabled
                            />
                            </MDBCol>
						</MDBRow> 

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"800px"}}>
						    <MDBCol>
                            <MDBInput
                                style={{color:"blue"}}
                                label="Company number"
                                 type="text"
                                 name="companyNumber"
                                 value={this.state.companyNumber}
                                 disabled
                            />
                            </MDBCol>
						</MDBRow> 

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="country">Country *</label>
									<select
                                        style={{color:"blue"}}
                                        disabled
										className="form-control"
										id="exampleFormControlSelect1"
										name="country"
										value={this.state.country}
									>
                                        <option>Afghanistan</option>
										<option>Albania</option>
                                        <option>Algeria</option>
										<option>Albania</option>
										<option>Angola</option>
										<option>Argentina</option>
										<option>Australia</option>
										<option>Austria</option>
										<option>Azerbaijan</option>
										<option>Bahamas</option>
										<option>Bahrain</option>
										<option>Bangladesh</option>
										<option>Barbados</option>
                                        <option>Belarus</option>
                                        <option>Belgium</option>
                                        <option>Benin</option>
                                        <option>Bhutan</option>
                                        <option>Bolivia</option>
                                        <option>Botswana</option>
                                        <option>Brazil</option>
                                        <option>Bulgaria</option>
                                        <option>Burkina Faso</option>
                                        <option>Burundi</option>
                                        <option>Cameeron</option>
                                        <option>Canada</option>
                                        <option>Cape Verde</option>
                                        <option>Central African Public</option>
                                        <option>Chad</option>
                                        <option>Chile</option>
                                        <option>China</option>
                                        <option>Colombia</option>
                                        <option>Congo</option>
                                        <option>Costa Rica</option>
                                        <option>Croatia</option>
                                        <option>Cuba</option>
                                        <option>Cyprus</option>
                                        <option>Czech Republic</option>
                                        <option>Denmark</option>
                                        <option>Djibouti</option>
                                        <option>Dominican Republic</option>
                                        <option>Ecuador</option>
                                        <option>Egypt</option>
                                        <option>Equatorial Guinea</option>
                                        <option>Eritrea</option>
                                        <option>Estonia</option>
                                        <option>Ethiopia</option>
                                        <option>Fiji</option>
                                        <option>Finland</option>
                                        <option>France</option>
                                        <option>Gabon</option>
                                        <option>Gambia</option>
                                        <option>Georgia</option>
                                        <option>Germany</option>
                                        <option>Ghana</option>
                                        <option>Greece</option>
                                        <option>Guatemala</option>
                                        <option>Guinea</option>
                                        <option>Guyana</option>
                                        <option>Haiti</option>
                                        <option>Honduras</option>
                                        <option>Hong Kong</option>
                                        <option>Hingary</option>
                                        <option>Iceland</option>
                                        <option>India</option>
                                        <option>Iran</option>
                                        <option>Iraq</option>
                                        <option>Ireland</option>
                                        <option>Italy</option>
                                        <option>Ivory Coast</option>
                                        <option>Jamaica</option>
                                        <option>Japan</option>
                                        <option>Jordon</option>
                                        <option>Kazakhstan</option>
                                        <option>Kenya</option>
                                        <option>Kuwait</option>
                                        <option>Kyrgyzstan</option>
                                        <option>Lativa</option>
                                        <option>Lebanon</option>
                                        <option>Lesotho</option>
                                        <option>Liberia</option>
                                        <option>Libya</option>
                                        <option>Lithuania</option>
                                        <option>Luxembourg</option>
                                        <option>Macau</option>
                                        <option>Macednoia</option>
                                        <option>Madagascar</option>
                                        <option>Malawi</option>
                                        <option>Malaysia</option>
                                        <option>Maldives</option>
                                        <option>Mali</option>
                                        <option>Mauritania</option>
                                        <option>Mauritius</option>
                                        <option>Mexico</option>
                                        <option>Moldova</option>
                                        <option>Mongolia</option>
                                        <option>Morocco</option>
                                        <option>Mozambique</option>
                                        <option>Myanmar</option>
                                        <option>Nypal</option>
                                        <option>Netherlands</option>
                                        <option>new Caledonia</option>
                                        <option>New Zealand</option>
                                        <option>Nicaragua</option>
                                        <option>Niger</option>
                                        <option>Nigeria</option>
                                        <option>North Korea</option>
                                        <option>Norway</option>
                                        <option>Oman</option>
                                        <option>Pakistan</option>
                                        <option>Palestine</option>
                                        <option>Panama</option>
                                        <option>Papua New Guinea</option>
                                        <option>Paraguay</option>
                                        <option>Peru</option>
                                        <option>Philippines</option>
                                        <option>Poland</option>
                                        <option>Portugal</option>
                                        <option>Puerto Rico</option>
                                        <option>Qatar</option>
                                        <option>Romania</option>
                                        <option>Russia</option>
                                        <option>Rwanda</option>
                                        <option>Saudi Arabia</option>
                                        <option>Senegal</option>
                                        <option>Serbia and Montenegro</option>
                                        <option>Sierra Leone</option>
                                        <option>Singapore</option>
                                        <option>Solvakia</option>
                                        <option>Solvenia</option>
                                        <option>Somalia</option>
                                        <option>South Africa</option>
                                        <option>South Korea</option>
                                        <option>Spain</option>
                                        <option>Sri Lanka</option>
                                        <option>Sudan</option>
                                        <option>Suriname</option>
                                        <option>Swaziland</option>
                                        <option>Sweden</option>
                                        <option>Switerland</option>
                                        <option>Syria</option>
                                        <option>Taiwan</option>
                                        <option>Tajikistan</option>
                                        <option>Tanzania</option>
                                        <option>Thailand</option>
                                        <option>Trinidad and Tobago</option>
                                        <option>Tunisia</option>
                                        <option>Turkey</option>
                                        <option>Turkmenistan</option>
                                        <option>Uganda</option>
                                        <option>Ukraine</option>
                                        <option>United Arab Emirates</option>
                                        <option>United Kingdom</option>
                                        <option>United States</option>
                                        <option>Urguay</option>
                                        <option>Uzbekistan</option>
                                        <option>Venezuela</option>
                                        <option>Vietnam</option>
                                        <option>Western Sahara</option>
                                        <option>Yemen</option>
                                        <option>Zimbabwe</option>  
									</select>

								</div>
							</MDBCol>
						</MDBRow>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"800px"}}>
						    <MDBCol>
                            <MDBInput
                                style={{color:"blue"}}
                                disabled
                                 label="Company industry"
                                 type="text"
                                 name="industryOfCompany"
                                 value={this.state.industryOfCompany}
                            />
                            </MDBCol>
						</MDBRow> 

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"800px"}}>
						    <MDBCol>
                            <MDBInput
                                style={{color:"blue"}}
                                label="Company size"
                                 type="text"
                                 name="companySize"
                                 value={this.state.companySize}
                                 disabled
                            />
                            </MDBCol>
						</MDBRow> 
                        
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"800px"}}>
						    <MDBCol>
                            <MDBInput
                                 label="Company website"
                                 type="text"
                                 name="companyWebsite"
                                 value={this.state.companyWebsite}
                                 disabled
                                 style={{color:"blue"}}
                                 />
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

export default EmployerPersonalInfo;
