import React, { Component } from "react";
import { Button,Table} from 'react-bootstrap';
import swal from 'sweetalert';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBSelect,MDBInputGroup ,MDBSelectInput, MDBSelectOptions, MDBSelectOption} from 'mdbreact';
// import { Table } from 'semantic-ui-react';
import axios from 'axios';
import SortPage from './ApplicantsTable';

class inputPage extends Component {
  state = {
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
    axios
    .get('/routes/api/userApplications/getByJobId/5f1b0bf6d5162b3b9ca64eb5')
    .then((res) => {
      this.setState({ applications: res.data.data});
    })
}

  

  tabRow() {
		return this.state.applications.map(function(form, i) {
    //   axios
    //   .get('/routes/api/jobSeekers/getByID/'+form.userId)
    //   .then((response) => {
    //       console.log(response.data.data.firstName)
    //       this.setState({
    //           firstName: response.data.data.firstName,
    //           lastName: response.data.data.lastName,
    //       });
    //   }
    //  );
      console.log(form.userId)
			return <SortPage form={form} key={i} formId={form._id} />;
		});
	}

  changeHandler1 = event => {
    if(event.target.name==='selectedOptionExp' && event.target.value==='option1')
    {
      this.setState({ flagReq: false});
    }

    if(event.target.name==='selectedOptionExp' && event.target.value==='option2')
    {
      this.setState({ flagReq: true });
    }

    this.setState({ [event.target.name]: event.target.value });
};


  decrease = () => {
    if(this.state.value===1)
    {
      return swal("The minimum number of questions is 1!")
    }
    this.setState({ value: this.state.value - 1 });
  }

  increase = () => {
    if(this.state.value===10)
    {
      return swal("The maximum number of questions is 10!")
    }

    this.setState({ value: this.state.value + 1 });
  }

  changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}


  render() {
    return (
      <div>
          <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
							<MDBCol>
                    <MDBInput
                        required 
                                        label= "Question 1"
                                        type="text"
                                        name="jobTitle"
                                        value={this.state.question1}
                                        // className={
                                        //         this.state.jobTitle.length >= 3 ? (
                                        //             'is-valid'
                                        //         ) : (
                                        //             'is-invalid'
                                        //         )
                                        //     } 
                                        onChange={this.changeHandler}
                                        >
                                </MDBInput>

                                

                            </MDBCol>

						</MDBRow>
            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"400px"}}>
							<MDBCol>

            <MDBInput
            style={{width:"40px"}}
                                  required 
                                  disabled={this.state.flagReq} 

                                        label= "Minimum characters"
                                        type="number"
                                        name="minChar"
                                        value={this.state.minChar}
                                        onChange={this.changeHandler}
                                        >
                                </MDBInput>

                             
                                </MDBCol>
                                <MDBCol>

                                <MDBInput
                                            style={{width:"40px"}}

                                  required 
                                  disabled={this.state.flagReq} 

                                        label= "Maximum characters"
                                        type="number"
                                        name="maxChar"
                                        value={this.state.maxChar}
                                        onChange={this.changeHandler}
                                        >
                                </MDBInput>
                                </MDBCol>
</MDBRow>

            <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionExp"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionExp === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;I want to add it.
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionExp"
                                        checked={this.state.selectedOptionExp === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;I don't need it.
                        </label>
                        </div>

                        {/* <Table size="sm" striped bordered hover >
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table> */}


<Table bordered hover variant="dark" size="sm" style={{width:"40%", marginLeft:"100px"}}>
					<thead>
						<tr>
							<th style={{color:"blue",paddingLeft:"70px"}} >Name</th>
              <th style={{width:"20px",color:"blue",paddingLeft:"40px"}} colSpan="1.5">Application</th>
							<th style={{color:"blue",paddingLeft:"20px"}}>Status </th>
							<th style={{color:"blue",paddingLeft:"30px"}}>Profile</th>
						</tr>
					</thead>
					<tbody>{this.tabRow()}</tbody>
				</Table>


{/* <Table.Row>
				<Table.HeaderCell>Hi</Table.HeaderCell>
				<Table.HeaderCell>Bye </Table.HeaderCell>
				{/* <Table.HeaderCell>{this.props.ShowUnassignedForm.type} </Table.HeaderCell>
				<Table.HeaderCell>{this.props.ShowUnassignedForm.companyGovernorate} </Table.HeaderCell>
				<Table.HeaderCell>{this.props.ShowUnassignedForm.companyCity} </Table.HeaderCell>
				<Table.HeaderCell>{this.props.ShowUnassignedForm.companyAddress} </Table.HeaderCell>
				<Table.HeaderCell>{this.props.ShowUnassignedForm.companyTelephone} </Table.HeaderCell>
				<Table.HeaderCell>{this.props.ShowUnassignedForm.companyFax} </Table.HeaderCell>
				<Table.HeaderCell>{this.props.ShowUnassignedForm.currency} </Table.HeaderCell>
				<Table.HeaderCell>{this.props.ShowUnassignedForm.equityCapital} </Table.HeaderCell>
				<Table.HeaderCell>{this.props.ShowUnassignedForm.creationDate} </Table.HeaderCell> */}
				{/* <Table.HeaderCell>
          <Button variant="white" block 
          onClick={() => this.props.setFormId(this.props.ShowUnassignedForm)}
          >
						<h3>EDIT</h3>
					</Button>
				</Table.HeaderCell>
				<Table.HeaderCell>
					<Button variant="white" block onClick={() => this.props.delete(this.props.ShowUnassignedForm)}>
						<h3>Delete</h3>
					</Button>
				</Table.HeaderCell>
			</Table.Row> */}
 
      </div>
        // <div className="def-number-input number-input">
        //   <Button style={{marginTop:"2px"}} onClick={this.decrease} >
        //   <i class="fa fa-minus" aria-hidden="true"></i>
        //   </Button>
        //   <input style ={{width:"60px",height:"37px",marginTop:"12px"}}className="quantity" name="quantity" value={this.state.value} onChange={()=> console.log('change')}
        //   type="number" />
        //   <Button style={{marginTop:"2px"}} onClick={this.increase}>
        //   <i class="fa fa-plus" aria-hidden="true"></i>
        //   </Button>
        // </div>
      );
  }
}

export default inputPage;