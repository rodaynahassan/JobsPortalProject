import 'bootstrap/dist/css/bootstrap.css';
import React , { useState }from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Multiselect from 'react-bootstrap-multiselect';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBSelect,MDBInputGroup ,MDBSelectInput, MDBSelectOptions, MDBSelectOption} from 'mdbreact';
// import { MDBSelectInput, MDBSelectOptions, MDBSelectOption} from "mdbreact";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { Button ,Card,ButtonGroup} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import swal from 'sweetalert';
import IconButton from '@material-ui/core/IconButton';
import { blue300 } from 'material-ui/styles/colors';
// import DeleteIcon from '@material-ui/icons/Delete';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import MultiSelect from "react-multi-select-component";

var mongoose = require('mongoose');


class Questions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            numberOfQuestions: localStorage.getItem('numberOfQuestions'),
            applicationType: localStorage.getItem('applicationType'),
            questionOne:'',
            questionTwo:'',
            questionThree:'',
            questionFour:'',
            questionFive: '',
            questionSix: '',
            questionSeven:'',
            questionEight: '',
            questionNine:'',
            questionTen:'',
            minOne:'0',
            maxOne:'0',
            minTwo:'0',
            maxTwo:'0',
            minThree:'0',
            maxThree:'0',
            minFour:'0',
            maxFour:'0',
            minFive:'0',
            maxFive:'0',
            minSix:'0',
            maxSix:'0',
            minSeven:'0',
            maxSeven:'0',
            minEight:'0',
            maxEight:'0',
            minNine:'0',
            maxNine:'0',
            minTen:'0',
            maxTen:'0',
            flagMinOne:true,
            flagMaxOne:true,
            flagMinTwo:true,
            flagMaxTwo:true,
            flagMinThree:true,
            flagMaxThree:true,
            flagMinFour:true,
            flagMaxFour:true,
            flagMinFive:true,
            flagMaxFive:true,
            flagMinSix:true,
            flagMaxSix:true,
            flagMinSeven:true,
            flagMaxSeven:true,
            flagMinEight:true,
            flagMaxEight:true,
            flagMinNine:true,
            flagMaxNine:true,
            flagMinTen:true,
            flagMaxTen:true,
            selectedOptionMinOne:'option2',
            selectedOptionMaxOne: 'option2',
            selectedOptionMinTwo:'option2',
            selectedOptionMaxTwo: 'option2',
            selectedOptionMinThree:'option2',
            selectedOptionMaxThree: 'option2',
            selectedOptionMinFour:'option2',
            selectedOptionMaxFour: 'option2',
            selectedOptionMinFive:'option2',
            selectedOptionMaxFive: 'option2',
            selectedOptionMinSix:'option2',
            selectedOptionMaxSix: 'option2',
            selectedOptionMinSeven:'option2',
            selectedOptionMaxSeven: 'option2',
            selectedOptionMinEight:'option2',
            selectedOptionMaxEight: 'option2',
            selectedOptionMinNine:'option2',
            selectedOptionMaxNine: 'option2',
            selectedOptionMinTen:'option2',
            selectedOptionMaxTen: 'option2',
        }; 
        console.log(localStorage.getItem('numberOfQuestions'))
        console.log(localStorage.getItem('applicationType'))
}
	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

changeHandler1 = event => {
    //One
    if(event.target.name==='selectedOptionMinOne' && event.target.value==='option1')
    {
      this.setState({ flagMinOne: false ,minOne:''});
    }

    if(event.target.name==='selectedOptionMinOne' && event.target.value==='option2')
    {
      this.setState({ flagMinOne: true ,minOne:0 });
    }

    if(event.target.name==='selectedOptionMaxOne' && event.target.value==='option1')
    {
      this.setState({ flagMaxOne: false ,maxOne:''});
    }

    if(event.target.name==='selectedOptionMaxOne' && event.target.value==='option2')
    {
      this.setState({ flagMaxOne: true ,maxOne:0 });
    }

    //Two
    if(event.target.name==='selectedOptionMinTwo' && event.target.value==='option1')
    {
      this.setState({ flagMinTwo: false ,minTwo:''});
    }

    if(event.target.name==='selectedOptionMinTwo' && event.target.value==='option2')
    {
      this.setState({ flagMinTwo: true ,minTwo:0 });
    }

    if(event.target.name==='selectedOptionMaxTwo' && event.target.value==='option1')
    {
      this.setState({ flagMaxTwo: false ,maxTwo:''});
    }

    if(event.target.name==='selectedOptionMaxTwo' && event.target.value==='option2')
    {
      this.setState({ flagMaxTwo: true ,maxTwo:0 });
    }

    //Three
    if(event.target.name==='selectedOptionMinThree' && event.target.value==='option1')
    {
      this.setState({ flagMinThree: false ,minThree:''});
    }

    if(event.target.name==='selectedOptionMinThree' && event.target.value==='option2')
    {
      this.setState({ flagMinThree: true ,minThree:0 });
    }

    if(event.target.name==='selectedOptionMaxThree' && event.target.value==='option1')
    {
      this.setState({ flagMaxThree: false ,maxThree:''});
    }

    if(event.target.name==='selectedOptionMaxThree' && event.target.value==='option2')
    {
      this.setState({ flagMaxThree: true ,maxThree:0 });
    }

    //Four
    if(event.target.name==='selectedOptionMinFour' && event.target.value==='option1')
    {
      this.setState({ flagMinFour: false ,minFour:''});
    }

    if(event.target.name==='selectedOptionMinFour' && event.target.value==='option2')
    {
      this.setState({ flagMinFour: true ,minFour:0 });
    }

    if(event.target.name==='selectedOptionMaxFour' && event.target.value==='option1')
    {
      this.setState({ flagMaxFour: false ,maxFour:''});
    }

    if(event.target.name==='selectedOptionMaxFour' && event.target.value==='option2')
    {
      this.setState({ flagMaxFour: true ,maxFour:0 });
    }

    //Five
    if(event.target.name==='selectedOptionMinFive' && event.target.value==='option1')
    {
      this.setState({ flagMinFive: false ,minFive:''});
    }

    if(event.target.name==='selectedOptionMinFive' && event.target.value==='option2')
    {
      this.setState({ flagMinFive: true ,minFive:0 });
    }

    if(event.target.name==='selectedOptionMaxFive' && event.target.value==='option1')
    {
      this.setState({ flagMaxFive: false ,maxFive:''});
    }

    if(event.target.name==='selectedOptionMaxFive' && event.target.value==='option2')
    {
      this.setState({ flagMaxFive: true ,maxFive:0 });
    }

    //Six
    if(event.target.name==='selectedOptionMinSix' && event.target.value==='option1')
    {
      this.setState({ flagMinSix: false ,minSix:''});
    }

    if(event.target.name==='selectedOptionMinSix' && event.target.value==='option2')
    {
      this.setState({ flagMinSix: true ,minSix:0 });
    }

    if(event.target.name==='selectedOptionMaxSix' && event.target.value==='option1')
    {
      this.setState({ flagMaxSix: false ,maxSix:''});
    }

    if(event.target.name==='selectedOptionMaxSix' && event.target.value==='option2')
    {
      this.setState({ flagMaxSix: true ,maxSix:0 });
    }

        //Seven
        if(event.target.name==='selectedOptionMinSeven' && event.target.value==='option1')
        {
          this.setState({ flagMinSeven: false ,minSeven:''});
        }
    
        if(event.target.name==='selectedOptionMinSeven' && event.target.value==='option2')
        {
          this.setState({ flagMinSeven: true ,minSeven:0 });
        }
    
        if(event.target.name==='selectedOptionMaxSeven' && event.target.value==='option1')
        {
          this.setState({ flagMaxSeven: false ,maxSeven:''});
        }
    
        if(event.target.name==='selectedOptionMaxSeven' && event.target.value==='option2')
        {
          this.setState({ flagMaxSeven: true ,maxSeven:0 });
        }
    
    //Eight
    if(event.target.name==='selectedOptionMinEight' && event.target.value==='option1')
    {
      this.setState({ flagMinEight: false ,minEight:''});
    }

    if(event.target.name==='selectedOptionMinEight' && event.target.value==='option2')
    {
      this.setState({ flagMinEight: true ,minEight:0 });
    }

    if(event.target.name==='selectedOptionMaxEight' && event.target.value==='option1')
    {
      this.setState({ flagMaxEight: false ,maxEight:''});
    }

    if(event.target.name==='selectedOptionMaxEight' && event.target.value==='option2')
    {
      this.setState({ flagMaxEight: true ,maxEight:0 });
    }

    //Nine
    if(event.target.name==='selectedOptionMinNine' && event.target.value==='option1')
    {
      this.setState({ flagMinNine: false ,minNine:''});
    }

    if(event.target.name==='selectedOptionMinNine' && event.target.value==='option2')
    {
      this.setState({ flagMinNine: true ,minNine:0 });
    }

    if(event.target.name==='selectedOptionMaxNine' && event.target.value==='option1')
    {
      this.setState({ flagMaxNine: false ,maxNine:''});
    }

    if(event.target.name==='selectedOptionMaxNine' && event.target.value==='option2')
    {
      this.setState({ flagMaxNine: true ,maxNine:0 });
    }

    //Ten
    if(event.target.name==='selectedOptionMinTen' && event.target.value==='option1')
    {
      this.setState({ flagMinTen: false ,minTen:''});
    }

    if(event.target.name==='selectedOptionMinTen' && event.target.value==='option2')
    {
      this.setState({ flagMinTen: true ,minTen:0 });
    }

    if(event.target.name==='selectedOptionMaxTen' && event.target.value==='option1')
    {
      this.setState({ flagMaxTen: false ,maxTen:''});
    }

    if(event.target.name==='selectedOptionMaxTen' && event.target.value==='option2')
    {
      this.setState({ flagMaxTen: true ,maxTen:0 });
    }
    

    this.setState({ [event.target.name]: event.target.value });
};


validateForm() {
    return(
        this.state.category!=='Please choose a category' &&
        this.state.jobType !=='Please choose a job type' &&
        this.state.careerLevel!=='Please choose a career level' &&
        this.state.salary.length >= 2 &&
        this.state.languages.length >0 &&
        this.state.vacancies.length >= 1 &&
        this.state.jobDescription.length >=50 &&
        this.state.country!==undefined &&
        this.state.country!=='Please choose the country' &&
        this.state.city!==undefined &&
        this.state.city!=='Please choose the city' 
    )
}



    
	handleClick(error) {
        error.preventDefault();
        var payload={}

        if(this.state.applicationType==="Customized" && this.state.numberOfQuestions==="1")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                questionOne: this.state.questionOne,
                minOne: this.state.minOne,
                maxOne: this.state.maxOne
            }
        }

        if(this.state.applicationType==="Customized" && this.state.numberOfQuestions==="2")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                questionOne: this.state.questionOne,
                minOne: this.state.minOne,
                maxOne: this.state.maxOne,
                questionTwo: this.state.questionTwo,
                minTwo: this.state.minTwo,
                maxTwo: this.state.maxTwo
            }
        }

        if(this.state.applicationType==="Customized" && this.state.numberOfQuestions==="3")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                questionOne: this.state.questionOne,
                minOne: this.state.minOne,
                maxOne: this.state.maxOne,
                questionTwo: this.state.questionTwo,
                minTwo: this.state.minTwo,
                maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree
            }
        }

        if(this.state.applicationType==="Customized" && this.state.numberOfQuestions==="4")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                questionOne: this.state.questionOne,
                minOne: this.state.minOne,
                maxOne: this.state.maxOne,
                questionTwo: this.state.questionTwo,
                minTwo: this.state.minTwo,
                maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree,
                questionFour: this.state.questionFour,
                minFour: this.state.minFour,
                maxFour: this.state.maxFour
            }
        }

        if(this.state.applicationType==="Customized" && this.state.numberOfQuestions==="5")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                questionOne: this.state.questionOne,
                minOne: this.state.minOne,
                maxOne: this.state.maxOne,
                questionTwo: this.state.questionTwo,
                minTwo: this.state.minTwo,
                maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree,
                questionFour: this.state.questionFour,
                minFour: this.state.minFour,
                maxFour: this.state.maxFour,
                questionFive: this.state.questionFive,
                minFive: this.state.minFive,
                maxFive: this.state.maxFive
            }
        }


        if(this.state.applicationType==="Customized" && this.state.numberOfQuestions==="6")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                questionOne: this.state.questionOne,
                minOne: this.state.minOne,
                maxOne: this.state.maxOne,
                questionTwo: this.state.questionTwo,
                minTwo: this.state.minTwo,
                maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree,
                questionFour: this.state.questionFour,
                minFour: this.state.minFour,
                maxFour: this.state.maxFour,
                questionFive: this.state.questionFive,
                minFive: this.state.minFive,
                maxFive: this.state.maxFive,
                questionSix: this.state.questionSix,
                minSix: this.state.minSix,
                maxSix: this.state.maxSix
            }
        }

        if(this.state.applicationType==="Customized" && this.state.numberOfQuestions==="7")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                questionOne: this.state.questionOne,
                minOne: this.state.minOne,
                maxOne: this.state.maxOne,
                questionTwo: this.state.questionTwo,
                minTwo: this.state.minTwo,
                maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree,
                questionFour: this.state.questionFour,
                minFour: this.state.minFour,
                maxFour: this.state.maxFour,
                questionFive: this.state.questionFive,
                minFive: this.state.minFive,
                maxFive: this.state.maxFive,
                questionSix: this.state.questionSix,
                minSix: this.state.minSix,
                maxSix: this.state.maxSix,
                questionSeven: this.state.questionSeven,
                minSeven: this.state.minSeven,
                maxSeven: this.state.maxSeven
            }
        }

        if(this.state.applicationType==="Customized" && this.state.numberOfQuestions==="8")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                questionOne: this.state.questionOne,
                minOne: this.state.minOne,
                maxOne: this.state.maxOne,
                questionTwo: this.state.questionTwo,
                minTwo: this.state.minTwo,
                maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree,
                questionFour: this.state.questionFour,
                minFour: this.state.minFour,
                maxFour: this.state.maxFour,
                questionFive: this.state.questionFive,
                minFive: this.state.minFive,
                maxFive: this.state.maxFive,
                questionSix: this.state.questionSix,
                minSix: this.state.minSix,
                maxSix: this.state.maxSix,
                questionSeven: this.state.questionSeven,
                minSeven: this.state.minSeven,
                maxSeven: this.state.maxSeven,
                questionEight: this.state.questionEight,
                minEight: this.state.minEight,
                maxEight: this.state.maxEight

            }
        }

        if(this.state.applicationType==="Customized" && this.state.numberOfQuestions==="9")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                questionOne: this.state.questionOne,
                minOne: this.state.minOne,
                maxOne: this.state.maxOne,
                questionTwo: this.state.questionTwo,
                minTwo: this.state.minTwo,
                maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree,
                questionFour: this.state.questionFour,
                minFour: this.state.minFour,
                maxFour: this.state.maxFour,
                questionFive: this.state.questionFive,
                minFive: this.state.minFive,
                maxFive: this.state.maxFive,
                questionSix: this.state.questionSix,
                minSix: this.state.minSix,
                maxSix: this.state.maxSix,
                questionSeven: this.state.questionSeven,
                minSeven: this.state.minSeven,
                maxSeven: this.state.maxSeven,
                questionEight: this.state.questionEight,
                minEight: this.state.minEight,
                maxEight: this.state.maxEight,
                questionNine: this.state.questionNine,
                minNine: this.state.minNine,
                maxNine: this.state.maxNine
            }
        }

        if(this.state.applicationType==="Customized" && this.state.numberOfQuestions==="10")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                questionOne: this.state.questionOne,
                minOne: this.state.minOne,
                maxOne: this.state.maxOne,
                questionTwo: this.state.questionTwo,
                minTwo: this.state.minTwo,
                maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree,
                questionFour: this.state.questionFour,
                minFour: this.state.minFour,
                maxFour: this.state.maxFour,
                questionFive: this.state.questionFive,
                minFive: this.state.minFive,
                maxFive: this.state.maxFive,
                questionSix: this.state.questionSix,
                minSix: this.state.minSix,
                maxSix: this.state.maxSix,
                questionSeven: this.state.questionSeven,
                minSeven: this.state.minSeven,
                maxSeven: this.state.maxSeven,
                questionEight: this.state.questionEight,
                minEight: this.state.minEight,
                maxEight: this.state.maxEight,
                questionNine: this.state.questionNine,
                minNine: this.state.minNine,
                maxNine: this.state.maxNine,
                questionTen: this.state.questionTen,
                minTen: this.state.minTen,
                maxTen: this.state.maxTen
            }
        }

        if(this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="1")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                // questionOne: this.state.questionOne,
                // minOne: this.state.minOne,
                // maxOne: this.state.maxOne,
                // questionTwo: this.state.questionTwo,
                // minTwo: this.state.minTwo,
                // maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree
            }
        }

        if(this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="2")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                // questionOne: this.state.questionOne,
                // minOne: this.state.minOne,
                // maxOne: this.state.maxOne,
                // questionTwo: this.state.questionTwo,
                // minTwo: this.state.minTwo,
                // maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree,
                questionFour: this.state.questionFour,
                minFour: this.state.minFour,
                maxFour: this.state.maxFour
            }
        }

        if(this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="3")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                // questionOne: this.state.questionOne,
                // minOne: this.state.minOne,
                // maxOne: this.state.maxOne,
                // questionTwo: this.state.questionTwo,
                // minTwo: this.state.minTwo,
                // maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree,
                questionFour: this.state.questionFour,
                minFour: this.state.minFour,
                maxFour: this.state.maxFour,
                questionFive: this.state.questionFive,
                minFive: this.state.minFive,
                maxFive: this.state.maxFive
            }
        }


        if(this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="4")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                // questionOne: this.state.questionOne,
                // minOne: this.state.minOne,
                // maxOne: this.state.maxOne,
                // questionTwo: this.state.questionTwo,
                // minTwo: this.state.minTwo,
                // maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree,
                questionFour: this.state.questionFour,
                minFour: this.state.minFour,
                maxFour: this.state.maxFour,
                questionFive: this.state.questionFive,
                minFive: this.state.minFive,
                maxFive: this.state.maxFive,
                questionSix: this.state.questionSix,
                minSix: this.state.minSix,
                maxSix: this.state.maxSix
            }
        }

        if(this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="5")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                // questionOne: this.state.questionOne,
                // minOne: this.state.minOne,
                // maxOne: this.state.maxOne,
                // questionTwo: this.state.questionTwo,
                // minTwo: this.state.minTwo,
                // maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree,
                questionFour: this.state.questionFour,
                minFour: this.state.minFour,
                maxFour: this.state.maxFour,
                questionFive: this.state.questionFive,
                minFive: this.state.minFive,
                maxFive: this.state.maxFive,
                questionSix: this.state.questionSix,
                minSix: this.state.minSix,
                maxSix: this.state.maxSix,
                questionSeven: this.state.questionSeven,
                minSeven: this.state.minSeven,
                maxSeven: this.state.maxSeven
            }
        }

        if(this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="6")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                // questionOne: this.state.questionOne,
                // minOne: this.state.minOne,
                // maxOne: this.state.maxOne,
                // questionTwo: this.state.questionTwo,
                // minTwo: this.state.minTwo,
                // maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree,
                questionFour: this.state.questionFour,
                minFour: this.state.minFour,
                maxFour: this.state.maxFour,
                questionFive: this.state.questionFive,
                minFive: this.state.minFive,
                maxFive: this.state.maxFive,
                questionSix: this.state.questionSix,
                minSix: this.state.minSix,
                maxSix: this.state.maxSix,
                questionSeven: this.state.questionSeven,
                minSeven: this.state.minSeven,
                maxSeven: this.state.maxSeven,
                questionEight: this.state.questionEight,
                minEight: this.state.minEight,
                maxEight: this.state.maxEight

            }
        }

        if(this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="7")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                // questionOne: this.state.questionOne,
                // minOne: this.state.minOne,
                // maxOne: this.state.maxOne,
                // questionTwo: this.state.questionTwo,
                // minTwo: this.state.minTwo,
                // maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree,
                questionFour: this.state.questionFour,
                minFour: this.state.minFour,
                maxFour: this.state.maxFour,
                questionFive: this.state.questionFive,
                minFive: this.state.minFive,
                maxFive: this.state.maxFive,
                questionSix: this.state.questionSix,
                minSix: this.state.minSix,
                maxSix: this.state.maxSix,
                questionSeven: this.state.questionSeven,
                minSeven: this.state.minSeven,
                maxSeven: this.state.maxSeven,
                questionEight: this.state.questionEight,
                minEight: this.state.minEight,
                maxEight: this.state.maxEight,
                questionNine: this.state.questionNine,
                minNine: this.state.minNine,
                maxNine: this.state.maxNine
            }
        }

        if(this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="8")
        {
            payload=
            {
                applicationType:this.state.applicationType,
                // questionOne: this.state.questionOne,
                // minOne: this.state.minOne,
                // maxOne: this.state.maxOne,
                // questionTwo: this.state.questionTwo,
                // minTwo: this.state.minTwo,
                // maxTwo: this.state.maxTwo,
                questionThree: this.state.questionThree,
                minThree: this.state.minThree,
                maxThree: this.state.maxThree,
                questionFour: this.state.questionFour,
                minFour: this.state.minFour,
                maxFour: this.state.maxFour,
                questionFive: this.state.questionFive,
                minFive: this.state.minFive,
                maxFive: this.state.maxFive,
                questionSix: this.state.questionSix,
                minSix: this.state.minSix,
                maxSix: this.state.maxSix,
                questionSeven: this.state.questionSeven,
                minSeven: this.state.minSeven,
                maxSeven: this.state.maxSeven,
                questionEight: this.state.questionEight,
                minEight: this.state.minEight,
                maxEight: this.state.maxEight,
                questionNine: this.state.questionNine,
                minNine: this.state.minNine,
                maxNine: this.state.maxNine,
                questionTen: this.state.questionTen,
                minTen: this.state.minTen,
                maxTen: this.state.maxTen
            }
        }

		var apiBaseUrl = '/routes/api/applications/CreateANewApplication/5ed02ba21a7ba21e60d0d064/'+localStorage.getItem('jobId');
		// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwtToken');
		axios
			.post(apiBaseUrl, payload)
			.then(function(response) {
                swal({
                    title: "You have created the application successfully",
                    text: "You can track your jobs in 'Your jobs' page.",
                    icon: "success",
                    buttons: {
                        // catch: {
                        //     text: "Show applications",
                        //     value: "application",
                        //   },
                          defeat: {
                            text: "Ok",
                            value: "postedjobs",
                          },  
                    }
                    })
                    .then((value) => {
                        switch (value) {
                    
                          case "postedjobs":
                            document.location.href = '/postedjobs';
                            break;
                          default:
                            document.location.href = '/postedjobs';
                        }
                      });
                })
			.catch((error) => {
				swal(error.response.data.errmsg || error.response.data);
				console.log(error);
			});
	}

	changeHandler = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}
	
    render() {

        var  QuestionOne=
        (
        <div>
            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
                <MDBCol>
                    <MDBInput
                                        required 
                                        label= "Question 1"
                                        type="text"
                                        name="questionOne"
                                        value={this.state.questionOne}
                                        className={
                                                this.state.questionOne.length >= 10 ? (
                                                    'is-valid'
                                                ) : (
                                                    'is-invalid'
                                                )
                                            } 
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
			</MDBRow>

            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"700px"}}>
				<MDBCol>
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMinOne} 
                                        label= "Minimum characters"
                                        type="number"
                                        name="minOne"
                                        value={this.state.minOne}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
                                
                <MDBCol >
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMaxOne} 
                                        label= "Maximum characters"
                                        type="number"
                                        name="maxOne"
                                        value={this.state.maxOne}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
            </MDBRow>

            <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMinOne"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionMinOne === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMinOne"
                                        checked={this.state.selectedOptionMinOne === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>

                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMaxOne"
                            style={{marginLeft:"160px"}}
                                        checked={this.state.selectedOptionMaxOne === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMaxOne"
                                        checked={this.state.selectedOptionMaxOne === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>
                        
                        </div>

        </div>
        );

        var  QuestionTwo=
        (
        <div>
            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
                <MDBCol>
                    <MDBInput
                                        required 
                                        label= "Question 2"
                                        type="text"
                                        name="questionTwo"
                                        value={this.state.questionTwo}
                                        className={
                                                this.state.questionTwo.length >= 10 ? (
                                                    'is-valid'
                                                ) : (
                                                    'is-invalid'
                                                )
                                            } 
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
			</MDBRow>

            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"700px"}}>
				<MDBCol>
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMinTwo} 
                                        label= "Minimum characters"
                                        type="number"
                                        name="minTwo"
                                        value={this.state.minTwo}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
                                
                <MDBCol >
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMaxTwo} 
                                        label= "Maximum characters"
                                        type="number"
                                        name="maxTwo"
                                        value={this.state.maxTwo}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
            </MDBRow>

            <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMinTwo"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionMinTwo === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMinTwo"
                                        checked={this.state.selectedOptionMinTwo === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>

                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMaxTwo"
                            style={{marginLeft:"160px"}}
                                        checked={this.state.selectedOptionMaxTwo === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMaxTwo"
                                        checked={this.state.selectedOptionMaxTwo === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>
                        
                        </div>

        </div>
        );

        var  QuestionThree=
        (
        <div>
            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
                <MDBCol>
                    <MDBInput
                                        required 
                                        label= "Question 3"
                                        type="text"
                                        name="questionThree"
                                        value={this.state.questionThree}
                                        className={
                                                this.state.questionThree.length >= 10 ? (
                                                    'is-valid'
                                                ) : (
                                                    'is-invalid'
                                                )
                                            } 
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
			</MDBRow>

            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"700px"}}>
				<MDBCol>
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMinThree} 
                                        label= "Minimum characters"
                                        type="number"
                                        name="minThree"
                                        value={this.state.minThree}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
                                
                <MDBCol >
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMaxThree} 
                                        label= "Maximum characters"
                                        type="number"
                                        name="maxThree"
                                        value={this.state.maxThree}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
            </MDBRow>

            <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMinThree"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionMinThree === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMinThree"
                                        checked={this.state.selectedOptionMinThree === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>

                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMaxThree"
                            style={{marginLeft:"160px"}}
                                        checked={this.state.selectedOptionMaxThree === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMaxThree"
                                        checked={this.state.selectedOptionMaxThree === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>
                        
                        </div>

        </div>
        );

        var  QuestionFour=
        (
        <div>
            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
                <MDBCol>
                    <MDBInput
                                        required 
                                        label= "Question 4"
                                        type="text"
                                        name="questionFour"
                                        value={this.state.questionFour}
                                        className={
                                                this.state.questionFour.length >= 10 ? (
                                                    'is-valid'
                                                ) : (
                                                    'is-invalid'
                                                )
                                            } 
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
			</MDBRow>

            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"700px"}}>
				<MDBCol>
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMinFour} 
                                        label= "Minimum characters"
                                        type="number"
                                        name="minFour"
                                        value={this.state.minFour}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
                                
                <MDBCol >
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMaxFour} 
                                        label= "Maximum characters"
                                        type="number"
                                        name="maxFour"
                                        value={this.state.maxFour}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
            </MDBRow>

            <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMinFour"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionMinFour === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMinFour"
                                        checked={this.state.selectedOptionMinFour === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>

                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMaxFour"
                            style={{marginLeft:"160px"}}
                                        checked={this.state.selectedOptionMaxFour === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMaxFour"
                                        checked={this.state.selectedOptionMaxFour === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>
                        
                        </div>

        </div>
        );

        var  QuestionFive=
        (
        <div>
            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
                <MDBCol>
                    <MDBInput
                                        required 
                                        label= "Question 5"
                                        type="text"
                                        name="questionFive"
                                        value={this.state.questionFive}
                                        className={
                                                this.state.questionFive.length >= 10 ? (
                                                    'is-valid'
                                                ) : (
                                                    'is-invalid'
                                                )
                                            } 
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
			</MDBRow>

            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"700px"}}>
				<MDBCol>
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMinFive} 
                                        label= "Minimum characters"
                                        type="number"
                                        name="minFive"
                                        value={this.state.minFive}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
                                
                <MDBCol >
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMaxFive} 
                                        label= "Maximum characters"
                                        type="number"
                                        name="maxFive"
                                        value={this.state.maxFive}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
            </MDBRow>

            <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMinFive"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionMinFive === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMinFive"
                                        checked={this.state.selectedOptionMinFive === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>

                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMaxFive"
                            style={{marginLeft:"160px"}}
                                        checked={this.state.selectedOptionMaxFive === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMaxFive"
                                        checked={this.state.selectedOptionMaxFive === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>
                        
                        </div>

        </div>
        );

        var  QuestionSix=
        (
        <div>
            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
                <MDBCol>
                    <MDBInput
                                        required 
                                        label= "Question 6"
                                        type="text"
                                        name="questionSix"
                                        value={this.state.questionSix}
                                        className={
                                                this.state.questionSix.length >= 10 ? (
                                                    'is-valid'
                                                ) : (
                                                    'is-invalid'
                                                )
                                            } 
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
			</MDBRow>

            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"700px"}}>
				<MDBCol>
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMinSix} 
                                        label= "Minimum characters"
                                        type="number"
                                        name="minSix"
                                        value={this.state.minSix}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
                                
                <MDBCol >
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMaxSix} 
                                        label= "Maximum characters"
                                        type="number"
                                        name="maxSix"
                                        value={this.state.maxSix}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
            </MDBRow>

            <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMinSix"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionMinSix === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMinSix"
                                        checked={this.state.selectedOptionMinSix === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>

                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMaxSix"
                            style={{marginLeft:"160px"}}
                                        checked={this.state.selectedOptionMaxSix === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMaxSix"
                                        checked={this.state.selectedOptionMaxSix === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>
                        
                        </div>

        </div>
        );

        var  QuestionSeven=
        (
        <div>
            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
                <MDBCol>
                    <MDBInput
                                        required 
                                        label= "Question 7"
                                        type="text"
                                        name="questionSeven"
                                        value={this.state.questionSeven}
                                        className={
                                                this.state.questionSeven.length >= 10 ? (
                                                    'is-valid'
                                                ) : (
                                                    'is-invalid'
                                                )
                                            } 
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
			</MDBRow>

            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"700px"}}>
				<MDBCol>
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMinSeven} 
                                        label= "Minimum characters"
                                        type="number"
                                        name="minSeven"
                                        value={this.state.minSeven}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
                                
                <MDBCol >
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMaxSeven} 
                                        label= "Maximum characters"
                                        type="number"
                                        name="maxSeven"
                                        value={this.state.maxSeven}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
            </MDBRow>

            <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMinSeven"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionMinSeven === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMinSeven"
                                        checked={this.state.selectedOptionMinSeven === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>

                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMaxSeven"
                            style={{marginLeft:"160px"}}
                                        checked={this.state.selectedOptionMaxSeven === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMaxSeven"
                                        checked={this.state.selectedOptionMaxSeven === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>
                        
                        </div>

        </div>
        );

        var  QuestionEight=
        (
        <div>
            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
                <MDBCol>
                    <MDBInput
                                        required 
                                        label= "Question 8"
                                        type="text"
                                        name="questionEight"
                                        value={this.state.questionEight}
                                        className={
                                                this.state.questionEight.length >= 10 ? (
                                                    'is-valid'
                                                ) : (
                                                    'is-invalid'
                                                )
                                            } 
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
			</MDBRow>

            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"700px"}}>
				<MDBCol>
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMinEight} 
                                        label= "Minimum characters"
                                        type="number"
                                        name="minEight"
                                        value={this.state.minEight}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
                                
                <MDBCol >
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMaxEight} 
                                        label= "Maximum characters"
                                        type="number"
                                        name="maxEight"
                                        value={this.state.maxEight}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
            </MDBRow>

            <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMinEight"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionMinEight === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMinEight"
                                        checked={this.state.selectedOptionMinEight === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>

                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMaxEight"
                            style={{marginLeft:"160px"}}
                                        checked={this.state.selectedOptionMaxEight === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMaxEight"
                                        checked={this.state.selectedOptionMaxEight === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>
                        
                        </div>

        </div>
        );

        var  QuestionNine=
        (
        <div>
            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
                <MDBCol>
                    <MDBInput
                                        required 
                                        label= "Question 9"
                                        type="text"
                                        name="questionNine"
                                        value={this.state.questionNine}
                                        className={
                                                this.state.questionNine.length >= 10 ? (
                                                    'is-valid'
                                                ) : (
                                                    'is-invalid'
                                                )
                                            } 
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
			</MDBRow>

            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"700px"}}>
				<MDBCol>
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMinNine} 
                                        label= "Minimum characters"
                                        type="number"
                                        name="minNine"
                                        value={this.state.minNine}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
                                
                <MDBCol >
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMaxNine} 
                                        label= "Maximum characters"
                                        type="number"
                                        name="maxNine"
                                        value={this.state.maxNine}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
            </MDBRow>

            <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMinNine"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionMinNine === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMinNine"
                                        checked={this.state.selectedOptionMinNine === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>

                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMaxNine"
                            style={{marginLeft:"160px"}}
                                        checked={this.state.selectedOptionMaxNine === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMaxNine"
                                        checked={this.state.selectedOptionMaxNine === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>
                        
                        </div>

        </div>
        );

        var  QuestionTen=
        (
        <div>
            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"750px"}}>
                <MDBCol>
                    <MDBInput
                                        required 
                                        label= "Question 10"
                                        type="text"
                                        name="questionTen"
                                        value={this.state.questionTen}
                                        className={
                                                this.state.questionTen.length >= 10 ? (
                                                    'is-valid'
                                                ) : (
                                                    'is-invalid'
                                                )
                                            } 
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
			</MDBRow>

            <MDBRow style={{ paddingLeft: '10px', justifyItems: 'center' ,width:"700px"}}>
				<MDBCol>
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMinTen} 
                                        label= "Minimum characters"
                                        type="number"
                                        name="minTen"
                                        value={this.state.minTen}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
                                
                <MDBCol >
                    <MDBInput
                                        style={{width:"150px"}}
                                        required 
                                        disabled={this.state.flagMaxTen} 
                                        label= "Maximum characters"
                                        type="number"
                                        name="maxTen"
                                        value={this.state.maxTen}
                                        onChange={this.changeHandler}
                                        >
                    </MDBInput>
                </MDBCol>
            </MDBRow>

            <div className="radio">
                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMinTen"
                            style={{marginLeft:"10px"}}
                                        checked={this.state.selectedOptionMinTen === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMinTen"
                                        checked={this.state.selectedOptionMinTen === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>

                        <label>
                            <input type="radio" value="option1"  name="selectedOptionMaxTen"
                            style={{marginLeft:"160px"}}
                                        checked={this.state.selectedOptionMaxTen === 'option1'}
                                        onClick={this.changeHandler1} />
                            &nbsp;Needed
                        </label>
                        &nbsp;&nbsp;
                        <label>
                            <input type="radio" value="option2" name="selectedOptionMaxTen"
                                        checked={this.state.selectedOptionMaxTen === 'option2'} 
                                        onClick={this.changeHandler1} />
                            &nbsp;Not needed
                        </label>
                        
                        </div>

        </div>
        );

        var Custom1=
        (
            <div>
                {QuestionOne}
            </div>
        );

        var Custom2=
        (
            <div>
                {QuestionOne}
                {QuestionTwo}
            </div>
        );

        var Custom3=
        (
            <div>
                {QuestionOne}
                {QuestionTwo}
                {QuestionThree}
            </div>
        );

        var Custom4=
        (
            <div>
                {QuestionOne}
                {QuestionTwo}
                {QuestionThree}
                {QuestionFour}
            </div>
        );

        var Custom5=
        (
            <div>
                {QuestionOne}
                {QuestionTwo}
                {QuestionThree}
                {QuestionFour}
                {QuestionFive}
            </div>
        );

        var Custom6=
        (
            <div>
                {QuestionOne}
                {QuestionTwo}
                {QuestionThree}
                {QuestionFour}
                {QuestionFive}
                {QuestionSix}

            </div>
        );

        var Custom7=
        (
            <div>
                {QuestionOne}
                {QuestionTwo}
                {QuestionThree}
                {QuestionFour}
                {QuestionFive}
                {QuestionSix}
                {QuestionSeven}
            </div>
        );

        var Custom8=
        (
            <div>
                {QuestionOne}
                {QuestionTwo}
                {QuestionThree}
                {QuestionFour}
                {QuestionFive}
                {QuestionSix}
                {QuestionSeven}
                {QuestionEight}
            </div>
        );


        var Custom9=
        (
            <div>
                {QuestionOne}
                {QuestionTwo}
                {QuestionThree}
                {QuestionFour}
                {QuestionFive}
                {QuestionSix}
                {QuestionSeven}
                {QuestionEight}
                {QuestionNine}
            </div>
        );
        var Custom10=
        (
            <div>
                {QuestionOne}
                {QuestionTwo}
                {QuestionThree}
                {QuestionFour}
                {QuestionFive}
                {QuestionSix}
                {QuestionSeven}
                {QuestionEight}
                {QuestionNine}
                {QuestionTen}
            </div>
        );

        var Mixed3=
        (
            <div>
                {QuestionThree}
            </div>
        );

        var Mixed4=
        (
            <div>
                {QuestionThree}
                {QuestionFour}
            </div>
        );

        var Mixed5=
        (
            <div>
                {QuestionThree}
                {QuestionFour}
                {QuestionFive}
            </div>
        );

        var Mixed6=
        (
            <div>
                {QuestionThree}
                {QuestionFour}
                {QuestionFive}
                {QuestionSix}

            </div>
        );

        var Mixed7=
        (
            <div>
                {QuestionThree}
                {QuestionFour}
                {QuestionFive}
                {QuestionSix}
                {QuestionSeven}
            </div>
        );

        var Mixed8=
        (
            <div>
                {QuestionThree}
                {QuestionFour}
                {QuestionFive}
                {QuestionSix}
                {QuestionSeven}
                {QuestionEight}
            </div>
        );


        var Mixed9=
        (
            <div>
                {QuestionThree}
                {QuestionFour}
                {QuestionFive}
                {QuestionSix}
                {QuestionSeven}
                {QuestionEight}
                {QuestionNine}
            </div>
        );
        var Mixed10=
        (
            <div>
                {QuestionThree}
                {QuestionFour}
                {QuestionFive}
                {QuestionSix}
                {QuestionSeven}
                {QuestionEight}
                {QuestionNine}
                {QuestionTen}
            </div>
        );
        
        var Mixed=
        (
            <small style={{marginLeft:"10px", fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">Note: The first 2 questions are the default ones.</small>
        );

		return (

            <Card 
            style={{
                width:"55%",
                height:"100%",
                paddingLeft:"0.5px",
                backgroundColor:'rgba(0,0,0,0.005)',
                marginLeft:"490px",
                top:"70px",
                paddingTop:"0.1px"
                }}
            >
              <Card.Body style={{backgroundColor:"dark"}}>
                <div>
				<MuiThemeProvider style={{marginLeft:"100px"}}>
					<div>
					<h4 style={{color:"black", fontSize:"1.5em", fontWeight:"bold",marginLeft:"5px"}}>
                        Fill in the desired questions.
                        </h4>
                        <small style={{marginLeft:"10px", fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">Note that the applicant will answer whatever questions you will enter.</small>
                        <small style={{marginLeft:"10px", fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">All the questions are required.</small>
                        <small style={{marginLeft:"10px", fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">You can add minimum and/or maximum characters for the answers of the questions.</small>
                        <small style={{marginLeft:"10px", fontStyle:"italic"}} id="emailHelp" class="form-text text-muted">To add them, choose the 'Needed' option and type the number of characters that you want.</small>
                        {this.state.applicationType==="Mixed"? Mixed:null}

                    {this.state.applicationType==="Customized" && this.state.numberOfQuestions==="1" ? Custom1:null}
                    {this.state.applicationType==="Customized" && this.state.numberOfQuestions==="2" ? Custom2:null}
                    {this.state.applicationType==="Customized" && this.state.numberOfQuestions==="3" ? Custom3:null}
                    {this.state.applicationType==="Customized" && this.state.numberOfQuestions==="4" ? Custom4:null}
                    {this.state.applicationType==="Customized" && this.state.numberOfQuestions==="5" ? Custom5:null}
                    {this.state.applicationType==="Customized" && this.state.numberOfQuestions==="6" ? Custom6:null}
                    {this.state.applicationType==="Customized" && this.state.numberOfQuestions==="7" ? Custom7:null}
                    {this.state.applicationType==="Customized" && this.state.numberOfQuestions==="8" ? Custom8:null}
                    {this.state.applicationType==="Customized" && this.state.numberOfQuestions==="9" ? Custom9:null}
                    {this.state.applicationType==="Customized" && this.state.numberOfQuestions==="10" ? Custom10:null}
                    {this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="1" ? Mixed3:null}
                    {this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="2" ? Mixed4:null}
                    {this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="3" ? Mixed5:null}
                    {this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="4" ? Mixed6:null}
                    {this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="5" ? Mixed7:null}
                    {this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="6" ? Mixed8:null}
                    {this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="7" ? Mixed9:null}
                    {this.state.applicationType==="Mixed" && this.state.numberOfQuestions==="8" ? Mixed10:null}

                    <div >
							<Button
								className="btn-block btn-rounded z-depth-1a"
								label="Submit"
								variant="omar"
								style={{marginTop:"50px",marginLeft: "550px",marginRight:"2500px",width:"200px", height:"60px" ,backgroundColor:"#a3dbf1"}}
								// disabled={!this.validateForm()}
								onClick={(event) => 
									this.handleClick(event)
								}
							>
							Submit
							</Button>
						</div>

					</div>
				</MuiThemeProvider>
                </div>
          </Card.Body>
          </Card>
			
		);
	}
}

export default Questions;
