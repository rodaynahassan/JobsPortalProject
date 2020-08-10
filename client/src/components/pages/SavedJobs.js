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

class SavedJobs extends Component
{
    constructor(props){
        super(props);
        this.state={
            jobs:[],
            modalShow: false,
            flag:false
        };
}

redirectGet(jobId) {
  localStorage.setItem('jobId', jobId);
  console.log(jobId)
  document.location.href = '/jobdetails';
}

redirectUnsave(jobId) {
    // localStorage.setItem('jobId', jobId);
    // console.log(jobId)
    // axios.get('/routes/api/jobSeekers/getByID/5e7d35d36626c516005f62a1')
    //             .then((response) => {
    //                 console.log("Hi")
    //                 console.log(response.data.data)
    //                 this.setState({jobs:response.data.data.savedJobs});
    //                 // this.setState({jobs:response.data.data[0]});

    //             });
    // document.location.href = '/application';
var apiBaseUrl = '/routes/api/jobs/unsaveAJob/5e7d35d36626c516005f62a1/'+jobId;

// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
axios
.put(apiBaseUrl)
.then(function(response) {
          swal("You have unsaved the job.")
          setTimeout("document.location.href = '/savedjobs';",1500);
        });

      }
componentDidMount()
    {
        axios.get('/routes/api/jobSeekers/getByID/5e7d35d36626c516005f62a1')
                .then((response) => {
                    this.setState({jobs:response.data.data.savedJobs});
                    if(response.data.data.savedJobs.length===0){
                      this.setState({flag:true})
                  }   
                    // this.setState({jobs:response.data.data[0]});

                });
  }
  
  noJobs=()=>
  {
    swal({
      title: "You don't have any saved jobs",
      icon: "error",
      buttons: {
         
            defeat:
            {
              text: "Browse jobs",
              value: "home",
            }
      }
    })
    .then((value) => {
      switch (value) {
  
       
           case "home":
            document.location.href = '/jobs';
            break;  
        default:
          document.location.href = '/jobs';
      }
    })  
  }
getAttributes = () => {
    let modalClose = () => this.setState({ modalShow: false });
    return this.state.jobs.map((Job, index) => {

      // this.setState({datePosted:Job.datePosted.substring(0,10)})
      // // const date=this.state.datePosted.substring(0,10)
      // console.log(this.state.datePosted)
      // console.log(Job.languages[0])
      // var languages=Job.languages
      // var languagesS=""
      // for(var j=0;j<languages.length;j++){
      //   languagesS=languagesS+","+ languages[j]
      // }
      var it=
      (
       <div>
       <img src={IT} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Fashion=
      (
       <div>
       <img src={fashion} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var pharma=
      (
       <div>
       <img src={pharmacy} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Sales=
      (
       <div>
       <img src={sales} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Civil=
      (
       <div>
       <img src={civil} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Mecha=
      (
       <div>
       <img src={mecha} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Customer=
      (
       <div>
       <img src={customer} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Marketing=
      (
       <div>
       <img src={marketing} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Finance=
      (
       <div>
       <img src={finance} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Administration=
      (
       <div>
       <img src={administration} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Media=
      (
       <div>
       <img src={media} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var HR=
      (
       <div>
       <img src={hr} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Sports=
      (
       <div>
       <img src={sports} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Fashion=
      (
       <div>
       <img src={administration} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Project=
      (
       <div>
       <img src={project} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Telecom=
      (
       <div>
       <img src={telecom} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Travel=
      (
       <div>
       <img src={travel} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Medical=
      (
       <div>
       <img src={medical} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Legal=
      (
       <div>
       <img src={legal} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
       </div>
      );
 
      var Business=
      (
       <div>
       <img src={business} width="70" heigth="60" style={{ color: "#3388FF"}} alt="" /><span style={{color:blue200, fontStyle:"italic",fontSize:"1.25em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;</span>
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
            height:"350px",
            paddingLeft:"10px",
            backgroundColor:'rgba(0,0,0,0.030)',
            marginLeft:"400px"
            }}
        >
          <Card.Body style={{backgroundColor:"dark"}}>
            <div>
            <h4 style={{color:"#333FFF", fontFamily:"arial",fontWeight:"bold"}}>{Job.jobTitle}.</h4>
            {Job.category==='IT/Software development'? it:null}
            {Job.category==='Pharmacy'? pharma:null}
            {Job.category==='Sales'? Sales:null}
            {Job.category==='Engineering-Civil/Architecture'? Civil :null}
            {Job.category==='Engineering-Mechatronics'? Mecha:null}
            {Job.category==='Customer service'? Customer:null}
            {Job.category==='Marketing/PR'? Marketing:null}
            {Job.category==='Accounting/finance'? Finance:null}
            {Job.category==='Administration'? Administration:null}
            {Job.category==='Media/Journalism'? Media:null}
            {Job.category==='HR'? HR:null}
            {Job.category==='Sports'? Sports:null}
            {Job.category==='Fashion'? Fashion:null}
            {Job.category==='Project Management'? Project:null}
            {Job.category==='Engineering-Telecom'? Telecom:null}
            {Job.category==='Tourism/Travel'? Travel:null}
            {Job.category==='Medical'? Medical:null}
            {Job.category==='Legal'? Legal:null}
            {Job.category==='Business development'? Business:null}

            <h8
              style={{color:"black", fontStyle:"monospace", fontWeight:"bold",fontSize:"1.2em"}}>
                 {Job.companyName}-&nbsp;
                 <h9
                  style={{color:"grey", fontFamily:"italic"}}>
                  {Job.city}, {Job.country}.
                </h9>
            </h8>
            <br/>
            Job Type: &nbsp;
            <span style={{backgroundColor: "#66B2FF",color:"white", fontStyle:"monospace",border: "2px solid black"}}> {Job.jobType}&nbsp; </span>
            <br/>
            Career Level:&nbsp; 
          <span style={{backgroundColor: "#66B2FF",color:"white", fontStyle:"monospace",border: "2px solid black"}}> {Job.careerLevel}&nbsp; </span>
            <br/>
            <h7 
              style={{color:"black", fontStyle:"monospace",fontSize:"1em"}}>
                 Languages needed:&nbsp; {Job.languages}.
            </h7> 
            <br/>
            <br/>
            <h7 
              style={{color:"grey", fontStyle:"italic",fontSize:"0.77em"}}>
                 (Posted on {Job.datePosted})
            </h7>   
            <Button  
              title="Click to view the job details"
              onClick={() => this.redirectGet(Job._id)}
              style={{ width: '90px', height: '40px',backgroundColor:"#3399FF" ,color:"white",hover:"white",fontSize:"0.9em",marginLeft:"600px",marginTop:"20px"}}  
              >
              Details
              </Button> 

			 <Button  
				title="Click to unsave to the job"
				onClick={() => this.redirectUnsave(Job._id)}
				style={{ width: '90px', height: '40px',backgroundColor:"#3399FF" ,color:"white",hover:"white",fontSize:"0.9em",marginLeft:"470px",marginTop:"-77px"}}  
				>
            Unsave
            </Button>               
            </div>
          </Card.Body>
        </Card>
        </div>
        
      );
    })};

  render() {
  //  var noJobs=(
  //     swal({
  //       title: "You don't have any saved jobs",
  //       icon: "error",
  //       buttons: {
  //           catch: {
  //               text: "OK",
  //               value: "saved",
  //             },
  //             defeat:
  //             {
  //               text: "Browse jobs",
  //               value: "home",
  //             }
  //       }
  //     })
  //     .then((value) => {
  //       switch (value) {
    
  //         case "saved":
  //            document.location.href = '/savedjobs';
  //            break;  
  //            case "home":
  //             document.location.href = '/jobs';
  //             break;  
  //         default:
  //           document.location.href = '/savedjobs';
  //       }
  //     })
    
  //   );
    return (
        
      <div>
        <div>
        </div>
        {this.state.flag===false? this.getAttributes():this.noJobs() } 
      </div>
    );
  }
}
export default SavedJobs
