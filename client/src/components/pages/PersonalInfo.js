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

class PersonalInfo extends React.Component {
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
			.get('/routes/api/jobSeekers/getByID/5e7d35d36626c516005f62a1')
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

validateForm() {
    // console.log(this.state.firstName.length)
    // console.log(this.state.middleName.length)
    // console.log(this.state.lastName.length)
    // console.log(this.state.mobileNumber.length)


    return(
        this.state.firstName.length >= 3 &&
        this.state.firstName.length <= 50 &&
        this.state.middleName.length<=50 &&
        this.state.lastName.length >= 3 &&
        this.state.lastName.length <= 50 &&
        this.state.mobileNumber.length >= 1 &&
        this.state.mobileNumber.length <= 13 &&
        this.state.gender !==undefined &&
        this.state.gender !=='Please choose an option' &&
        this.state.birthdate!==undefined &&
        this.state.nationality!==undefined &&
        this.state.maritalStatus!==undefined &&
        this.state.militaryStatus!==undefined &&
        this.state.maritalStatus!=='Please choose a status' &&
        this.state.militaryStatus!=='Please choose a status' &&
        this.state.country!==undefined &&
        this.state.country!=='Please choose the country' &&
        this.state.city!==undefined &&
        this.state.city!=='Please choose the city' &&
        this.state.address!==undefined &&
        this.state.drivingLicense!==undefined &&
        this.state.mobileNumber!==undefined
    )
}


    changeHandler2 = (event) => {
        this.setState({changed:true})
		this.setState({ [event.target.name]: event.target.value});
		axios.get('/routes/api/countries/getByCountryName/' + event.target.value).then((res) => {
			this.setState({ cities: res.data.data });
        });
    };

    temp(){
        
            axios.get('/routes/api/countries/getByCountryName/' + this.state.country).then((res) => {
                this.setState({ cities: res.data.data });
            }); 
        
    }

   
    
    // 
    
	handleClick(error) {
		error.preventDefault();
		const obj = {
            firstName: this.state.firstName,
            middleName: this.state.middleName,
			lastName: this.state.lastName,
            gender: this.state.gender,
            birthdate: this.state.birthdate,
            nationality: this.state.nationality,
			maritalStatus: this.state.maritalStatus,
			militaryStatus: this.state.militaryStatus,
			drivingLicense: this.state.drivingLicense,
			country: this.state.country,
			city: this.state.city,
			address: this.state.address,
			postalCode: this.state.postalCode,
			mobileNumber: this.state.mobileNumber
		};
		var apiBaseUrl = '/routes/api/jobSeekers/updateAJobSeeker/5e7d35d36626c516005f62a1';
		var payload = {
			firstName: this.state.firstName,
            middleName: this.state.middleName,
			lastName: this.state.lastName,
            gender: this.state.gender,
            birthdate: this.state.birthdate,
            nationality: this.state.nationality,
			maritalStatus: this.state.maritalStatus,
			militaryStatus: this.state.militaryStatus,
			drivingLicense: this.state.drivingLicense,
			country: this.state.country,
			city: this.state.city,
			address: this.state.address,
			postalCode: this.state.postalCode,
			mobileNumber: this.state.mobileNumber
		};

		// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.put(apiBaseUrl, payload)
			.then(function(response) {
                swal({
                    title: "Your profile has been updated successfully",
                    icon: "success"
                    })
                    setTimeout("document.location.href = '/personalinfo';",1500);
                })
			.catch((error) => {
				swal(error.response.data.errmsg || error.response.data);
				console.log(error);
			});
	}

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
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
                        Your personal info
                        </h5>
                        <br/>
                        
                        <MDBInputGroup
                        style={{ paddingLeft: '10px', justifyItems: 'center' }}
                            prepend="First, middle and last name"
                            inputs={
                            <>
                                <MDBInput
                                required 
                                 noTag 
                                 type="text"
                                 name="firstName"
                                 value={this.state.firstName}
                                 className={
										this.state.firstName.length >= 3 && this.state.firstName.length <= 50 ? (
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
                                 noTag 
                                 type="text"
                                 name="middleName"
                                 value={this.state.middleName}
                                 className={
                                    this.state.middleName.length <= 50 ? (
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
                                 noTag 
                                 type="text"
                                 name="lastName"
                                 value={this.state.lastName}
                                 className={
										this.state.lastName.length >= 3 && this.state.lastName.length <= 50 ? (
											'is-valid'
										) : (
											'is-invalid'
										)
                                    } 
                                onChange={this.changeHandler}
                                >
                                </MDBInput>
                            </>
                            }
                        />
                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="gender">Gender</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
									<select
                                        // required
										className="form-control"
										id="exampleFormControlSelect1"
										name="gender"
										onChange={this.changeHandler}
										value={this.state.gender}
									>
                                        <option>Please choose an option</option>
										<option>Male</option>
										<option>Female</option>
									</select>
								</div>
							</MDBCol>
						</MDBRow>
                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' }}>
							<MDBCol>
                            <div className="form-group">
                                Birthdate
                            <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
							<MDBInput
                            // label="Birthdate"
							type="date"
							class="material-icons prefix"
							id="materialFormRegisterNameEx"
							name="birthdate"
							onChange={this.changeHandler}
							value={this.state.birthdate}
							style={{width:"310px"}}
							required
						/>
                        </div>
							</MDBCol>
						</MDBRow>
                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="nationality">Nationality</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
									<select
										className="form-control"
										id="exampleFormControlSelect1"
										name="nationality"
										onChange={this.changeHandler}
										value={this.state.nationality}
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
                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="country">Country</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
									<select
										className="form-control"
										id="exampleFormControlSelect1"
										name="country"
										onChange={this.changeHandler2}
										value={this.state.country}
									>
										<option>Please choose the country</option>
											{this.state.countries.map((count) => (
												 <option value={count.name}>{count.name}</option>
											))};
									</select>
								</div>
							</MDBCol>
						</MDBRow>
                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="city">City</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
									<select
										className="form-control"
										id="exampleFormControlSelect1"
										name="city"
										onChange={this.changeHandler}
										value={this.state.city}
									>
                                        
                                        {this.state.changed===false?this.temp():null}
                                        <option>Please choose the city</option>
                                        {this.state.cities.map((city) => <option value={city}>{city}</option>)};
										
									</select>
								</div>
							</MDBCol>
						</MDBRow>
                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"800px"}}>
						    <MDBCol>
                            <div className="form-group">
                                Address
                            <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                            <MDBInput
                                //  label="Address"
                                 required 
                                 type="textarea"
                                 name="address"
                                 value={this.state.address}
                                 className={
										this.state.address.length > 0 ? (
											'is-valid'
										) : (
											'is-invalid'
										)
                                    } 
                                onChange={this.changeHandler}
                            />
                            </div>
                            </MDBCol>
						</MDBRow>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"800px"}}>
						    <MDBCol>
                            <MDBInput
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
                            <div className="form-group">
                                Mobile Number
                            <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                            <MDBInput
                                //  label="Mobile Number"
                                 type="text"
                                 name="mobileNumber"
                                 value={this.state.mobileNumber}
                                 className={
                                    this.state.mobileNumber.length >= 11 && this.state.mobileNumber.length <= 13 ? (
                                        'is-valid'
                                    ) : (
                                        'is-invalid'
                                    )
                                } 
                                onChange={this.changeHandler}
                            />
                            </div>
                            </MDBCol>
						</MDBRow>    

                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
                            <MDBCol>
                                <div className="form-group">
                                    <label htmlFor="maritalStatus">Marital Status</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                                    <select
                                        className="form-control"
                                        id="exampleFormControlSelect1"
                                        name="maritalStatus"
                                        onChange={this.changeHandler}
                                        value={this.state.maritalStatus}
                                    >
                                        <option>Please choose a status</option>
                                        <option>Prefer not to say</option>
                                        <option>Single</option>
                                        <option>Married</option>
                                        <option>Divorced</option>
                                    </select>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
                            <MDBCol>
                                <div className="form-group">
                                    <label htmlFor="militaryStatus">Military Status</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                                    <select
                                        className="form-control"
                                        id="exampleFormControlSelect1"
                                        name="militaryStatus"
                                        onChange={this.changeHandler}
                                        value={this.state.militaryStatus}
                                    >
                                        <option>Please choose a status</option>
                                        <option>Not Applicable</option>
                                        <option>Exempted</option>
                                        <option>Completed</option>
                                        <option>Postponed</option>
                                    </select>
                                </div>
                            </MDBCol>
                        </MDBRow>

                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
                            <MDBCol>
                                <div className="form-group">
                                    <label htmlFor="drivingLicense">Driving License</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                                    <select
                                        className="form-control"
                                        id="exampleFormControlSelect1"
                                        name="drivingLicense"
                                        onChange={this.changeHandler}
                                        value={this.state.drivingLicense}
                                    >
                                        <option>Please choose a status</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </div>
                            </MDBCol>
                        </MDBRow>


						<div >
							<Button
								className="btn-block btn-rounded z-depth-1a"
								label="Update"
								variant="omar"
								style={{marginTop:"50px",marginLeft: "550px",marginRight:"2500px",width:"200px", height:"60px" ,backgroundColor:"#a3dbf1"}}
								disabled={!this.validateForm()}
								onClick={(event) => 
									this.handleClick(event)
								}
							>
							Update
							</Button>
						</div>
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

export default PersonalInfo;
