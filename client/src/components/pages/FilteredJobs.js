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


class FilteredJobs extends Component
{
    constructor(props){
        super(props);
        this.state={
            jobs:[],
            categories:[],
            modalShow: false,
            filters:[],
            filters1:[],
            flag:false,
        };
}

changeHandler = (event) => {
  var temp=this.state.filters
  temp.push(event.target.label)
  this.setState({ filters: temp});
  console.log(temp)
};

redirectFilter()
{
  localStorage.setItem('filters',this.state.filters)
  localStorage.setItem('filters1',this.state.filters1)
document.location.href = '/filteredjobs';
}

handleChange = (event) => {
  var temp=this.state.filters
  var index='';
  if(temp.includes(event.target.value))
  {
    for(var i=0;i<temp.length;i++)
    {
      if(temp[i]===event.target.value)
      {
        index=i;
        break;
      }
    }
    temp.splice(i,1)
  }
  else
  {
    temp.push(event.target.value)
  }
  this.setState({ filters: temp});
  console.log(this.state.filters)
}

handleChange1 = (event) => {
  var temp1=this.state.filters1
  var index1='';
  if(temp1.includes(event.target.value))
  {
    for(var j=0;j<temp1.length;j++)
    {
      if(temp1[j]===event.target.value)
      {
        index1=j;
        break;
      }
    }
    temp1.splice(j,1)
  }
  else
  {
    temp1.push(event.target.value)
  }
  this.setState({ filters1: temp1});
  console.log(this.state.filters1)
}


redirectGet(jobId) {
  localStorage.setItem('jobId', jobId);
  console.log(jobId)
  document.location.href = '/jobdetails';
}

redirectSave(jobId) {
  var apiBaseUrl = '/routes/api/jobs/saveAJob/5e7d35d36626c516005f62a1/'+jobId
  axios.put(apiBaseUrl)
        .then(function(response) {
          if(response.data.msg!=="You have already saved this job before. You can view it in the 'Saved jobs' page.")
          {
            swal({
                title: "You have saved the job successfully!",
                icon: "success",
                buttons: {
                    catch: {
                        text: "Show saved jobs",
                        value: "saved",
                      },
                      defeat: {
                        text: "Homepage",
                        value: "home",
                      },  
                }
              })
              .then((value) => {
                switch (value) {
            
                  case "saved":
                    document.location.href = '/savedjobs';
                    break;
                  case "home":
                     document.location.href = '/';
                     break;  
                  default:
                    document.location.href = '/';
                }
              });
            }
            else
            {
              swal({
                title: "You have already saved this job before. You can view it in the 'Saved jobs' page.",
                buttons: {
                    catch: {
                        text: "Show saved jobs",
                        value: "saved",
                      },
                      defeat: {
                        text: "Homepage",
                        value: "home",
                      },  
                }
              })
              .then((value) => {
                switch (value) {
            
                  case "saved":
                    document.location.href = '/savedjobs';
                    break;
                  case "home":
                     document.location.href = '/';
                     break;  
                  default:
                    document.location.href = '/';
                }
              });
            }       
            })
}
componentDidMount()
    {
        var apiBaseUrl = '/routes/api/jobs/getJobsByCategoryAndType';
        var payload = {
          categories: localStorage.getItem('filters'),
          types: localStorage.getItem('filters1')
        };
        console.log(localStorage.getItem('filters'))
          axios.post(apiBaseUrl,payload)
                  .then((response) => {
                      console.log("hi")
                      console.log(response.data.data)
                      this.setState({jobs:response.data.data});
                      if(response.data.data.length===0){
                        this.setState({flag:true})
                    }   
                  });

       
         }         
                  
    
  
noJobs=()=>
{
    swal({
        title: "Unfortunately, there are no jobs based on your filters.",
        text: "Try to search for another categories/types and Good Luck!",
        icon: "error",
        buttons: {
            catch: {
                text: "Browse another jobs",
                value: "home",
              },
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
      });
}
getAttributes = () => {

    let modalClose = () => this.setState({ modalShow: false });
    return this.state.jobs.map((Job, index) => {
      // this.setState({datePosted:Job.datePosted.substring(0,10)})
      // // const date=this.state.datePosted.substring(0,10)
      // console.log(this.state.datePosted)
    //   con
      var languages=Job.languages
      var languagesS=""
      for(var j=0;j<languages.length;j++){
        languagesS=languagesS+","+ languages[j]
      }
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
            height:"340px",
            paddingLeft:"10px",
            backgroundColor:'rgba(0,0,0,0.030)',
            marginLeft:"670px"
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
                 Languages needed:&nbsp; {languagesS.substring(1)}.
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
              style={{ width: '90px', height: '40px',backgroundColor:"#3399FF" ,color:"white",hover:"white",fontSize:"0.9em",marginLeft:"600px",marginTop:"10px"}}  
              >
              Details
              </Button> 

			 <Button  
				title="Click to save the job"
				onClick={() => this.redirectSave(Job._id)}
				style={{ width: '90px', height: '40px',backgroundColor:"#3399FF" ,color:"white",hover:"white",fontSize:"0.9em",marginLeft:"470px",marginTop:"-77px"}}  
				>
            Save
            </Button>               
            </div>
          </Card.Body>
        </Card>
        </div>
        
      );
        
    })

};
// noJobs=()=>{
//     // window.setTimeout(this.noJobs,4500)

//     return(

//         <div>
//         <br/>
//         <br/>
//         <br/>
//         <Card 
//         style={{
//             width:"50%",
//             height:"250px",
//             paddingLeft:"10px",
//             backgroundColor:'rgba(0,0,0,0.001)',
//             marginLeft:"670px"
//             }}
//         >
//           <Card.Body style={{backgroundColor:"dark"}}>
//             <div>
//               <br/>
//               <br/>
//            <span style={{color:"white", fontStyle:"italic",fontSize:"20px", fontWeight:"bold",backgroundColor:"black"}}>&nbsp;Unfortunately, there are no jobs based on your filters.&nbsp;
//                     </span>
            

            
//             </div>
//           </Card.Body>
//         </Card>
//         </div>
        
//       );
    
// }
  render() {
    // {window.setTimeout(this.noJobs,4500)}

    // var NoJobs=(
    //   <div>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <h4>
    //         No jobs
    //         </h4>
    //       </div>
    //     );
    return (
      
        <div>

            {this.state.flag===false? this.getAttributes():this.noJobs()}

          {/* {this.getAttributes()} */}
          <Card 
        style={{
            width:"490px",
            height:"650px",
            paddingLeft:"0.5px",
            backgroundColor:'rgba(0,0,0,0.005)',
            marginLeft:"30px",
            top:"70px",
            position:"fixed",
            paddingTop:"0.1px"
            }}
        >
          <Card.Body style={{backgroundColor:"dark"}}>
            <div>
            <u
            style={{color:"black",fontWeight:"bold",fontSize:"20px"}}>
              Filter the jobs by:   
            </u> 
        <br/>
            
              <span style={{backgroundColor: "#66B2FF",color:"white",fontSize:"15px", fontStyle:"monospace",width:"80px",height:"30px"}}>&nbsp;Category&nbsp; </span>
              <br/>
              <div class="row"  >
              <div class="col-sm-4">

            <FormControlLabel
        control={
          <Checkbox
            fontSize="2px"
            onChange={this.handleChange}
            color="primary"
            value="IT/Software development"
            style={{marginLeft:"0.5px",fontSize:"2px"}}
          />
        }
        label="IT/Software development"
        style={{fontSize:"2px"}}
      />

      <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            color="primary"
            value="Pharmacy"
            style={{marginLeft:"0.5px"}}
          />
        }
        label="Pharmacy"
      />

    
    <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            color="primary"
            value="Engineering-Civil/Architecture"
            style={{marginLeft:"0.5px"}}
          />
        }
        label="Engineering-Civil/Architecture"
      />

    <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            name="checkedB"
            color="primary"
            value="Engineering-Mechatronics"
            style={{marginLeft:"0.5px"}}
          />
        }
        label="Engineering-Mechatronics"
      />

    <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            color="primary"
            value="Customer service"
            style={{marginLeft:"0.5px"}}
          />
        }
        label="Customer service"
      />

    <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            color="primary"
            value="Marketing/PR"
            style={{marginLeft:"0.5px"}}
          />
        }
        label="Marketing/PR"
      />


    <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            color="primary"
            value="Administration"
            style={{marginLeft:"0.5px"}}
          />
        }
        label="Administration"
      />

      </div>
    

      <div class="col-sm-4">
      <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            value="Accounting/finance"
            color="primary"
          />
        }
        label="Accounting/finance"
      />

      <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            value="Business development"
            color="primary"
          />
        }
        label="Business development"
      />

    <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            value="Media/Journalism"
            color="primary"
          />
        }
        label="Media/Journalism"
      />

    
    <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            value="Project Management"
            color="primary"
          />
        }
        label="Project Management"
      />

    <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            value="Tourism/Travel"
            color="primary"
          />
        }
        label="Tourism/Travel"
      />


    <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            value="Engineering-Telecom"
            color="primary"
          />
        }
        label="Engineering-Telecom"
      />

      </div>
      <div class="col-sm-4">

    
    <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            value="HR"
            color="primary"
          />
        }
        label="HR"
      />

    <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            name="checkedB"
            value="Sports"
            color="primary"
          />
        }
        label="Sports"
      />

    <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            value="Fashion"
            color="primary"
          />
        }
        label="Fashion"
      />


    <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            value="Sales"
            color="primary"
          />
        }
        label="Sales"
      />

      <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            value="Medical"
            color="primary"
          />
        }
        label="Medical"
      />

    <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange}
            value="Legal"
            color="primary"
          />
        }
        label="Legal"
      />

      </div>
      </div>

      <span style={{backgroundColor: "#66B2FF",color:"white",fontSize:"15px", fontStyle:"monospace",width:"80px",height:"30px"}}>&nbsp;Job Type&nbsp; </span>
              <br/>
              <div class="row"  >
              <div class="col-sm-4">

            <FormControlLabel
        control={
          <Checkbox
            fontSize="2px"
            onChange={this.handleChange1}
            color="primary"
            value="Part time"
            style={{marginLeft:"0.5px",fontSize:"2px"}}
          />
        }
        label="Part time"
        style={{fontSize:"2px"}}
      />

      <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange1}
            color="primary"
            value="Full time"
            style={{marginLeft:"0.5px"}}
          />
        }
        label="Full time"
      />
</div>
      <div class="col-sm-4">
      <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange1}
            value="Work from home"
            color="primary"
          />
        }
        label="Work from home"
      />

      <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange1}
            value="Freelancing"
            color="primary"
          />
        }
        label="Freelancing"
      />


      </div>
      <div class="col-sm-4">

    
    <FormControlLabel
        control={
          <Checkbox
            onChange={this.handleChange1}
            value="Internship"
            color="primary"
          />
        }
        label="Internship"
      />

      </div>

							</div>
              <Button  
				onClick={() => this.redirectFilter()}
				style={{ width: '140px', height: '30px',backgroundColor:"#3399FF" ,color:"white",hover:"white",fontSize:"0.8em",marginLeft:"290px"}}  
				>
            Apply filters
            </Button>   
</div>
          </Card.Body>
          </Card>
          </div>
        
        
    );
  }
}
export default FilteredJobs
