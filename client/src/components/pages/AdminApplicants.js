import React, { Component } from "react";
import { Button,Table} from 'react-bootstrap';
import swal from 'sweetalert';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBSelect,MDBInputGroup ,MDBSelectInput, MDBSelectOptions, MDBSelectOption} from 'mdbreact';
// import { Table } from 'semantic-ui-react';
import axios from 'axios';
import AdminApplicantsTable from '../pages/AdminApplicantsTable';


class AdminApplicants extends Component {
  state = {
    flag:false,
    firstName:'',
    lastName:'',
    applications:[],
    value: 1,
    question1:'',
    minChar:0,
    maxChar:0,
    flagReq:true,
    selectedOptionExp:'option2'
  }

  componentDidMount()
  {
    console.log(localStorage.getItem('jobId'))
    axios
    .get('/routes/api/userApplications/getByJobId/'+localStorage.getItem('jobId'))
    .then((res) => {
              if(res.data.data.length===0){
        this.setState({flag:true})
      }

      this.setState({ applications: res.data.data});
    })
}

noApplicants=()=>
{
    swal({
        title: "Unfortunately, there are no applicants for this job.",
        icon: "error",
        buttons: {
            catch: {
                text: "All jobs",
                value: "jobs",
              },
        }
      })
      .then((value) => {
        switch (value) {
    
          case "jobs":
             document.location.href = '/jobs';
             break;  
          default:
            document.location.href = '/jobs';
        }
      });
}


  tabRow() {
		return this.state.applications.map(function(form, i) {
      console.log(form.userId)
			return <AdminApplicantsTable jobId={localStorage.getItem('jobId')}form={form} key={i} formId={form._id} />;
		});
	}

    getAttributes=()=>
    {
        return(
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        <Table bordered hover size="sm" style={{width:"60%", marginLeft:"320px"}}>
					<thead>
						<tr>
							<th style={{color:"blue",paddingLeft:"70px"}} >Name</th>
                            <th style={{width:"20px",color:"blue",paddingLeft:"40px"}} colSpan="1.5">Application</th>
							<th style={{color:"blue",paddingLeft:"20px"}}>Status </th>
							<th style={{color:"blue",paddingLeft:"30px"}}>Profile</th>
                            <th style={{color:"blue",paddingLeft:"30px"}}>CV</th>
						</tr>
					</thead>
					<tbody>{this.tabRow()}</tbody>
				</Table>
                </div>
        )

    }

  render() {
    return (
      <div>
    {this.state.flag===true? this.noApplicants():this.getAttributes()}

<br/>
<br/>

 
      </div>
      );
  }
}

export default AdminApplicants;