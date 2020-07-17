import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Button,Card} from"react-bootstrap"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBSelect } from 'mdbreact';
import swal from 'sweetalert';


class FillAnApplication extends Component
{
    constructor(props){
        super(props);
        this.state={
            application:[],
            applicationType:"",
            questionOne:"",
            minOne:"",
            maxOne:"",
            questionTwo:"",
            minTwo:"",
            maxTwo:"",
            questionThree:"",
            minThree:"",
            maxThree:"",
            questionFour:"",
            minFour:"",
            maxFour:"",
            questionFive:"",
            minFive:"",
            maxFive:"",
            questionSix:[],
            minSix:"",
            maxSix:"",
            questionSeven:"",
            minSeven:"",
            maxSeven:"",
            questionEight:"",
            minEight:"",
            maxEight:"",
            questionNine:"",
            minNine:"",
            maxNine:"",
            questionTen:"",
            minTen:"",
            maxTen:"",
            answerOne:"",
            answerTwo:"",
            answerThree:"",
            answerFour:"",
            answerFive:"",
            answerSix:"",
            answerSeven:"",
            answerEight:"",
            answerNine:"",
            answerTen:"",
            modalShow: false
        };
}

componentDidMount()
    {
        // axios.get('/routes/api/appplications/getByjobID/'+localStorage.getItem('jobId'))
        axios.get('/routes/api/applications/getByjobID/'+localStorage.getItem('jobId'))
                .then((response) => {
                    console.log(response.data.data[0]._id)
                    this.setState({
                      application:response.data.data[0]._id,
                      jobId: response.data.data[0].jobId,
                      applicationType:response.data.data[0].applicationType,
                      questionOne:response.data.data[0].questionOne,
                      minOne:response.data.data[0].minOne,
                      maxOne:response.data.data[0].maxOne,
                      questionTwo:response.data.data[0].questionTwo,
                      minTwo:response.data.data[0].minTwo,
                      maxTwo:response.data.data[0].maxTwo,
                      questionThree:response.data.data[0].questionThree,
                      minThree:response.data.data[0].minThree,
                      maxThree:response.data.data[0].maxThree,
                      questionFour:response.data.data[0].questionFour,
                      minFour:response.data.data[0].minFour,
                      maxFour:response.data.data[0].maxFour,
                      questionFive:response.data.data[0].questionFive,
                      minFive:response.data.data[0].minFive,
                      maxFive:response.data.data[0].maxFive,
                      questionSix:response.data.data[0].questionSix,
                      minSix:response.data.data[0].minSix,
                      maxSix:response.data.data[0].maxSix,
                      questionSeven:response.data.data[0].questionSeven,
                      minSeven:response.data.data[0].minSeven,
                      maxSeven:response.data.data[0].maxSeven,
                      questionEight:response.data.data[0].questionEight,
                      minEight:response.data.data[0].minEight,
                      maxEight:response.data.data[0].maxEight,
                      questionNine:response.data.data[0].questionNine,
                      minNine:response.data.data[0].minNine,
                      maxNine:response.data.data[0].maxNine,
                      questionTen:response.data.data[0].questionTen,
                      minTen:response.data.data[0].minTen,
                      maxTen:response.data.data[0].maxTen
                    });
                });
  }

changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
};

validateForm() {
    var One=true;
    if(this.state.questionOne!==undefined)
    {
        if(this.state.minOne!==undefined)
        {
            One=One && this.state.answerOne.length>=parseInt(this.state.minOne)
        }
        else
        {
            One=One && this.state.answerOne.length>=1 
        }
        if(this.state.maxOne!==undefined)
        {
            One=One && this.state.answerOne.length<=parseInt(this.state.maxOne)
        }
    }

    var Two=true;
    if(this.state.questionTwo!==undefined)
    {
        if(this.state.minTwo!==undefined)
        {
            Two=Two && this.state.answerTwo.length>=parseInt(this.state.minTwo)
        }
        else
        {
            Two=Two && this.state.answerTwo.length>=1 
        }
        if(this.state.maxTwo!==undefined)
        {
            Two=Two && this.state.answerTwo.length<=parseInt(this.state.maxTwo)
        }
    }

    var Three=true;
    if(this.state.questionThree!==undefined)
    {
        if(this.state.minThree!==undefined)
        {
            Three=Three && this.state.answerThree.length>=parseInt(this.state.minThree)
        }
        else
        {
            Three=Three && this.state.answerThree.length>=1 
        }
        if(this.state.maxThree!==undefined)
        {
            Three=Three && this.state.answerThree.length<=parseInt(this.state.maxThree)
        }
    }

    var Four=true;
    if(this.state.questionFour!==undefined)
    {
        if(this.state.minFour!==undefined)
        {
            Four=Four && this.state.answerFour.length>=parseInt(this.state.minFour)
        }
        else
        {
            Four=Four && this.state.answerFour.length>=1 
        }
        if(this.state.maxFour!==undefined)
        {
            Four=Four && this.state.answerFour.length<=parseInt(this.state.minFour)
        }
    }

    var Five=true;
    if(this.state.questionFive!==undefined)
    {
        if(this.state.minFive!==undefined)
        {
            Five=Five && this.state.answerFive.length>=parseInt(this.state.minFive)
        }
        else
        {
            Five=Five && this.state.answerFive.length>=1 
        }
        if(this.state.maxFive!==undefined)
        {
            Five=Five && this.state.answerFive.length<=parseInt(this.state.maxFive)
        }
    }
    var Six=true;
    if(this.state.questionSix!==undefined)
    {
        if(this.state.minSix!==undefined)
        {
            Six=Six && this.state.answerSix.length>=parseInt(this.state.minSix)
        }
        else
        {
            Six=Six && this.state.answerSix.length>=1 
        }
        if(this.state.maxSix!==undefined)
        {
            Six=Six && this.state.answerSix.length<=parseInt(this.state.minSix)
        }
    }

    var Seven=true;
    if(this.state.questionSeven!==undefined)
    {
        if(this.state.minSeven!==undefined)
        {
            Seven=Seven && this.state.answerSeven.length>=parseInt(this.state.minSeven)
        }
        else
        {
            Seven=Seven && this.state.answerSeven.length>=1 
        }
        if(this.state.maxSeven!==undefined)
        {
            Seven=Seven && this.state.answerSeven.length<=parseInt(this.state.minSeven)
        }
    }

    var Eight=true;
    if(this.state.questionEight!==undefined)
    {
        if(this.state.minEight!==undefined)
        {
            Eight=Eight && this.state.answerEight.length>=parseInt(this.state.minEight)
        }
        else
        {
            Eight=Eight && this.state.answerEight.length>=1 
        }
        if(this.state.maxEight!==undefined)
        {
            Eight=Eight && this.state.answerEight.length<=parseInt(this.state.minEight)
        }
    }

    var Nine=true;
    if(this.state.questionNine!==undefined)
    {
        if(this.state.minNine!==undefined)
        {
            Nine=Nine && this.state.answerNine.length>=parseInt(this.state.minNine)
        }
        else
        {
            Nine=Nine && this.state.answerNine.length>=1 
        }
        if(this.state.maxNine!==undefined)
        {
            Nine=Nine && this.state.answerNine.length<=parseInt(this.state.minNine)
        }
    }


    var Ten=true;
    if(this.state.questionTen!==undefined)
    {
        if(this.state.minTen!==undefined)
        {
            Ten=Ten && this.state.answerTen.length>=parseInt(this.state.minTen)
        }
        else
        {
            Ten=Ten && this.state.answerTen.length>=1 
        }
        if(this.state.maxTen!==undefined)
        {
            Ten=Ten && this.state.answerTen.length<=parseInt(this.state.minTen)
        }
    }

    return (
    
        One && Two && Three && Four && Five && Six && Seven && Eight && Nine && Ten

    );
}

handleClick(error) { 
        error.preventDefault();
    console.log(this.state.application)
        const keys = this.state.application['0'];
		console.log(keys)
		var KEYS = [];
		for (var key in keys) {
            if(key !== '_id' && key !== '__v' && key !== 'applicationType' && key !== 'jobId' && key !== 'employerId')
			KEYS.push(key);
		}
       
        var answers=[]
        for(var j=0;j<KEYS.length;j++)
        {
            var temp= "answer"+KEYS[j].substring(8)
            answers.push(temp)
        }
        
        var payload = {};
        answers.map((answer, index) => {
            payload[answer] = this.state[answer];
        });
        
    console.log(this.state.application)
    var apiBaseUrl = '/routes/api/userApplications/CreateANewUserApplication/5e7d35d36626c516005f62a1/'+this.state.application;
    
    axios.post(apiBaseUrl, payload)
        .then(function(response) {
            swal({
                title: "You have applied successfully!",
                text: "You can now get notifications about your application, edit your application (unless viewed by the company) and also track all your applications.",
                icon: "success",
                buttons: {
                    catch: {
                        text: "Show applications",
                        value: "application",
                      },
                      defeat: {
                        text: "Homepage",
                        value: "home",
                      },  
                }
              })
              .then((value) => {
                switch (value) {
            
                  case "application":
                    document.location.href = '/applications';
                    break;
                  case "home":
                     document.location.href = '/jobs';
                     break;  
                  default:
                    document.location.href = '/jobs';
                }
              });
                     
            })

        axios.put('/routes/api/jobs/applyToAJob/5e7d35d36626c516005f62a1/'+this.state.jobId)    
            
        // .catch((error) => {
        //     swal(error.response.data.errmsg || error.response.data);
        //     console.log(error);
        // });
}

    render() {

     var MinOne=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minOne} characters.</small>
     );
     
     var MaxOne=(
        <small id="emailHelp" class="form-text text-muted">Max {this.state.maxOne} characters.</small>
     );

     var MinMaxOne=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minOne} characters, Max {this.state.maxOne} characters.</small>
     );

     var MinTwo=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minTwo} characters.</small>
     );
     
     var MaxTwo=(
        <small id="emailHelp" class="form-text text-muted">Max {this.state.maxTwo} characters.</small>
     );

     var MinMaxTwo=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minTwo} characters, Max {this.state.maxTwo} characters.</small>
     );

     var MinThree=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minThree} characters.</small>
     );

     var MaxThree=(
        <small id="emailHelp" class="form-text text-muted">Max {this.state.maxThree} characters.</small>
     );

     var MinMaxThree=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minThree} characters, Max {this.state.maxThree} characters.</small>
     );

     var MinFour=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minFour} characters.</small>
     );

     var MaxFour=(
        <small id="emailHelp" class="form-text text-muted">Max {this.state.maxFour} characters.</small>
     );

     var MinMaxFour=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minFour} characters, Max {this.state.maxFour} characters.</small>
     );

     var MinFive=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minFive} characters.</small>
     );

     var MaxFive=(
        <small id="emailHelp" class="form-text text-muted">Max {this.state.maxFive} characters.</small>
     );

     var MinMaxFive=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minFive} characters, Max {this.state.maxFive} characters.</small>
     );

     var MinSix=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minSix} characters.</small>
     );
     
     var MaxSix=(
        <small id="emailHelp" class="form-text text-muted">Max {this.state.maxSix} characters.</small>
     );

     var MinMaxSix=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minSix} characters, Max {this.state.maxSix} characters.</small>
     );

     var MinSeven=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minSeven} characters.</small>
     );
     
     var MaxSeven=(
        <small id="emailHelp" class="form-text text-muted">Max {this.state.maxSeven} characters.</small>
     );

     var MinMaxSeven=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minSeven} characters, Max {this.state.maxSeven} characters.</small>
     );

     var MinEight=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minEight} characters.</small>
     );
     
     var MaxEight=(
        <small id="emailHelp" class="form-text text-muted">Max {this.state.maxEight} characters.</small>
     );

     var MinMaxEight=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minEight} characters, Max {this.state.maxEight} characters.</small>
     );

     var MinNine=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minNine} characters.</small>
     );
     
     var MaxNine=(
        <small id="emailHelp" class="form-text text-muted">Max {this.state.maxNine} characters.</small>
     );

     var MinMaxNine=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minNine} characters, Max {this.state.maxNine} characters.</small>
     );

     var MinTen=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minTen} characters.</small>
     );
     
     var MaxTen=(
        <small id="emailHelp" class="form-text text-muted">Max {this.state.maxTen} characters.</small>
     );

     var MinMaxTen=(
        <small id="emailHelp" class="form-text text-muted">Min {this.state.minTen} characters, Max {this.state.maxTen} characters.</small>
     );
     var QuestionThree=(
        <div>
            
            <h6 style={{color:"black", fontFamily:"serif"}}>
                {this.state.questionThree}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
            </h6> 

            <textarea name="answerThree" value={this.state.answerThree} onChange={this.changeHandler} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}>
            </textarea>
            {this.state.minThree!==undefined && this.state.maxThree!==undefined ? MinMaxThree: this.state.minThree!==undefined ? MinThree:this.state.maxThree!==undefined?MaxThree:null}

            <br/>
            <br/>

        </div>
     );

     var QuestionFour=(
        <div>
            
            <h6 style={{color:"black", fontFamily:"serif"}}>
            {this.state.questionFour}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
            </h6> 

            <textarea name="answerFour" onChange={this.changeHandler} value={this.state.answerFour} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
            {this.state.minFour!==undefined && this.state.maxFour!==undefined ? MinMaxFour: this.state.minFour!==undefined ? MinFour:this.state.maxFour!==undefined?MaxFour:null}

            <br/>
            <br/>

        </div>
     );

     var QuestionFive=(
        <div>
            
            <h6 style={{color:"black", fontFamily:"serif"}}>
            {this.state.questionFive}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
            </h6> 

            <textarea name="answerFive" onChange={this.changeHandler} value={this.state.answerFive} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
            {this.state.minFive!==undefined && this.state.maxFive!==undefined ? MinMaxFive: this.state.minFive!==undefined ? MinFive:this.state.maxFive!==undefined?MaxFive:null}

            <br/>
            <br/>

        </div>
     );

     var QuestionSix=(
        <div>
            
            <h6 style={{color:"black", fontFamily:"serif"}}>
            {this.state.questionSix}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
            </h6> 

            <textarea name="answerSix" onChange={this.changeHandler} value={this.state.answerSix} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
            {this.state.minSix!==undefined && this.state.maxSix!==undefined ? MinMaxSix: this.state.minSix!==undefined ? MinSix:this.state.maxSix!==undefined?MaxSix:null}

            <br/>
            <br/>

        </div>
     );

     var QuestionSeven=(
        <div>
            
            <h6 style={{color:"black", fontFamily:"serif"}}>
            {this.state.questionSeven}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
            </h6> 

            <textarea name="answerSeven" onChange={this.changeHandler} value={this.state.answerSeven} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
            {this.state.minSeven!==undefined && this.state.maxSeven!==undefined ? MinMaxSeven: this.state.minSeven!==undefined ? MinSeven:this.state.maxSeven!==undefined?MaxSeven:null}

            <br/>
            <br/>

        </div>
     );

     var QuestionEight=(
        <div>
            
            <h6 style={{color:"black", fontFamily:"serif"}}>
            {this.state.questionEight}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
            </h6> 

            <textarea name="answerEight" onChange={this.changeHandler} value={this.state.answerEight} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
            {this.state.minEight!==undefined && this.state.maxEight!==undefined ? MinMaxEight: this.state.minEight!==undefined ? MinEight:this.state.maxEight!==undefined?MaxEight:null}

            <br/>
            <br/>

        </div>
     );

     var QuestionNine=(
        <div>
            
            <h6 style={{color:"black", fontFamily:"serif"}}>
            {this.state.questionNine}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
            </h6> 

            <textarea name="answerNine" onChange={this.changeHandler} value={this.state.answerNine} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
            {this.state.minNine!==undefined && this.state.maxNine!==undefined ? MinMaxNine: this.state.minNine!==undefined ? MinNine:this.state.maxNine!==undefined?MaxNine:null}

            <br/>
            <br/>

        </div>
     );

     var QuestionTen=(
        <div>
            
            <h6 style={{color:"black", fontFamily:"serif"}}>
            {this.state.questionTen}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
            </h6> 

            <textarea name="answerTen" onChange={this.changeHandler} value={this.state.answerTen} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
            {this.state.minTen!==undefined && this.state.maxTen!==undefined ? MinMaxTen: this.state.minTen!==undefined ? MinTen:this.state.maxTen!==undefined?MaxTen:null}

            <br/>
            <br/>

        </div>
     );

    var Default=(
        <div>
        <br/>
        <br/>
        <br/>
        <Card 
        style={{
            width:"60%",
            height:"5000hv",
            backgroundColor:'rgba(0,0,0.5,0.02)',
            marginLeft:"400px"
            }}
        >
          <Card.Body>
            <div>
                <span style={{color:"white", fontStyle:"italic",fontSize:"1.5em", fontFamily:"Arial",fontWeight:"bold",backgroundColor:"#333FFF",marginLeft:"240px",border: "2px solid black"}}>
                &nbsp;Please fill in this application&nbsp;
                </span>
            <br/>
            <br/>
            <br/>

            <h6 style={{color:"black", fontFamily:"serif"}}>
            {this.state.questionOne} <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
            </h6> 

            <textarea name="answerOne" onChange={this.changeHandler} value={this.state.answerOne} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
            {this.state.minOne!==undefined && this.state.maxOne!==undefined ? MinMaxOne: this.state.minOne!==undefined ? MinOne:this.state.maxOne!==undefined?MaxOne:null}

            <br/>
            <br/>
            
            <h6 style={{color:"black", fontFamily:"serif"}}>
            {this.state.questionTwo} <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
            </h6> 

            <textarea name="answerTwo" onChange={this.changeHandler} value={this.state.answerTwo}class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
            {this.state.minTwo!==undefined && this.state.maxTwo!==undefined ? MinMaxTwo: this.state.minTwo!==undefined ? MinTwo:this.state.maxTwo!==undefined?MaxTwo:null}

            <div >
             <Button
                 label="Submit"
                 style={{marginTop:"2vh",marginLeft: "350px",marginRight:"2500px",width:"100px", height:"35px" ,backgroundColor:"#333FFF",fontSize:"0.7em"}}
                 disabled={!this.validateForm()}
                 onClick={(event) => 
                     this.handleClick(event)
                 }
             >
             Submit
             </Button>
             </div>
            </div>
          </Card.Body>
        </Card>
        </div>
 );
 
     var Mixed=(
        <div>
        <br/>
        <br/>
        <br/>
        <Card 
        style={{
            width:"60%",
            height:"5000hv",
            backgroundColor:'rgba(0,0,0.5,0.02)',
            marginLeft:"400px"
            }}
        >
          <Card.Body>
            <div>
                <span style={{color:"white", fontStyle:"italic",fontSize:"1.5em", fontFamily:"Arial",fontWeight:"bold",backgroundColor:"#333FFF",marginLeft:"240px",border: "2px solid black"}}>
                &nbsp;Please fill in this application&nbsp;
                </span>
            <br/>
            <br/>
            <br/>

            <h6 style={{color:"black", fontFamily:"serif"}}>
            {this.state.questionOne}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
            </h6> 

            <textarea name="answerOne" onChange={this.changeHandler} value={this.state.answerOne} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
            {this.state.minOne!==undefined && this.state.maxOne!==undefined ? MinMaxOne: this.state.minOne!==undefined ? MinOne:this.state.maxOne!==undefined?MaxOne:null}

            <br/>
            <br/>
            
            <h6 style={{color:"black", fontFamily:"serif"}}>
            {this.state.questionTwo}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
            </h6> 

            <textarea name="answerTwo" onChange={this.changeHandler} value={this.state.answerTwo}class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
            {this.state.minTwo!==undefined && this.state.maxTwo!==undefined ? MinMaxTwo: this.state.minTwo!==undefined ? MinTwo:this.state.maxTwo!==undefined?MaxTwo:null}

            {this.state.questionThree===''?QuestionThree:null}
            {this.state.questionFour===''?QuestionFour:null}
            {this.state.questionFive===''?QuestionFive:null}
            {this.state.questionSix===''?QuestionSix:null}
            {this.state.questionSeven===''?QuestionSeven:null}
            {this.state.questionEight===''?QuestionEight:null}
            {this.state.questionNine===''?QuestionNine:null}
            {this.state.questionTen===''?QuestionTen:null}

            <div >
             <Button
                 label="Submit"
                 style={{marginTop:"2vh",marginLeft: "350px",marginRight:"2500px",width:"100px", height:"35px" ,backgroundColor:"#333FFF",fontSize:"0.7em"}}
                 disabled={!this.validateForm()}
                 onClick={(event) => 
                     this.handleClick(event)
                 }
             >
             Submit
             </Button>
             </div>
            </div>
          </Card.Body>
        </Card>
        </div>
     );

     var Customized=(
        <div>
        <br/>
        <br/>
        <br/>
        <Card 
        style={{
            width:"60%",
            height:"5000hv",
            backgroundColor:'rgba(0,0,0.5,0.02)',
            marginLeft:"400px"
            }}
        >
          <Card.Body>
            <div>
                <span style={{color:"white", fontStyle:"italic",fontSize:"1.5em", fontFamily:"Arial",fontWeight:"bold",backgroundColor:"#333FFF",marginLeft:"240px",border: "2px solid black"}}>
                &nbsp;Please fill in this application&nbsp;
                </span>
            <br/>
            <br/>
            <br/>
            
            {this.state.questionThree===undefined ?null:QuestionThree}
            {this.state.questionFour===undefined?null:QuestionFour}
            {this.state.questionFive===undefined ?null:QuestionFive}
            {this.state.questionSix===undefined ?null:QuestionSix}
            {this.state.questionSeven===undefined ?null:QuestionSeven}
            {this.state.questionEight===undefined ?null:QuestionEight}
            {this.state.questionNine===undefined ?null:QuestionNine}
            {this.state.questionTen===undefined ?null:QuestionTen}

            <div >
             <Button
                 label="Submit"
                 style={{marginTop:"0.2vh",marginLeft: "350px",marginRight:"2500px",width:"100px", height:"35px" ,backgroundColor:"#333FFF",fontSize:"0.7em"}}
                 disabled={!this.validateForm()}
                 onClick={(event) => 
                     this.handleClick(event)
                 }
             >
             Submit
             </Button>
             </div>
            </div>
          </Card.Body>
        </Card>
        </div>
     );

      return (
          
        
        <div>
            {this.state.applicationType==='Default'? Default:null}
            {this.state.applicationType==='Mixed'? Mixed:null}
            {this.state.applicationType==='Customized'? Customized:null}

            </div>
        );
    }
  }
export default FillAnApplication
