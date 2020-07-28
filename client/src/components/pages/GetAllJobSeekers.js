import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Button,Card} from"react-bootstrap"
import { blue200,blue300 } from 'material-ui/styles/colors';
import swal from 'sweetalert';
import { Dropdown } from 'react-bootstrap';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { blue100} from 'material-ui/styles/colors';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IT from '../layout/IT.png'
import pharmacy from '../layout/pharmacy.png'
import sales from '../layout/sales.png'
import civil from '../layout/civil.png'
import mecha from '../layout/mecha.png'
import customer from '../layout/customer.png'
import marketing from '../layout/marketing.png'
import finance from '../layout/finance.png'
import administration from '../layout/administration.png'
import media from '../layout/media.png'
import hr from '../layout/hr.png'
import sports from '../layout/sports.png'
import fashion from '../layout/fashion.png'
import project from '../layout/project.png'
import telecom from '../layout/telecom.png'
import travel from '../layout/travel.png'
import medical from '../layout/medical.png'
import legal from '../layout/legal.png'
import business from '../layout/business.png'

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';


class GetAllJobSeekers extends Component
{
    constructor(props){
        super(props);
        this.state={
            jobSeekers:[],
            modalShow: false,
        };
}

redirectCV(userId)
{
    localStorage.setItem('userId',userId)
    document.location.href = '/adminviewcv';
}




componentDidMount()
    {
      axios.get('/routes/api/jobSeekers/getAllJobSeekers')
      .then((response) => {
          console.log(response.data.data)
         
          this.setState({jobSeekers:response.data.data});
          
         
      });
    }
  

getAttributes = () => {
    return this.state.jobSeekers.map((jobSeeker, index) => {
      return (
        <div>
        <br/>
        <br/>
        <br/>
        <Card 
        style={{
            width:"50%",
            height:"100%",
            paddingLeft:"10px",
            backgroundColor:'rgba(0,0,0,0.030)',
            marginLeft:"430px"
            }}
        >
          <Card.Body style={{backgroundColor:"dark"}}>
            <div>
              
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Name:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {jobSeeker.firstName}&nbsp;{jobSeeker.middleName}&nbsp;{jobSeeker.lastName}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Email:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {jobSeeker.email}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Mobile Number:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {jobSeeker.mobileNumber}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Gender:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {jobSeeker.gender}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Birthdate:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {jobSeeker.birthdate.substring(0,10)}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Address:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {jobSeeker.address}-{jobSeeker.city}-{jobSeeker.country}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Nationality:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {jobSeeker.nationality}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Marital Status:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {jobSeeker.maritalStatus}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Military Status:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {jobSeeker.militaryStatus}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Driving License:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {jobSeeker.drivingLicense}.</h7>
            </h8>
            <br/>
            <Button  
				title="Click to view the cv"
				onClick={() => this.redirectCV(jobSeeker._id)}
				style={{ width: '90px', height: '40px',backgroundColor:"#3399FF" ,color:"white",hover:"white",fontSize:"1em",marginLeft:"550px"}}  
				>
          CV
            </Button>



            </div>
          </Card.Body>
        </Card>
        </div>
        
      );
    })};

  render() {
    
    return (
      
        <div>

          {this.getAttributes()}
          </div>
        
        
    );
  }
}
export default GetAllJobSeekers
