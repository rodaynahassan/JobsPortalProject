import 'bootstrap/dist/css/bootstrap.css';
import React , { useState }from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Multiselect from 'react-bootstrap-multiselect';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBSelect,MDBInputGroup ,MDBSelectInput, MDBSelectOptions, MDBSelectOption} from 'mdbreact';
// import { MDBSelectInput, MDBSelectOptions, MDBSelectOption} from "mdbreact";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Button ,Card,ButtonGroup} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import IconButton from '@material-ui/core/IconButton';
import { blue300 } from 'material-ui/styles/colors';
// import DeleteIcon from '@material-ui/icons/Delete';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import MultiSelect from "react-multi-select-component";

var mongoose = require('mongoose');


class CreateANewJob extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            companyName: '',
            category:'Please choose a category',
            jobType:'Please choose a job type',
            careerLevel: 'Please choose a career level',
            jobTitle: '',
            languages:'',
            experienceNeeded: 'Not needed',
            salary:'',
            drivingLicense:'',
            country:'Please choose the country',
            city:'Please choose the city',
            vacancies: '',
            jobDescription:'',
            jobRequirements:'Not needed',
            startDate: new Date(),
            duration:'Not needed',
            applicationDeadline:new Date(),
            modalShowLangAdd:false,
            flagExp:true,
            flagReq:true,
            flagStart:true,
            flagDur:true,
            flagDead:true,
            lastSelectedItem:'',
            selectedItems:[],
            countries:[],
            cities:[],
            selectedOptionExp:'option2',
            selectedOptionReq:'option2',
            selectedOptionStart:'option2',
            selectedOptionDur:'option2',
            selectedOptionDead:'option2',

        }; 
                   
            axios.get('/routes/api/countries')
            .then((res) => {
                this.setState({ countries: res.data.data });
            });  
}

changeHandler1 = event => {
    if(event.target.name==='selectedOptionExp' && event.target.value==='option1')
    {
      this.setState({ flagExp: false ,experienceNeeded:''});
    }

    if(event.target.name==='selectedOptionExp' && event.target.value==='option2')
    {
      this.setState({ flagExp: true ,experienceNeeded:"Not needed" });
    }

    if(event.target.name==='selectedOptionReq' && event.target.value==='option1')
    {
      this.setState({ flagReq: false ,jobRequirements:''});
    }

    if(event.target.name==='selectedOptionReq' && event.target.value==='option2')
    {
      this.setState({ flagReq: true ,jobRequirements:"Not needed"});
    }

    if(event.target.name==='selectedOptionStart' && event.target.value==='option1')
    {
      this.setState({ flagStart: false ,startDate:'' });
    }

    if(event.target.name==='selectedOptionStart' && event.target.value==='option2')
    {
      this.setState({ flagStart: true , startDate:"Not needed"});
    }

    if(event.target.name==='selectedOptionDur' && event.target.value==='option1')
    {
      this.setState({ flagDur: false ,duration:''});
    }

    if(event.target.name==='selectedOptionDur' && event.target.value==='option2')
    {
      this.setState({ flagDur: true ,duration:"Not needed"});
    }

    if(event.target.name==='selectedOptionDead' && event.target.value==='option1')
    {
      this.setState({ flagDead: false ,applicationDeadline:''});
    }

    if(event.target.name==='selectedOptionDead' && event.target.value==='option2')
    {
      this.setState({ flagDead: true ,applicationDeadline:"Not needed"});
    }
    this.setState({ [event.target.name]: event.target.value });
};


validateForm() {
    return(
        this.state.category!=='Please choose a category' &&
        this.state.jobType !=='Please choose a job type' &&
        this.state.careerLevel!=='Please choose a career level' &&
        this.state.salary.length >= 2 &&
        this.state.languages.length >0 &&
        this.state.vacancies.length >= 1 &&
        this.state.jobDescription.length >=50 &&
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
        var payload={}
        if(this.state.flagStart===true && this.state.flagDead===false)
        {
            payload = {
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
                duration: this.state.duration,
                startDate:"Not needed",
                applicationDeadline: this.state.applicationDeadline
            };
    
        }
        if(this.state.flagDead===true && this.state.flagStart===false)
        {
            payload = {
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
                startDate: this.state.startDate,
                country: this.state.country,
                city: this.state.city,
                duration: this.state.duration,
                applicationDeadline: "Not needed"
            };
    
        }

        if(this.state.flagDead===true && this.state.flagStart===true)
        {
            payload = {
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
                duration: this.state.duration,
                startDate:"Not needed",
                applicationDeadline: "Not needed"
            };
    
        }

        if(this.state.flagDead===false && this.state.flagStart===false)
        {
            payload = {
                category: this.state.category,
                jobType: this.state.jobType,
                experienceNeeded: this.state.experienceNeeded,
                careerLevel: this.state.careerLevel,
                jobTitle: this.state.jobTitle,
                salary: this.state.salary,
                startDate: this.state.startDate,
                applicationDeadline: this.state.applicationDeadline,
                languages: this.state.languages,
                vacancies: this.state.vacancies,
                jobDescription: this.state.jobDescription,
                jobRequirements: this.state.jobRequirements,
                country: this.state.country,
                city: this.state.city,
                duration: this.state.duration,
            };
    
        }


		// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.post(apiBaseUrl, payload)
			.then(function(response) {
                swal({
                    title: "You have created the job successfully",
                    text: "But first, let's proceed with creating an application for your job.",
                    icon: "success",
                    buttons: {
                        // catch: {
                        //     text: "Show applications",
                        //     value: "application",
                        //   },
                          defeat: {
                            text: "Let's go!",
                            value: "application",
                          },  
                    }
                    })

                    .then((value) => {
                        switch (value) {
                    
                          case "application":
                            document.location.href = '/choosetype';
                            break;
                          default:
                            document.location.href = '/choosetype';
                        }
                      });
                      console.log(response.data.data._id)
                      localStorage.setItem('jobId',response.data.data._id)
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
                        
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
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
{/* <br/> */}
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="category">Category</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
									<select
                                        required
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
                        {/* <br/> */}

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

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="careerLevel">Career Level</label>
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
                    {/* <br/> */}
                    <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
							<MDBCol>
                                <MDBInput
                                        required 
                                        label= "Languages *"
                                        type="text"
                                        name="languages"
                                        value={this.state.languages}
                                        className={
                                                this.state.languages.length >= 3 ? (
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
                        {/* <br/> */}

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
							<MDBCol>
                                <MDBInput
                                        required 
                                        label= "Job Description *"
                                        type="text"
                                        name="jobDescription"
                                        value={this.state.jobDescription}
                                        className={
                                                this.state.jobDescription.length >= 50 ? (
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
                        {/* <br/> */}

                        {/* <br/> */}

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="country">Country</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
									<select
                                        required
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
                        {/* <br/> */}

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="city">City</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
									<select
                                        required
										className="form-control"
										id="exampleFormControlSelect1"
										name="city"
										onChange={this.changeHandler}
										value={this.state.city}
									>
                                        
                                        <option>Please choose the city</option>
                                        {this.state.cities.map((city) => <option value={city}>{city}</option>)};
										
									</select>
								</div>
							</MDBCol>
						</MDBRow>
                        {/* <br/> */}

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
							<MDBCol>
                                <MDBInput
                                        required 
                                        label= "Salary *"
                                        type="text"
                                        name="salary"
                                        value={this.state.salary}
                                        onChange={this.changeHandler}
                                        className={
                                            this.state.salary.length >= 2 ? (
                                                'is-valid'
                                            ) : (
                                                'is-invalid'
                                            )
                                        } 

                                        >
                                </MDBInput>
                            </MDBCol>
						</MDBRow>
                        {/* <br/> */}

                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
							<MDBCol>
                                <MDBInput
                                        required 
                                        label= "Vacancies *"
                                        type="text"
                                        name="vacancies"
                                        value={this.state.vacancies}
                                        onChange={this.changeHandler}
                                        className={
                                            this.state.vacancies.length >= 1 ? (
                                                'is-valid'
                                            ) : (
                                                'is-invalid'
                                            )
                                        } 

                                        >
                                </MDBInput>
                            </MDBCol>
						</MDBRow>
                        <br/>

                        <h4 style={{fontWeight:"bold",marginLeft:"5px"}}>
                            Extra information
                        </h4>
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
							<MDBCol>
                                <MDBInput
                                        disabled={this.state.flagReq} 
                                        label= "Job Requirements"
                                        type="text"
                                        name="jobRequirements"
                                        value={this.state.jobRequirements}
                                        onChange={this.changeHandler}
                                        >
                                </MDBInput>
                            </MDBCol>
						</MDBRow>

                        <small style={{marginLeft:"10px", fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">If you want to add this field, please choose 'I want to add it' option.</small>

                        {/* <br/> */}
                        <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionReq"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionReq === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;I want to add it.
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionReq"
                                        checked={this.state.selectedOptionReq === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;I don't need it.
                        </label>
                        </div>
                        <br/>
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
							<MDBCol>
                                <MDBInput
                                        disabled={this.state.flagExp} 
                                        label= "Experience Needed"
                                        type="text"
                                        name="experienceNeeded"
                                        value={this.state.experienceNeeded}
                                        onChange={this.changeHandler}
                                        >
                                </MDBInput>
                            </MDBCol>
						</MDBRow>
                        <small style={{marginLeft:"10px", fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">If you want to add this field, please choose 'I want to add it' option.</small>

                        {/* <br/> */}
                        <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionExp"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionExp === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;I want to add it.
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionExp"
                                        checked={this.state.selectedOptionExp === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;I don't need it.
                        </label>
                        </div>
                        <br/>
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' }}>
							<MDBCol>
                            <div className="form-group">
							<MDBInput
                            disabled={this.state.flagStart} 
                            label="Start date"
							type="date"
							class="material-icons prefix"
							id="materialFormRegisterNameEx"
							name="startDate"
							onChange={this.changeHandler}
							value={this.state.startDate}
							style={{width:"310px"}}
							required
						/>
                        </div>
							</MDBCol>
						</MDBRow>
                        <small style={{marginLeft:"10px", fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">If you want to add this field, please choose 'I want to add it' option.</small>

                        {/* <br/> */}
                        <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionStart"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionStart === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;I want to add it.
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionStart"
                                        checked={this.state.selectedOptionStart === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;I don't need it.
                        </label>
                        </div>
                        <br/>
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
							<MDBCol>
                                <MDBInput
                                        disabled={this.state.flagDur} 
                                        label= "Duration"
                                        type="text"
                                        name="duration"
                                        value={this.state.duration}
                                        onChange={this.changeHandler}
                                        >
                                </MDBInput>
                            </MDBCol>
						</MDBRow>
                        {/* <br/> */}

                        <small style={{marginLeft:"10px", fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">If you want to add this field, please choose 'I want to add it' option.</small>

                        {/* <br/> */}
                        <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionDur"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionDur === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;I want to add it.
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionDur"
                                        checked={this.state.selectedOptionDur === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;I don't need it.
                        </label>
                        </div>

                        <br/>
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' }}>
							<MDBCol>
                            <div className="form-group">
							<MDBInput
                            disabled={this.state.flagDead} 
                            label="Application Deadline"
							type="date"
							class="material-icons prefix"
							id="materialFormRegisterNameEx"
							name="applicationDeadline"
							onChange={this.changeHandler}
							value={this.state.applicationDeadline}
							style={{width:"310px"}}
						/>
                        </div>
							</MDBCol>
						</MDBRow>
                        {/* <br/> */}

                        <small style={{marginLeft:"10px", fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">If you want to add this field, please choose 'I want to add it' option.</small>

                        {/* <br/> */}
                        <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionDead"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionDead === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;I want to add it.
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionDead"
                                        checked={this.state.selectedOptionDead === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;I don't need it.
                        </label>
                        </div>

						<div >
							<Button
								className="btn-block btn-rounded z-depth-1a"
								label="Create the job"
								variant="omar"
								style={{marginTop:"50px",marginLeft: "550px",marginRight:"2500px",width:"200px", height:"60px" ,backgroundColor:"#a3dbf1"}}
								disabled={!this.validateForm()}
								onClick={(event) => 
									this.handleClick(event)
								}
							>
							Create the job
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

export default CreateANewJob;
