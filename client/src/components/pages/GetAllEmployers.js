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


class GetAllEmployers extends Component
{
    constructor(props){
        super(props);
        this.state={
            employers:[],
            modalShow: false,
        };
}

redirectPostedJobs(employerId)
{
    localStorage.setItem('employerId',employerId)
    document.location.href = '/postedjobs';
}




componentDidMount()
    {
      axios.get('/routes/api/employers/getAllEmployers')
      .then((response) => {
          console.log(response.data.data)
         
          this.setState({employers:response.data.data});
          
         
      });
    }
  

getAttributes = () => {
    return this.state.employers.map((employer, index) => {
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
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {employer.firstName}&nbsp;{employer.middleName}&nbsp;{employer.lastName}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Business email:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {employer.businessEmail}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Job roles:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {employer.jobRoles}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Company Name:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {employer.companyName}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Company Number:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {employer.companyNumber}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Country:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {employer.country}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Company industry:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {employer.industryOfCompany}.</h7>
            </h8>
            <br/>
            <h8 style={{color:"black", fontFamily:"arial",fontWeight:"bold",fontSize:"25px"}}>Company Size:
        <h7 style={{color:"#333FFF", fontFamily:"monospace",fontStyle:"italic",fontSize:"20px"}}> {employer.companySize}.</h7>
            </h8>
            <Button  
				title="Click to view the jobs"
				onClick={() => this.redirectPostedJobs(employer._id)}
				style={{ width: '120px', height: '40px',backgroundColor:"#3399FF" ,color:"white",hover:"white",fontSize:"0.9em",marginLeft:"550px"}}  
				>
          Posted Jobs
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
export default GetAllEmployers
