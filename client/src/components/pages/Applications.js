import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Button,Card} from"react-bootstrap"
import { blue200 } from 'material-ui/styles/colors';


class Applications extends Component
{
    constructor(props){
        super(props);
        this.state={
            userApplications:[],
            appliedJobs:[],
            status:'',
            modalShow: false,
            userApplication:[],
            jobTitle:'',
            category:'',
            companyName:'',
            city:'',
            country:'',
            jobType:'',
            careerLevel:'',
            languages:'',
            datePosted:''
        };
}

redirectEdit(userApplicationId) {
  localStorage.setItem('userApplicationId', userApplicationId);
  console.log(userApplicationId)
  document.location.href = '/editapplication';
}
componentDidMount()
    {
       
        axios.get('/routes/api/userApplications/getByuserID/5e7d35d36626c516005f62a1')
                .then((response) => {
                    console.log(response.data.data)
                    this.setState({
                      userApplications:response.data.data,
                    });  
                });  
                
                axios.get('/routes/api/jobs/getEmployeeAppliedJobs/5e7d35d36626c516005f62a1')
                .then((response) => {
                    console.log(response.data.status)
                    this.setState({
                      appliedJobs:response.data.appliedJobs,
                      status:response.data.status
                    });  
                });


  }
  

getAttributes = () => {
  var Applied=(
    <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style={{width: "33%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Applied</div>
          </div>
  );

  var Viewed=(
    <div class="progress">
    <div class="progress-bar bg-warning" role="progressbar" style={{width: "33%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Applied</div>
    <div class="progress-bar" role="progressbar" style={{width: "33%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Viewed</div>
  </div>
  );

  var Accepted=(
    <div class="progress">
    <div class="progress-bar bg-warning" role="progressbar" style={{width: "33.3%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Applied</div>
    <div class="progress-bar" role="progressbar" style={{width: "33.3%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Viewed</div>
    <div class="progress-bar bg-success" role="progressbar" style={{width: "33.3%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Accepted</div>
  </div>
  );

  var Rejected=(
    <div class="progress">
    <div class="progress-bar bg-warning" role="progressbar" style={{width: "33.3%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Applied</div>
    <div class="progress-bar" role="progressbar" style={{width: "33.3%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Viewed</div>
    <div class="progress-bar bg-danger" role="progressbar" style={{width: "33.3%"}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">Rejected</div>
  </div>
  );
    let modalClose = () => this.setState({ modalShow: false });
    return this.state.appliedJobs.map((Job, index) => {
      // console.log(this.state.userApplications[index]._id)
      // var languages=Job.languages
      // var languagesS=""
      // for(var j=0;j<languages.length;j++){
      //   languagesS=languagesS+","+ languages[j]
      // }

      return (
        <div>
        <br/>
        <br/>
        <br/>
        <Card 
        style={{
            width:"50%",
            height:"250px",
            paddingLeft:"10px",
            backgroundColor:'rgba(0,0,0,0.030)',
            marginLeft:"400px"
            }}
        >
          <Card.Body style={{backgroundColor:"dark"}}>
            <div>
            
            <h4 style={{color:"#333FFF", fontFamily:"arial",fontWeight:"bold"}}>
                    {Job.jobTitle}.  <span style={{color:blue200, fontStyle:"italic",fontSize:"0.7em", fontFamily:"monospace",backgroundColor:"black"}}>&nbsp;{Job.category}&nbsp;
                    </span>
            </h4>

            <br/>

            <h9
              style={{color:"black", fontStyle:"monospace", fontWeight:"bold",fontSize:"0.9em"}}>
                 {Job.companyName}-&nbsp;
                 <h9
                  style={{color:"grey", fontFamily:"italic"}}>
                  {Job.city}, {Job.country}.
                </h9>
            </h9>
            <br/>
            Job Type: &nbsp;
            <span style={{backgroundColor: "#66B2FF",color:"white", fontStyle:"monospace"}}> {Job.jobType}&nbsp; </span>
            <br/>
            Career Level:&nbsp; 
          <span style={{backgroundColor: "#66B2FF",color:"white", fontStyle:"monospace"}}> {Job.careerLevel}&nbsp; </span>
            <br/>
            <h7 
              style={{color:"black", fontStyle:"monospace",fontSize:"0.91em"}}>
                 Languages needed:&nbsp; {Job.languages}.
            </h7> 
            <br/>
            <br/>
            {/* <h7 
              style={{color:"grey", fontStyle:"italic",fontSize:"0.56em"}}>
                 (Posted on {Job.datePosted})
            </h7>    */}

              {/* <div class="progress">
              <div class="progress-bar bg-success" style={{width:"35%"}}>
                Free Space
              </div>
              <div class="progress-bar bg-warning" style={{width:"35%"}}>
                Warning
              </div>
              <div class="progress-bar bg-danger" style={{width:"35%"}}>
                Danger
              </div>
            </div>   */}
            {this.state.status[index]==='Applied'?Applied:null}
            {this.state.status[index]==='Viewed'?Viewed:null}
            {this.state.status[index]==='Accepted'?Accepted:null}
            {this.state.status[index]==='Rejected'?Rejected:null}

            <Button  
              title="Click to edit the application"
              onClick={() => this.redirectEdit(this.state.userApplications[index]._id)}
              style={{ width: '84px', height: '30px',backgroundColor:"#3399FF" ,color:"white",hover:"white",fontSize:"0.65em",marginLeft:"550px",marginTop:"-390px"}}  
              >
              Edit
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
        <div>
        </div>
        {this.getAttributes()} 
      </div>
    );
  }
}
export default Applications
