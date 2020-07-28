import "bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Dropdown } from "react-bootstrap";
import RaisedButton from "material-ui/RaisedButton";
import style from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Table } from "semantic-ui-react";
import { Card } from "react-bootstrap";
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from "mdbreact";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import styled, { css } from "styled-components";
import { Button } from "react-bootstrap";
// import egypt from "../../egypt.jpeg";
// import gafi from "../../gafi.jpeg";

//import { Dropdown } from 'semantic-ui-react';
import axios from "axios";
import { blue200 } from "material-ui/styles/colors";

var mongoose = require("mongoose");

class CV extends Component {
  state = {
    firstName:'',
    lastName:'',
    email:'',
    address:'',
    mobileNumber:'',
    birthdate: '',
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
  };

  componentDidMount() {
    // axios.defaults.headers.common["Authorization"] =
    //   "Bearer " + localStorage.getItem("jwtToken");
    axios
			.get('/routes/api/cvs/getByJobSeekerId/5e7d35d36626c516005f62a1')
			.then((response) => {
                console.log(response.data.data[0].birthdate.substring(0,10))
				this.setState({
                    firstName: response.data.data[0].firstName,
                    lastName: response.data.data[0].lastName,
                    email: response.data.data[0].email,
                    address: response.data.data[0].address,
                    mobileNumber: response.data.data[0].mobileNumber,
                    birthdate: response.data.data[0].birthdate.substring(0,10),
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

  saveDiv() {
    var doc = new jsPDF();
    doc.fromHTML(document.getElementById("divToPrint").innerHTML);
    doc.save('CV.pdf');
   }

  getAttributes = () => {
      var languages=
      (
        <div>
            <u
            style={{color:"blue",fontWeight:"bold", fontStyle:"italic",fontSize:"25px",fontFamily:"monospace"}}>
               Languages:
          </u> 
          <br/>
          <br/>
          {this.state.languages.map((language) => (
        <p style={{fontSize:"18px",fontFamily:"monospace"}}>-{language}.</p>
        ))}
         _______________________________________________________________________________________________
        </div>
      );
      var education=
      ( 
        <div>
        <u
        style={{color:"blue",fontWeight:"bold", fontStyle:"italic",fontSize:"25px"}}>
           Education:
      </u> 
      <br/>
      <br/>
      <p style={{color:"black", fontStyle:"italic",fontFamily:"monospace",fontSize:"1.1em"}}>
          {this.state.school}
      </p>
      <p style={{color:"black", fontStyle:"italic",fontFamily:"monospace",fontSize:"1.1em"}}>
          {this.state.fieldOfStudy}
      </p>
      <p style={{color:"black", fontStyle:"italic",fontFamily:"monospace",fontSize:"1.1em"}}>
          Grade:&nbsp;{this.state.grade}
      </p>
      <p style={{color:"black", fontStyle:"italic",fontFamily:"monospace",fontSize:"1.1em"}}>
          {this.state.startYear}-{this.state.endYear}
      </p>
      ______________________________________________________________________________________________
      </div>
      );
    var communicationSkills=
    (
        <div>
        <u
        style={{color:"blue",fontWeight:"bold", fontStyle:"italic",fontSize:"25px"}}>
           Communication Skills:
      </u> 
      <br/>
      <br/>
      {this.state.communicationSkills.map((comm) => (
    <p style={{fontSize:"18px",fontFamily:"monospace"}}>-{comm}.</p>
    ))}
     ______________________________________________________________________________________________
     <br/>
     </div>
    );

    var internships=
    (
        <div>
        <u
        style={{color:"blue",fontWeight:"bold", fontStyle:"italic",fontSize:"25px"}}>
           Internships:
      </u> 
      <br/>
      <br/>
      {this.state.internships.map((intern) => (
    <p style={{fontSize:"18px",fontFamily:"monospace"}}>-{intern}.</p>
    ))}
     ______________________________________________________________________________________________
     <br/>
     </div>
    );

    var workExperience=
    (
        <div>
        <u
        style={{color:"blue",fontWeight:"bold", fontStyle:"italic",fontSize:"25px"}}>
           Work Experience:
      </u> 
      <br/>
      <br/>
      {this.state.workExperience.map((work) => (
    <p style={{fontSize:"18px",fontFamily:"monospace"}}>-{work}.</p>
    ))}
     ______________________________________________________________________________________________
     <br/>
     </div>
    );

    var studentActivities=
    (
        <div>
        <u
        style={{color:"blue",fontWeight:"bold", fontStyle:"italic",fontSize:"25px"}}>
           Student Activities:
      </u> 
      <br/>
      <br/>
      {this.state.studentActivities.map((sa) => (
    <p style={{fontSize:"18px",fontFamily:"monospace"}}>-{sa}.</p>
    ))}
     ______________________________________________________________________________________________
     <br/>
     </div>
    );
    
      return (
        <Card 
        style={{
            width:"45%",
            height:"100%",
            paddingLeft:"10px",
            backgroundColor:'rgba(0,0,0,0.005)',
            marginLeft:"490px",
            top:"70px",
            paddingTop:"10px"
            }}
        >
          <Card.Body>
          <div>
          <h4 style={{color:"blue", fontFamily:"arial",fontWeight:"bold",fontSize:"35px"}}>
                 {this.state.firstName}&nbsp;{this.state.lastName}
          </h4>
        {/* <br/> */}

          <h4
            style={{color:"black", fontStyle:"italic",fontSize:"1em"}}>
             {this.state.email}
          </h4>

          <h4
            style={{color:"black", fontStyle:"italic",fontSize:"1em"}}>
             {this.state.mobileNumber}
          </h4>

          <h4
            style={{color:"black", fontStyle:"italic",fontSize:"1em"}}>
             {this.state.address}
          </h4>

          <h4
            style={{color:"black", fontStyle:"italic",fontSize:"1em"}}>
             {this.state.birthdate}
          </h4>
          _______________________________________________________________________________________________
          <br/>
         {education}
         
          {languages}
            {this.state.communicationSkills.includes("I don't have any")? null:communicationSkills}
            {this.state.internships.includes("I don't have any")? null:internships}
            {this.state.workExperience.includes("I don't have any")? null:workExperience}
            {this.state.studentActivities.includes("I don't have any")? null:studentActivities}  
          </div>

          </Card.Body>
        </Card>
      );
  };

  render() {
    return (
      
<div>
        

        <Button
          label="Save as PDF"
          variant="omar"
          size="sm"
          width="60px"
          height="8px"
          style={{
            marginTop: "90px",
            width: "180px",
            height: "40px",
            backgroundColor: "#0000FF",
            marginLeft:"720px"
            
          }}
          onClick={this.saveDiv}
        >
          <i
            class="far fa-file-pdf"
            style={{ fontSize: "1.6em", left: "2%", color: "light blue" }}
          >
              &nbsp;Save as PDF
              </i>
          
        </Button>
        
        <div>
          <div style={{ paddingLeft: "44%" }} />
          <div
            id="divToPrint"
            className="mt4"
            {...css({
              backgroundColor: "#f5f5f5",
              width: "210mm",
              minHeight: "297mm",
              marginLeft: "auto",
              marginRight: "auto"
            })}
          >

            {this.getAttributes()}
          </div>
          </div>
        
          <Button
          label="Save as PDF"
          variant="omar"
          size="sm"
          width="60px"
          height="8px"
          style={{
            marginTop: "90px",
            width: "180px",
            height: "40px",
            backgroundColor: "#0000FF",
            marginLeft:"750px"
            
          }}
          onClick={this.saveDiv}
        >
          <i
            class="far fa-file-pdf"
            style={{ fontSize: "1.6em", left: "2%", color: "light blue" }}
          >
              &nbsp;Save as PDF
              </i>
          
        </Button>
          </div>

    );
  }
}

export default CV;
