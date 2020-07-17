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
import { ButtonToolbar } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { blue300 } from 'material-ui/styles/colors';
import AddALanguage from '../pages/AddALanguage';
import AddACommunicationSkill from '../pages/AddACommunicationSkill';
import AddAnInternship from '../pages/AddAnInternship';
import AddAWorkExperience from '../pages/AddAWorkExperience';
import AddAStudentActivity from '../pages/AddAStudentActivity';


var mongoose = require('mongoose');

class EditCV extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            cv:'',
            oldLanguage:'Your languages',
            oldComm:'Your communication skills',
            oldIntern:'Your internships',
            oldWE:'Your work experience',
            oldSA:'Your student activities',
            type:'',
            school:'',
            grade:'',
            fieldOfStudy:'',
            startYear:'',
            endYear:'',
            languages:[],
            communicationSkills:[],
            internships:[],
            workExperience:[],
            studentActivities:[],
            modalShowLangAdd:false,
            modalShowCommAdd:false,
            modalShowInternAdd:false,
            modalShowWEAdd:false,
            modalShowSAAdd:false,
		};

		// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.get('/routes/api/cvs/getByJobSeekerId/5e7d35d36626c516005f62a1')
			.then((response) => {
                console.log(response.data.data[0].communicationSkills)
				this.setState({
                    cv: response.data.data[0]._id,
                    type: response.data.data[0].type,
                    school: response.data.data[0].school,
                    grade: response.data.data[0].grade,
                    fieldOfStudy: response.data.data[0].fieldOfStudy,
                    startYear: response.data.data[0].startYear,
                    endYear: response.data.data[0].endYear,
                    languages: response.data.data[0].languages,
                    communicationSkills: response.data.data[0].communicationSkills,
                    internships: response.data.data[0].internships,
                    workExperience: response.data.data[0].workExperience,
                    studentActivities: response.data.data[0].studentActivities
				});
            }
           );
}

validateForm() {
    console.log(this.state.school.length)
    return(
        this.state.school.length >= 3 &&
        this.state.grade.length >= 1 &&
        this.state.fieldOfStudy.length >=2 &&
        this.state.startYear.length === 4 &&
        this.state.endYear.length === 4
    )
}

handleClick(error) {
    error.preventDefault();
    var apiBaseUrl = '/routes/api/cvs/updateACv/'+this.state.cv;
    var payload = {
        school: this.state.school,
        grade: this.state.grade,
        fieldOfStudy: this.state.fieldOfStudy,
        startYear: this.state.startYear,
        endYear: this.state.endYear,
        type: this.state.type
    };

    // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
    axios
        .put(apiBaseUrl, payload)
        .then(function(response) {
            swal({
                title: "Your CV has been updated successfully",
                icon: "success"
                })
                setTimeout("document.location.href = '/editcv';",1500);
        })
        .catch((error) => {
            swal(error.response.data.errmsg || error.response.data);
            console.log(error);
        });
}

    
	handleClickLang(error) {
        error.preventDefault();
        console.log(this.state.oldLanguage)
        console.log(this.state.cv)
        if(this.state.oldLanguage==='Your languages')
        return  swal('Please choose a language first!')
        var apiBaseUrl =('/routes/api/cvs/deleteALanguage/'+this.state.cv)
		var payload = {
			oldLanguage: this.state.oldLanguage
		};

		// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.put(apiBaseUrl, payload)
			.then(function(response) {
                swal('Language has been deleted succesfully!')
                setTimeout("document.location.href = '/editcv';",1500);
               })
               .catch(function (error) {
                 console.log(error);
			});
    }
    
    handleClickComm(error) {
        error.preventDefault();
        console.log(this.state.oldComm)
        console.log(this.state.cv)
        if(this.state.oldComm==='Your communication skills')
        return  swal('Please choose a skill first!')
        var apiBaseUrl =('/routes/api/cvs/deleteACommunicationSkill/'+this.state.cv)
		var payload = {
			oldCommunicationSkill: this.state.oldComm
		};

		// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.put(apiBaseUrl, payload)
			.then(function(response) {
                swal('Communication Skill has been deleted succesfully!')
                setTimeout("document.location.href = '/editcv';",1500);
               })
               .catch(function (error) {
                 console.log(error);
			});
	}

    handleClickIntern(error) {
        error.preventDefault();
        console.log(this.state.oldIntern)
        console.log(this.state.cv)
        if(this.state.oldIntern==='Your internships')
        return  swal('Please choose an internship first!')
        var apiBaseUrl =('/routes/api/cvs/deleteAnInternship/'+this.state.cv)
		var payload = {
			oldInternship: this.state.oldIntern
		};

		// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.put(apiBaseUrl, payload)
			.then(function(response) {
                swal('Internship has been deleted succesfully!')
                setTimeout("document.location.href = '/editcv';",1500);
               })
               .catch(function (error) {
                 console.log(error);
			});
    }
    
    handleClickWE(error) {
        error.preventDefault();
        console.log(this.state.oldWE)
        console.log(this.state.cv)
        if(this.state.oldWE==='Your work experience')
        return  swal('Please choose a work experience first!')
        var apiBaseUrl =('/routes/api/cvs/deleteAWorkExperience/'+this.state.cv)
		var payload = {
			oldWorkExperience: this.state.oldWE
		};

		// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.put(apiBaseUrl, payload)
			.then(function(response) {
                swal('Work Experience has been deleted succesfully!')
                setTimeout("document.location.href = '/editcv';",1500);
               })
               .catch(function (error) {
                 console.log(error);
			});
    }

    handleClickSA(error) {
        error.preventDefault();
        console.log(this.state.oldSA)
        console.log(this.state.cv)
        if(this.state.oldSA==='Your student activities')
        return  swal('Please choose a student activity first!')
        var apiBaseUrl =('/routes/api/cvs/deleteAStudentActivity/'+this.state.cv)
		var payload = {
			oldStudentActivity: this.state.oldSA
		};

		// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.put(apiBaseUrl, payload)
			.then(function(response) {
                swal('Student Activity has been deleted succesfully!')
                setTimeout("document.location.href = '/editcv';",1500);
               })
               .catch(function (error) {
                 console.log(error);
			});
    }

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
}


	render() {

		let modalCloseLangAdd = () => this.setState({ modalShowLangAdd: false});
		let modalCloseCommAdd = () => this.setState({ modalShowCommAdd: false});
		let modalCloseInternAdd = () => this.setState({ modalShowInternAdd: false});
		let modalCloseWEAdd = () => this.setState({ modalShowWEAdd: false});
		let modalCloseSAAdd = () => this.setState({ modalShowSAAdd: false});

        var NoInternships=(
            <small id="emailHelp" class="form-text text-muted">Min {this.state.minOne} characters.</small>
         );
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
                        Your CV
                        </h5>
                        <h6 style={{fontStyle:"italic",color:"black",marginLeft:"15px"}}>
                        Note that this is only your CV information. To update your personal information, please edit your profile int the 'Personal info' page.
                        </h6>
                        <br/>
                        <br/>
                        
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"400px"}}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="type">Type</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
									<select
                                        name="type"
										className="form-control"
										id="exampleFormControlSelect1"
										onChange={this.changeHandler}
										value={this.state.type}
									>
										<option>Public</option>
                                        <option>Private</option>
                                        <option>Protected</option>

									</select>
                                    <small style={{marginLeft:"5px"}} id="emailHelp" class="form-text text-muted">Public: All companies can view it.</small>
                                    <small style={{marginLeft:"5px"}} id="emailHelp" class="form-text text-muted">Protected: The companies that you have applied to one of its jobs can only view it.</small>
                                    <small style={{marginLeft:"5px"}} id="emailHelp" class="form-text text-muted">Private: Not available to any company. Only you can view it.</small>

								</div>
							</MDBCol>
                        </MDBRow>
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
                            <div className="form-group">
                                School/University
                            <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
							<MDBInput
                            // label="Birthdate"
							type="text"
							class="material-icons prefix"
							id="materialFormRegisterNameEx"
							name="school"
							onChange={this.changeHandler}
							value={this.state.school}
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
                                Grade
                            <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
							<MDBInput
                            // label="Birthdate"
							type="text"
							class="material-icons prefix"
							id="materialFormRegisterNameEx"
							name="grade"
							onChange={this.changeHandler}
							value={this.state.grade}
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
                                Field of study
                            <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
							<MDBInput
                            // label="Birthdate"
							type="text"
							class="material-icons prefix"
							id="materialFormRegisterNameEx"
							name="fieldOfStudy"
							onChange={this.changeHandler}
							value={this.state.fieldOfStudy}
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
                                Start year
                            <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
							<MDBInput
                            // label="Birthdate"
							type="text"
							class="material-icons prefix"
							id="materialFormRegisterNameEx"
							name="startYear"
							onChange={this.changeHandler}
							value={this.state.startYear}
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
                                End year
                            <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
							<MDBInput
                            // label="Birthdate"
							type="text"
							class="material-icons prefix"
							id="materialFormRegisterNameEx"
							name="endYear"
							onChange={this.changeHandler}
							value={this.state.endYear}
							style={{width:"310px"}}
							required
						/>
                        </div>
							</MDBCol>
						</MDBRow>
                        <br/>

                        {/* Language */}
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="languages">Languages</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
									<select
                                        name="oldLanguage"
										className="form-control"
										id="exampleFormControlSelect1"
										onChange={this.changeHandler}
										value={this.state.oldLanguage}
									>
										<option>Your languages</option>
											{this.state.languages.map((language) => (
												 <option value={language}>{language}</option>
											))};
									</select>
                                    <small style={{marginLeft:"5px"}} id="emailHelp" class="form-text text-muted">Note: If you want to delete a language, please choose it from the menu first then delete it.</small>
								</div>
							</MDBCol>
                           
                            <ButtonGroup size="sm" style={{marginLeft:"60px"}}>
								<Button
                                    variant="omar"
                                    onClick={() => this.setState({ modalShowLangAdd: true })}
									style={{ width: '80px', height: '36px', backgroundColor:blue300 }}
								>
									Add
								</Button>{' '}
								<br />

                                    <AddALanguage
										show={this.state.modalShowLangAdd}
										onHide={modalCloseLangAdd}
										cvId={this.state.cv}
									/>
									
								<br />
								<Button
									variant="omar"
                                    onClick={(event) => this.handleClickLang(event)}
									style={{ width: '80px', height: '36px', backgroundColor:blue300 }}
								>
			
                                    Delete
								</Button>
							</ButtonGroup>
						</MDBRow>
                       <br/>

                        {/* Communication Skills */}
                       <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
							<MDBCol>
								<div className="form-group">
									<label htmlFor="communicationSkills">Communication Skills</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
									<select
                                        name="oldComm"
										className="form-control"
										id="exampleFormControlSelect1"
										onChange={this.changeHandler}
										value={this.state.oldComm}
									>
										<option>Your communication skills</option>
											{this.state.communicationSkills.map((comm) => (
												 <option value={comm}>{comm}</option>
											))};
									</select>
                                    <small style={{marginLeft:"5px"}} id="emailHelp" class="form-text text-muted">Note: If you want to delete a skill, please choose it from the menu first then delete it.</small>
								</div>
							</MDBCol>
                           
                            <ButtonGroup size="sm" style={{marginLeft:"60px"}}>
								<Button
                                    variant="omar"
                                    onClick={() => this.setState({ modalShowCommAdd: true })}
									style={{ width: '80px', height: '36px', backgroundColor:blue300 }}
								>
									Add
								</Button>{' '}
								<br />

                                    <AddACommunicationSkill
										show={this.state.modalShowCommAdd}
										onHide={modalCloseCommAdd}
										cvId={this.state.cv}
									/>
									
								<br />
								<Button
									variant="omar"
                                    onClick={(event) => this.handleClickComm(event)}
									style={{ width: '80px', height: '36px', backgroundColor:blue300 }}
								>
                                    Delete
								</Button>
                               
							</ButtonGroup>
						</MDBRow>
                       
                        <br/>

                        {/* Internships */}
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
                            <MDBCol>
                                <div className="form-group">
                                    <label htmlFor="internships">Internships</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                                    <select
                                        name="oldIntern"
                                        className="form-control"
                                        id="exampleFormControlSelect1"
                                        onChange={this.changeHandler}
                                        value={this.state.oldIntern}
                                    >
                                        <option>Your internships</option>
                                            {this.state.internships.map((intern) => (
                                                <option value={intern}>{intern}</option>
                                            ))};
                                    </select>
                                    <small style={{marginLeft:"5px"}} id="emailHelp" class="form-text text-muted">Note: If you want to delete an internship, please choose it from the menu first then delete it.</small>
                                </div>
                            </MDBCol>
                            
                            <ButtonGroup size="sm" style={{marginLeft:"60px"}}>
                                <Button
                                    variant="omar"
                                    onClick={() => this.setState({ modalShowInternAdd: true })}
                                    style={{ width: '80px', height: '36px', backgroundColor:blue300 }}
                                >
                                    Add
                                </Button>{' '}
                                <br />

                                    <AddAnInternship
                                        show={this.state.modalShowInternAdd}
                                        onHide={modalCloseInternAdd}
                                        cvId={this.state.cv}
                                    />
                                    
                                <br />
                                <Button
                                    variant="omar"
                                    onClick={(event) => this.handleClickIntern(event)}
                                    style={{ width: '80px', height: '36px', backgroundColor:blue300 }}
                                >
                                    Delete
                                </Button>
                                
                            </ButtonGroup>
                        </MDBRow>

                        <br/>

                        {/* Work Experience */}
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
                            <MDBCol>
                                <div className="form-group">
                                    <label htmlFor="workExperience">Work Experience</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                                    <select
                                        name="oldWE"
                                        className="form-control"
                                        id="exampleFormControlSelect1"
                                        onChange={this.changeHandler}
                                        value={this.state.oldWE}
                                    >
                                        <option>Your work experience</option>
                                            {this.state.workExperience.map((work) => (
                                                <option value={work}>{work}</option>
                                            ))};
                                    </select>
                                    <small style={{marginLeft:"5px"}} id="emailHelp" class="form-text text-muted">Note: If you want to delete an experience, please choose it from the menu first then delete it.</small>
                                </div>
                            </MDBCol>
                            
                            <ButtonGroup size="sm" style={{marginLeft:"60px"}}>
                                <Button
                                    variant="omar"
                                    onClick={() => this.setState({ modalShowWEAdd: true })}
                                    style={{ width: '80px', height: '36px', backgroundColor:blue300 }}
                                >
                                    Add
                                </Button>{' '}
                                <br />

                                    <AddAWorkExperience
                                        show={this.state.modalShowWEAdd}
                                        onHide={modalCloseWEAdd}
                                        cvId={this.state.cv}
                                    />
                                    
                                <br />
                                <Button
                                    variant="omar"
                                    onClick={(event) => this.handleClickWE(event)}
                                    style={{ width: '80px', height: '36px', backgroundColor:blue300 }}
                                >
                                    Delete
                                </Button>
                                
                            </ButtonGroup>
                        </MDBRow>

                        <br/>

                        {/* Student Activities */}
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"350px"}}>
                            <MDBCol>
                                <div className="form-group">
                                    <label htmlFor="studentActivities">Student Activities</label>
                                    <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                                    <select
                                        name="oldSA"
                                        className="form-control"
                                        id="exampleFormControlSelect1"
                                        onChange={this.changeHandler}
                                        value={this.state.oldSA}
                                    >
                                        <option>Your student activities</option>
                                            {this.state.studentActivities.map((sa) => (
                                                <option value={sa}>{sa}</option>
                                            ))};
                                    </select>
                                    <small style={{marginLeft:"5px"}} id="emailHelp" class="form-text text-muted">Note: If you want to delete an activity, please choose it from the menu first then delete it.</small>
                                </div>
                            </MDBCol>
                            
                            <ButtonGroup size="sm" style={{marginLeft:"72px"}}>
                                <Button
                                    variant="omar"
                                    onClick={() => this.setState({ modalShowSAAdd: true })}
                                    style={{ width: '80px', height: '36px', backgroundColor:blue300 }}
                                >
                                    Add
                                </Button>{' '}
                                <br />

                                    <AddAStudentActivity
                                        show={this.state.modalShowSAAdd}
                                        onHide={modalCloseSAAdd}
                                        cvId={this.state.cv}
                                    />
                                    
                                <br />
                                <Button
                                    variant="omar"
                                    onClick={(event) => this.handleClickSA(event)}
                                    style={{ width: '80px', height: '36px', backgroundColor:blue300 }}
                                >
                                    Delete
                                </Button>
                                
                            </ButtonGroup>
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

export default EditCV;
