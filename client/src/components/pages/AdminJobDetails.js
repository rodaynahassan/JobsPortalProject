import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Button,Card} from"react-bootstrap"
import { blue200 } from 'material-ui/styles/colors';
import swal from 'sweetalert';
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

class AdminJobDetails extends Component
{
    constructor(props){
        super(props);
        this.state={
            jobTitle:"",
            companyName:"",
            category:"",
            jobType:"",
            careerLevel:"",
            salary:"",
            languages:'',
            vacancies:"",
            jobDescription:"",
            jobRequirements:"",
            city:"",
            country:"",
            totalNumberOfApplicants:"",
            numberOfViewedApplications:"",
            numberOfAcceptedApplications:"",
            numberOfRejectedApplications:"",
            startDate:"",
            duration:"",
            datePosted:"",
            job:"",
            newLanguages:"",
            modalShow: false,
            applicationDeadline:""
        };
}

componentDidMount()
    {
        axios.get('/routes/api/jobs/getByID/'+localStorage.getItem('jobId'))
                .then((response) => {
                    console.log(response.data.data.startDate)
                    this.setState({
                      job:response.data.data,
                      jobTitle:response.data.data.jobTitle,
                      companyName:response.data.data.companyName,
                      category:response.data.data.category,
                      jobType:response.data.data.jobType,
                      experienceNeeded: response.data.data.experienceNeeded,
                      careerLevel:response.data.data.careerLevel,
                      salary:response.data.data.salary,
                      languages:response.data.data.languages,
                      vacancies:response.data.data.vacancies,
                      jobDescription:response.data.data.jobDescription,
                      jobRequirements:response.data.data.jobRequirements,
                      city:response.data.data.city,
                      country:response.data.data.country,
                      totalNumberOfApplicants:response.data.data.totalNumberOfApplicants,
                      numberOfViewedApplications:response.data.data.numberOfViewedApplications,
                      numberOfAcceptedApplications:response.data.data.numberOfAcceptedApplications,
                      numberOfRejectedApplications:response.data.data.numberOfRejectedApplications,
                      startDate:response.data.data.startDate,
                      duration:response.data.data.duration,
                      datePosted:response.data.data.datePosted,
                      applicationDeadline: response.data.data.applicationDeadline
                    });
                });
  }
redirectDelete(jobId)
  {
    axios.delete('/routes/api/jobs/deleteAJob/'+jobId)
    .then((response) => {
      swal('The job has been deleted.')
      setTimeout("document.location.href = '/postedjobs';",1500);
      });
  }
redirectApplicants(jobId)
{
  localStorage.setItem('jobId',jobId)
  document.location.href = '/adminapplicants';
}  
redirectEmployer(employerId)
{
    localStorage.setItem('employerId',employerId)
    document.location.href = '/employercompany'
}


getAttributes = () => {
    var Experience=(
      <div>
          <u
            style={{color:"black", fontWeight:"bold",fontStyle:"italic",fontSize:"0.8em"}}>
               Experience Needed:
          </u> 
          <h9
            style={{color:"grey", fontStyle:"monospace",fontSize:"0.75em"}}>
               &nbsp;{this.state.experienceNeeded}.
          </h9> 
           </div>              

    );
    var jobReq=
    (
        <div>
          <u
            style={{color:"black",fontWeight:"bold", fontStyle:"italic"}}>
               Job Requirements:
          </u> 
          <br/>

          <p
            style={{color:"black",fontFamily:"monospace",fontSize:"1em"}}>
              {this.state.jobRequirements}
          </p>

        </div>
    );

    var StartDate=
    (
        <div>
        <u
            style={{color:"black", fontWeight:"bold",fontStyle:"italic",fontSize:"0.8em"}}>
               Start Date:
          </u> 
          <h9
            style={{color:"grey", fontStyle:"monospace",fontSize:"0.75em"}}>
               &nbsp;{this.state.startDate.substring(0,10)}.
          </h9> 

          <br/>
    
        </div>
    );

    var ApplicationDeadline=
    (
        <div>
        <u
            style={{color:"black", fontWeight:"bold",fontStyle:"italic",fontSize:"0.8em"}}>
              Application Deadline:
          </u> 
          <h9
            style={{color:"grey", fontStyle:"monospace",fontSize:"0.75em"}}>
               &nbsp;{this.state.applicationDeadline.substring(0,10)}.
          </h9> 

          <br/>
    
        </div>
    );

    var it=
     (
      <div>
      <img src={IT} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Duration =
     (
        <div>
        <u
            style={{color:"black", fontWeight:"bold",fontStyle:"italic",fontSize:"0.8em"}}>
               Duration:
          </u> 
          <h9
            style={{color:"grey", fontStyle:"monospace",fontSize:"0.75em"}}>
               &nbsp;{this.state.duration}.
          </h9>

          <br/>

        </div>
     );
     var Fashion=
     (
      <div>
      <img src={fashion} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var pharma=
     (
      <div>
      <img src={pharmacy} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Sales=
     (
      <div>
      <img src={sales} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Civil=
     (
      <div>
      <img src={civil} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Mecha=
     (
      <div>
      <img src={mecha} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Customer=
     (
      <div>
      <img src={customer} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Marketing=
     (
      <div>
      <img src={marketing} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Finance=
     (
      <div>
      <img src={finance} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Administration=
     (
      <div>
      <img src={administration} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Media=
     (
      <div>
      <img src={media} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var HR=
     (
      <div>
      <img src={hr} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Sports=
     (
      <div>
      <img src={sports} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Fashion=
     (
      <div>
      <img src={administration} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Project=
     (
      <div>
      <img src={project} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Telecom=
     (
      <div>
      <img src={telecom} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Travel=
     (
      <div>
      <img src={travel} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Medical=
     (
      <div>
      <img src={medical} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Legal=
     (
      <div>
      <img src={legal} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );

     var Business=
     (
      <div>
      <img src={business} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{this.state.category}&nbsp;</span>
      </div>
     );
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
          marginLeft:"150px"
          }}
      >
        <Card.Body style={{backgroundColor:"dark"}}>
          <div>
          <h4 style={{color:"#333FFF", fontFamily:"arial",fontWeight:"bold"}}>{this.state.jobTitle}. </h4>
          {this.state.category==='IT/Software development'? it:null}
            {this.state.category==='Pharmacy'? pharma:null}
            {this.state.category==='Sales'? Sales:null}
            {this.state.category==='Engineering-Civil/Architecture'? Civil :null}
            {this.state.category==='Engineering-Mechatronics'? Mecha:null}
            {this.state.category==='Customer service'? Customer:null}
            {this.state.category==='Marketing/PR'? Marketing:null}
            {this.state.category==='Accounting/finance'? Finance:null}
            {this.state.category==='Administration'? Administration:null}
            {this.state.category==='Media/Journalism'? Media:null}
            {this.state.category==='HR'? HR:null}
            {this.state.category==='Sports'? Sports:null}
            {this.state.category==='Fashion'? Fashion:null}
            {this.state.category==='Project Management'? Project:null}
            {this.state.category==='Engineering-Telecom'? Telecom:null}
            {this.state.category==='Tourism/Travel'? Travel:null}
            {this.state.category==='Medical'? Medical:null}
            {this.state.category==='Legal'? Legal:null}
            {this.state.category==='Business development'? Business:null}
          <h8
            style={{color:"black", fontStyle:"monospace", fontWeight:"bold",fontSize:"1.2em"}}>
               {this.state.companyName}-&nbsp;
               <h9
                style={{color:"grey", fontFamily:"italic"}}>
                {this.state.city}, {this.state.country}.
              </h9>
          </h8>
          <br/>

          Job Type: &nbsp;
            <span style={{backgroundColor: "#66B2FF",color:"white", fontStyle:"monospace",border: "2px solid black"}}> {this.state.jobType}&nbsp; </span>
            <br/>

          Career Level:&nbsp;  
        <span style={{backgroundColor: "#66B2FF",color:"white", fontStyle:"monospace",border: "2px solid black"}}> {this.state.careerLevel}&nbsp; </span>
          <br/>
          <h7 
            style={{color:"black", fontStyle:"monospace",fontSize:"1em"}}>
               Languages needed:&nbsp; {this.state.languages}.
          </h7> 
          <br/>
          <br/>
          <h7 
            style={{color:"grey", fontStyle:"italic",fontSize:"0.77em"}}>
               Posted on {this.state.datePosted}
          </h7> 
          
          <br/>
          ________________________________________________________________________________________________
          <br/>
          <u
            style={{color:"black",fontWeight:"bold", fontStyle:"italic"}}>
               Job Description:
          </u> 
          <br/>

          <p
            style={{color:"black",fontFamily:"monospace",fontSize:"1em"}}>
              {this.state.jobDescription}
          </p>

          {this.state.jobRequirements==='Not needed'?null:jobReq}
          ________________________________________________________________________________________________

          <br/>

        {this.state.startDate==="Not needed"?null:StartDate}          
        {this.state.duration==='Not needed'?null: Duration}
          <u
            style={{color:"black", fontWeight:"bold",fontStyle:"italic",fontSize:"0.8em"}}>
              Salary:
          </u> 
          <h9
            style={{color:"grey", fontStyle:"monospace",fontSize:"0.75em"}}>
              &nbsp;{this.state.salary}.
          </h9> 
          <br/>

          <u
            style={{color:"black", fontWeight:"bold",fontStyle:"italic",fontSize:"0.8em"}}>
               Vacancies:
          </u> 
          <h9
            style={{color:"grey", fontStyle:"monospace",fontSize:"0.75em"}}>
               &nbsp;{this.state.vacancies}.
          </h9> 
          {this.state.experienceNeeded!=="Not needed"? Experience:null}
          {this.state.applicationDeadline==="Not needed"? null:ApplicationDeadline}

          <div 
        class="panel panel-default" 
        style=
        {
            {
             height: "60px",
             width: "300px",
             backgroundColor: "#C0C0C0",      
             opacity: '0.8',
             position: "fixed",
             top:"80px",
             right:"155px"
            }
        }
        >
          <h9
              style={{color:"black", fontWeight:"bold",marginLeft:"10px",paddingBottom:"30px"}}>
               Applied
               <h9
              style={{color:"black", fontWeight:"bold",marginLeft:"10px",marginTop:"10px"}}>
               Viewed
              </h9>
              <h9
              style={{color:"black", fontWeight:"bold",marginLeft:"10px",paddingTop:'30px'}}>
               Accepted
              </h9>
              <h9
              style={{color:"black", fontWeight:"bold",marginLeft:"10px"}}>
               Rejected
              </h9>
          </h9>

          <br/>

          <h9
              style={{color:"white", fontWeight:"bold",marginLeft:"30px",paddingBottom:"30px"}}>
               {this.state.totalNumberOfApplicants}
               <h9
              style={{color:"white", fontWeight:"bold",marginLeft:"60px",marginTop:"10px"}}>
               {this.state.numberOfViewedApplications}
              </h9>
              <h9
              style={{color:"white", fontWeight:"bold",marginLeft:"65px",paddingTop:'30px'}}>
               {this.state.numberOfAcceptedApplications}
              </h9>
              <h9
              style={{color:"white", fontWeight:"bold",marginLeft:"65px"}}>
               {this.state.numberOfRejectedApplications}
              </h9>
          </h9>
          <br/>
          <br/>
          <br/>

          <div
          style={{top:"0"}}
          >
          <Button  
          title="Click to delete the job"
          onClick={() => this.redirectDelete(this.state.job._id)}
          style={{position:"absolute",float:"right",right:"5px",width: '70px', height: '40px',backgroundColor:"#3399FF" ,color:"white",hover:"white",fontSize:"0.7em"}}>
          Delete
          </Button> 

          <Button  
          title="Click to view applicants"
          onClick={() => this.redirectApplicants(this.state.job._id)}
          style={{position:"absolute",float:"right",left:"105px",width: '90px', height: '40px',backgroundColor:"#3399FF" ,color:"white",hover:"white",fontSize:"0.7em"}}>
          Applicants
          </Button> 

          <Button  
          title="Click to view company and uploader"
          onClick={() => this.redirectEmployer(this.state.job.employerId)}
          style={{position:"absolute",float:"right",left:"2px",width: '90px', height: '40px',backgroundColor:"#3399FF" ,color:"white",hover:"white",fontSize:"0.7em"}}>
          Company
          </Button> 

          </div>     
           </div> 
           
          </div>
        </Card.Body>
      </Card>
      
      </div>
      
      );
  };

    render() {
      return (
        <div>
        {this.getAttributes()}
        </div>
        
        );
    }
  }
export default AdminJobDetails
