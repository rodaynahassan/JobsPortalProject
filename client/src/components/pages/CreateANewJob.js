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
import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';

var mongoose = require('mongoose');

class CreateANewJob extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            companyName: '',
            category:'',
            jobType:'',
            careerLevel: '',
            experienceNeeded: '',
            jobTitle: '',
            salary:'',
            languages:[],
            drivingLicense:'',
            country:'',
            city:'',
            vacancies: '',
            jobDescription:'',
            jobRequirements:'',
            startDate: new Date(),
            duration:'',
            applicationDeadline:new Date()
		};            
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
        this.state.category!=='Please choose a category' &&
        this.state.jobType !=='Please choose a job type' &&
        this.state.careerLevel!=='Please choose a career level' &&
        this.state.salary.length >= 3 &&
        this.state.languages.length >0 &&
        this.state.vacancies.length >= 1 &&
        this.state.jobDescription >=50 &&
        this.state.jobRequirements >=50 &&
        this.state.country!==undefined &&
        this.state.country!=='Please choose the country' &&
        this.state.city!==undefined &&
        this.state.city!=='Please choose the city' 
    )
}

    changeHandler2 = (event) => {
		this.setState({ [event.target.name]: event.target.value});
		axios.get('/routes/api/countries/getByCountryName/' + event.target.value).then((res) => {
			this.setState({ cities: res.data.data });
        });
    };
    
	handleClick(error) {
		error.preventDefault();
		var apiBaseUrl = '/routes/api/jobs/CreateANewJob/5ed02ba21a7ba21e60d0d064';
		var payload = {
			category: this.state.category,
            jobType: this.state.jobType,
			experienceNeeded: this.state.experienceNeeded,
            careerLevel: this.state.careerLevel,
            jobTitle: this.state.jobTitle,
            salary: this.state.salary,
			languages: this.state.languages,
			vacancies: this.state.vacancies,
            jobDescription: this.state.jobDescription,
            jobRequirements: this.state.jobRequirements,
            country: this.state.country,
			city: this.state.city,
			startDate: this.state.startDate,
			duration: this.state.duration,
            applicationDeadline: this.state.applicationDeadline
        };

		// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.post(apiBaseUrl, payload)
			.then(function(response) {
                swal({
                    title: "You have created the job successfully",
                    text: "You can edit and track your jobs in 'Your jobs' page.",
                    icon: "success"
                    })
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
					<span style={{color:"white", fontStyle:"italic",fontSize:"1.5em", fontFamily:"Arial",fontWeight:"bold",backgroundColor:"#333FFF",marginLeft:"240px",border: "2px solid black"}}>
                        &nbsp;Please fill in the job details&nbsp;
                        </span>
                        <br/>
                        
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
                                <MDBInput
                                        required 
                                        label= "Job title *"
                                        type="text"
                                        name="jobTitle"
                                        value={this.state.jobTitle}
                                        className={
                                                this.state.jobTitle.length >= 3 ? (
                                                    'is-valid'
                                                ) : (
                                                    'is-invalid'
                                                )
                                            } 
                                        onChange={this.changeHandler}
                                        >
                                </MDBInput>
                            </MDBCol>
						</MDBRow>
<br/>
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="category">Category</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
									<select
                                        // required
										className="form-control"
										id="exampleFormControlSelect1"
										name="category"
										onChange={this.changeHandler}
										value={this.state.category}
									>
                                        <option>Please choose a category</option>
										<option>IT/Software development</option>
										<option>Pharmacy</option>
                                        <option>Sales</option>
                                        <option>Engineering-Civil/Architecture</option>
										<option>Engineering-Mechatronics</option>
										<option>Customer service</option>
										<option>Marketing/PR</option>
										<option>Accounting/finance</option>
										<option>Administration</option>
										<option>Media/Journalism</option>
										<option>HR</option>
										<option>Sports</option>
										<option>Fashion</option>
										<option>Project Management</option>
										<option>Engineering-Telecom</option>
										<option>Tourism/Travel</option>
										<option>Medical</option>
										<option>Legal</option>
										<option>Business development</option>
									</select>
								</div>
							</MDBCol>
						</MDBRow>
                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="jobType">Job Type</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
									<select
                                        required
										className="form-control"
										id="exampleFormControlSelect1"
										name="jobType"
										onChange={this.changeHandler}
										value={this.state.jobType}
									>
                                        <option>Please choose a job type</option>
										<option>Part time</option>
										<option>Full time</option>
                                        <option>Internship</option>
                                        <option>Work from home</option>
										<option>Freelancing</option>
									</select>
								</div>
							</MDBCol>
						</MDBRow>
<br/>
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="careerLevel">Career level</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
									<select
                                        required
										className="form-control"
										id="exampleFormControlSelect1"
										name="careerLevel"
										onChange={this.changeHandler}
										value={this.state.careerLevel}
									>
                                        <option>Please choose a career level</option>
										<option>Student</option>
										<option>Fresh graduate</option>
                                        <option>Experienced</option>
                                        <option>Executive/Supervisor</option>
										<option>Senior Manager</option>
									</select>
								</div>
							</MDBCol>
						</MDBRow>
                        <br/>

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"190px"}}>
							<MDBCol>
								{/* <div className="form-group">
									<label htmlFor="languages">Languages</label>
                                    <span style={{color:"black", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
									<select
										className="form-control"
										id="exampleFormControlSelect1"
										name="languages"
										onChange={this.changeHandler}
										value={this.state.nationality}
									>
                                       
									</select>

								</div> */}

                                <Button
								className="btn-block btn-rounded z-depth-1a"
								// label="Update"
								variant="omar"
								style={{width:"40px", height:"35px" ,backgroundColor:"#5788E9",borderRadius:"60%"}}
								// disabled={!this.validateForm()}
								onClick={(event) => 
									this.handleClick(event)
								}
							>
                                <i style={{fontSize:"15px"}}class="fa fa-plus" aria-hidden="true"></i>                             
							</Button>
                            
							 </MDBCol>
                             <a href="forgotPassword" style={{color:"black",fontSize:"15px",marginTop:"5px"}}>
                                   Add a language
                                  </a>  
						</MDBRow>
                        <br/>

                      {/*  <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
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
						</div> */}
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

export default CreateANewJob;
