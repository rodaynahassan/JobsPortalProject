
 import  React, { Component ,Button} from 'react';
 import axios from 'axios';
 import swal from 'sweetalert';

 class ApplicantsTable extends Component {
    state={
        firstName:'',
        lastName:'',
        cvType:''
    }
    componentDidMount()
    {
        axios
        .get('/routes/api/jobSeekers/getByID/'+this.props.form.userId)
        .then((response) => {
            console.log(response.data.data.firstName)
            this.setState({
                firstName: response.data.data.firstName,
                lastName: response.data.data.lastName,
            });
        }
       );

       axios
       .get('/routes/api/cvs/getByJobSeekerId/'+localStorage.getItem('userId'))
       .then((res) => {
           console.log(res.data.data[0].type)
           this.setState({cvType:res.data.data[0].type})
       })


    }

    redirectCV()
    {
        if(this.state.cvType==="Public")
        {
        document.location.href = '/viewcv';
        }
        if (this.state.cvType==="Private")
        {
            swal("Unfortunately, you can't view the applicant's cv because of its privacy. You can send them an email asking for the CV.")
        }
    }

    redirectAccept(jobId,userId)
    {
        console.log(jobId)
        console.log(userId)
        axios
        .put('/routes/api/jobs/AcceptAJobSeeker/'+jobId+'/'+userId)   
        .then(function (response) {
            swal('This applicant has been accepted')
            setTimeout("document.location.href = '/applicants'",1500);
           })
    }

    redirectReject(jobId,userId)
    {
        console.log(jobId)
        console.log(userId)
    
        axios
        .put('/routes/api/jobs/RejectAJobSeeker/'+jobId+'/'+userId) 
        .then(function (response) {
            swal('This applicant has been rejected')
            setTimeout("document.location.href = '/applicants",1500);
           })

    }

    redirectGet(userApplicationId)
    {
        console.log(this.props.jobId)
        console.log(this.props.form.userId)
        axios
        .put('/routes/api/jobs/viewAnApplication/'+this.props.jobId+'/'+this.props.form.userId)   
        localStorage.setItem('jobId',this.props.jobId) 
        localStorage.setItem('userId',this.props.form.userId)
        localStorage.setItem('userApplicationId',userApplicationId)
        console.log(userApplicationId)
        setTimeout(document.location.href = '/viewapplication',3000)
      
    }

    redirectUser(userId)
    {
        localStorage.setItem('jobId',this.props.jobId) 
        localStorage.setItem('userId',userId)
        console.log(userId)
        document.location.href = '/viewprofile';
    }

     render()
     {
         return (
             <tr  >
                 <td style={{paddingLeft:"10px"}}>{this.state.firstName}&nbsp;{this.state.lastName} </td>
                 <td>
            <button 
            style={{fontSize:"0.8em",width:"130px"}} 
            className="btn btn-primary"
            onClick={() => this.redirectGet(this.props.form._id)}
            >
                View application
            </button>
          </td>
          <td style={{paddingLeft:"10px"}}>
              {this.props.form.status}
          </td>

          <td>
            <button 
            style={{fontSize:"0.8em"}} 
            className="btn btn-primary"
            onClick={() => this.redirectUser(this.props.form.userId)}
            >View profile</button>
          </td>

          <td>
            <button 
            style={{fontSize:"0.8em"}} 
            className="btn btn-primary"
            onClick={() => this.redirectCV()}
            >View CV</button>
          </td>

          <td>
            <button 
            style={{fontSize:"0.8em",backgroundColor:"#4CAF50"}} 
            className="btn"
            onClick={() => this.redirectAccept(this.props.jobId,this.props.form.userId)}
            >Accept</button>
          </td>

          <td>
            <button 
            style={{fontSize:"0.8em",backgroundColor:"red"}} 
            className="btn"
            onClick={() => this.redirectReject(this.props.jobId,this.props.form.userId)}
            >Reject</button>
          </td>


             </tr>   
         )   
         
     }
 }
 export default ApplicantsTable