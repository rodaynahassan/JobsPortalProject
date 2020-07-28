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


class ChooseAnApplication extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            applicationType: 'Default',
            numberOfQuestions:'',
            selectedOption:'option1',
            valueCustomized: 1,
            valueMixed:1,
        }; 
                   
}
    
	handleClick(error) {
        error.preventDefault();
        localStorage.setItem('applicationType', this.state.applicationType);
        console.log(this.state.applicationType)
        if (this.state.applicationType==='Customized')
        {
            localStorage.setItem('numberOfQuestions', this.state.valueCustomized);
        }
        if (this.state.applicationType==='Mixed')
        {
            localStorage.setItem('numberOfQuestions', this.state.valueMixed);
        }
        // localStorage.setItem('numberOfQuestions', this.state.valueCustomized);
        console.log(this.state.valueCustomized)
        // localStorage.setItem('numberOfQuestions', this.state.valueMixed);
        console.log(this.state.valueMixed)
        console.log(localStorage.getItem('numberOfQuestions'))

        if(this.state.applicationType==='Default')
        {
                var apiBaseUrl = '/routes/api/applications/CreateANewApplication/5ed02ba21a7ba21e60d0d064/'+localStorage.getItem('jobId');
                var payload=
                {
                    applicationType:'Default'
                }
                axios
                .post(apiBaseUrl, payload)
                .then(function(response) {
                    swal({
                        title: "The default application has been created successfully",
                        text: "You can now track your new job in 'Your jobs' page.",
                        icon: "success",
                        buttons: {
                            catch: {
                                text: "View your jobs ",
                                value: "jobs",
                              },
                            defeat: {
                                text: "Ok",
                                value: "ok",
                            },  
                        }
                        })
                        .then((value) => {
                            switch (value) {
                        
                            case "jobs":
                                document.location.href = '/postedjobs';
                                break;
                            case "ok":
                                break;
                            }
                        });
                    })
                .catch((error) => {
                    swal(error.response.data.errmsg || error.response.data);
                    console.log(error);
                });

        }
        else
        {
                swal("Let's now proceed with adding your desired questions!")
                setTimeout("document.location.href = '/questions';",2500);

        }
        // document.location.href = '/newapplication';
      
		// var apiBaseUrl = '/routes/api/jobs/CreateANewJob/5ed02ba21a7ba21e60d0d064';
		// var payload = {
		// 	category: this.state.category,
        //     jobType: this.state.jobType,
		// 	experienceNeeded: this.state.experienceNeeded,
        //     careerLevel: this.state.careerLevel,
        //     jobTitle: this.state.jobTitle,
        //     salary: this.state.salary,
		// 	languages: this.state.languages,
		// 	vacancies: this.state.vacancies,
        //     jobDescription: this.state.jobDescription,
        //     jobRequirements: this.state.jobRequirements,
        //     country: this.state.country,
		// 	city: this.state.city,
		// 	startDate: this.state.startDate,
		// 	duration: this.state.duration,
        //     applicationDeadline: this.state.applicationDeadline
        // };

		// // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		// axios
		// 	.post(apiBaseUrl, payload)
		// 	.then(function(response) {
        //         swal({
        //             title: "You have created the job successfully",
        //             text: "You can edit and track your jobs in 'Your jobs' page. But first, let's proceed with creating an application for your job.",
        //             icon: "success",
        //             buttons: {
        //                 // catch: {
        //                 //     text: "Show applications",
        //                 //     value: "application",
        //                 //   },
        //                   defeat: {
        //                     text: "Let's go!",
        //                     value: "application",
        //                   },  
        //             }
        //             })
        //             .then((value) => {
        //                 switch (value) {
                    
        //                   case "application":
        //                     document.location.href = '/chooseapplication';
        //                     break;
        //                   default:
        //                     document.location.href = '/chooseapplication';
        //                 }
        //               });
        //         })
		// 	.catch((error) => {
		// 		swal(error.response.data.errmsg || error.response.data);
		// 		console.log(error);
		// 	});
	}

	changeHandler = (event) => {
            if(event.target.value==='option1')
    {
      this.setState({ applicationType: 'Default'});
    }

    if(event.target.value==='option2')
    {
      this.setState({ applicationType: 'Customized'});
    }


    if(event.target.value==='option3')
    {
      this.setState({ applicationType: 'Mixed'});
    }

        this.setState({ [event.target.name]: event.target.value });

    }
    
    decreaseCustomized = () => {
        if(this.state.valueCustomized===1)
        {
          return swal("The minimum number of questions is 1!")
        }
        this.setState({ valueCustomized: this.state.valueCustomized - 1 });
      }
    
      increaseCustomized = () => {
        if(this.state.valueCustomized===10)
        {
          return swal("The maximum number of questions is 10!")
        }
    
        this.setState({ valueCustomized: this.state.valueCustomized + 1 });
      }
    
      decreaseMixed = () => {
        if(this.state.valueMixed===1)
        {
          return swal("The minimum number of questions is 1!")
        }
        this.setState({ valueMixed: this.state.valueMixed - 1 });
      }
    
      increaseMixed = () => {
        if(this.state.valueMixed===8)
        {
          return swal("The maximum number of questions is 8!")
        }
    
        this.setState({ valueMixed: this.state.valueMixed + 1 });
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
					<h4 style={{color:"black", fontSize:"1.5em", fontWeight:"bold",marginLeft:"5px"}}>
                        Choose an application type first.
                        </h4>
                        <br/>
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
							<MDBCol>
                                <div className="radio">
                                <label>
                                    <input type="radio" value="option1"  name="selectedOption"
                                    style={{marginLeft:"10px"}}
                                                checked={this.state.selectedOption === 'option1'}
                                                onClick={this.changeHandler} />
                                    &nbsp;Default
                                </label>
                                </div>
                                <small style={{marginLeft:"10px",fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">
                                    The default is a premade application which contains only 2 questions: What do you think you will gain from this job ? and What makes you special to be accepted ? 
                                </small>
                                <small style={{marginLeft:"10px",fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">
                                    1) What do you think you will gain from this job ? and What makes you special to be accepted ? 
                                </small>
                                <small style={{marginLeft:"10px",fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">
                                    2) What makes you special to be accepted ? 
                                </small>
                                <small style={{marginLeft:"10px",fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">
                                    If don't need to bother yourself creating an application, we can create the default application for you with these 2 questions.
                                </small>
                            </MDBCol>
						</MDBRow>

                        <br/>
 
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
							<MDBCol>
                                <div className="radio">
                                <label>
                                    <input type="radio" value="option2"  name="selectedOption"
                                    style={{marginLeft:"10px"}}
                                                checked={this.state.selectedOption === 'option2'}
                                                onClick={this.changeHandler} />
                                    &nbsp;Customized
                                </label>
                                </div>
                                <small style={{marginLeft:"10px",fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">
                                    If you want to create an application with your desired questions, choose the customized application. 
                                </small>

                                <small style={{marginLeft:"10px",fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">
                                    You can add up to 10 questions.
                                </small>
                                <small style={{marginLeft:"10px",fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">
                                   If you want to create it, please choose the wanted number of questions first.
                                </small>

                                <div className="def-number-input number-input">
                                <Button style={{marginTop:"2px"}} onClick={this.decreaseCustomized} disabled={this.state.applicationType!=='Customized' || this.state.valueCustomized===1} >
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                </Button>
                                <input style ={{width:"60px",height:"37px",marginTop:"12px"}}className="quantity" name="quantity" value={this.state.valueCustomized} onChange={()=> console.log('change')}
                                type="number" />
                                <Button style={{marginTop:"2px"}} onClick={this.increaseCustomized} disabled={this.state.applicationType!=='Customized' || this.state.valueCustomized===10} >
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                </Button>
                                </div>
                            </MDBCol>
						</MDBRow>
                        <br/>
                        <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
							<MDBCol>
                                <div className="radio">
                                <label>
                                    <input type="radio" value="option3"  name="selectedOption"
                                    style={{marginLeft:"10px"}}
                                                checked={this.state.selectedOption === 'option3'}
                                                onClick={this.changeHandler} />
                                    &nbsp;Mixed
                                </label>
                                </div>
                                <small style={{marginLeft:"10px",fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">
                                    If you want to create an application with your desired questions and also with our 2 default questions, choose the mixed application. 
                                </small>

                                <small style={{marginLeft:"10px",fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">
                                    You can add up to 8 questions besides our 2 default questions.
                                </small>
                                <small style={{marginLeft:"10px",fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">
                                   If you want to create it, please choose the wanted number of questions first.
                                </small>

                                <div className="def-number-input number-input">
                                <Button style={{marginTop:"2px"}} onClick={this.decreaseMixed} disabled={this.state.applicationType!=='Mixed' || this.state.valueMixed===1} >
                                <i class="fa fa-minus" aria-hidden="true"></i>
                                </Button>
                                <input style ={{width:"60px",height:"37px",marginTop:"12px"}}className="quantity" name="quantity" value={this.state.valueMixed} onChange={()=> console.log('change')}
                                type="number" />
                                <Button style={{marginTop:"2px"}} onClick={this.increaseMixed} disabled={this.state.applicationType!=='Mixed' || this.state.valueMixed===8} >
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                </Button>
                                </div>

                            </MDBCol>
						</MDBRow>


						<div >
							<Button
								className="btn-block btn-rounded z-depth-1a"
								label="Create the job"
								variant="omar"
								style={{marginTop:"50px",marginLeft: "550px",marginRight:"2500px",width:"200px", height:"60px" ,backgroundColor:"#a3dbf1"}}
								// disabled={!this.validateForm()}
								onClick={(event) => 
									this.handleClick(event)
								}
							>
							Submit
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

export default ChooseAnApplication;
