import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import '../../App.css';
import { black } from 'material-ui/styles/colors';
import { blue200 } from 'material-ui/styles/colors';
import swal from 'sweetalert';
const mongoose = require('mongoose');


class AddAnInternship extends Component{
    constructor(props)
    {
        super(props);
        this.state=
        {
            newInternship:''
        }
    }
     

    handleClick = (cvId,event) =>
    {
        console.log(cvId)
    //   axios.defaults.headers.common['Authorization'] =  localStorage.getItem('jwtToken');
    console.log(this.state.newInternship)
        var apiBaseUrl =('/routes/api/cvs/addANewInternship/'+mongoose.Types.ObjectId(cvId))
        var payload={
            newInternship: this.state.newInternship
        }
        axios.put(apiBaseUrl, payload)
       .then(function (response) {
        swal('Internship has been added succesfully!')
        setTimeout("document.location.href = '/editcv';",1500);
       })
       .catch(function (error) {
         console.log(error);
       });
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    
    validateForm ()
    {
        return (
        this.state.newInternship.length >= 3
        )
    }

    render() {
        
        return (
            <div>

            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" style={{color:"blue"}}>
               Type the internship that you want to add (only ONE internship). 
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <input type="text" placeholder="New internship" value={this.state.newInternship} name="newInternship" style={{width: "775px" , height:"100px"}} onChange={ this.changeHandler} />
                
                <Button
                className="btn-block btn-rounded z-depth-1a"
                variant="omar"
                value="Add Internship"
                style={{width: "200px",marginTop:"20px", fontSize:"20px",backgroundColor:"#a3dbff",color:black}}
                onClick={(event) => 
                    this.handleClick(this.props.cvId)
                }
                disabled={!this.validateForm()}
                >Add Internship</Button>
                </Modal.Body>
                <Modal.Footer>
                <Button variant='red' onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
           </div>
          )
    }
}

export default AddAnInternship;