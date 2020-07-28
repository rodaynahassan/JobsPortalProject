
 import  React, { Component ,Button} from 'react';
 import axios from 'axios';
 import swal from 'sweetalert';

 class AdminApplicantsTable extends Component {
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
        document.location.href = '/adminviewcv';
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
        setTimeout(document.location.href = '/adminviewapplication',3000)
      
    }

    redirectUser(userId)
    {
        localStorage.setItem('jobId',this.props.jobId) 
        localStorage.setItem('userId',userId)
        console.log(userId)
        document.location.href = '/adminviewprofile';
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

             </tr>   
         )   
         
     }
 }
 export default AdminApplicantsTable