import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {Button,Card} from"react-bootstrap"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { MDBRow, MDBCol, MDBInput, MDBBtn, MDBSelect } from 'mdbreact';
import swal from 'sweetalert';


class AdminViewUserApplication extends Component
{
    constructor(props){
        super(props);
        this.state={
            disabled:true,
            userApplication:'',
            application:'',
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

redirectProfile(userId)
{
    localStorage.setItem('userId',userId)
    document.location.href = '/viewprofile';
}


componentDidMount()
    {
        // axios.get('/routes/api/appplications/getByjobID/'+localStorage.getItem('jobId'))
        axios.get('/routes/api/userApplications/getApplication/'+localStorage.getItem('userApplicationId'))
                .then((response) => {
                    console.log(response.data.userApplication.userId)
                    console.log(response.data.application)

                    this.setState({
                      userId:response.data.userApplication.userId,
                      application:response.data.application,
                      userApplication: response.data.userApplication,
                      applicationType:response.data.application.applicationType,
                      questionOne:response.data.application.questionOne,
                      minOne:response.data.application.minOne,
                      maxOne:response.data.application.maxOne,
                      questionTwo:response.data.application.questionTwo,
                      minTwo:response.data.application.minTwo,
                      maxTwo:response.data.application.maxTwo,
                      questionThree:response.data.application.questionThree,
                      minThree:response.data.application.minThree,
                      maxThree:response.data.application.maxThree,
                      questionFour:response.data.application.questionFour,
                      minFour:response.data.application.minFour,
                      maxFour:response.data.application.maxFour,
                      questionFive:response.data.application.questionFive,
                      minFive:response.data.application.minFive,
                      maxFive:response.data.application.maxFive,
                      questionSix:response.data.application.questionSix,
                      minSix:response.data.application.minSix,
                      maxSix:response.data.application.maxSix,
                      questionSeven:response.data.application.questionSeven,
                      minSeven:response.data.application.minSeven,
                      maxSeven:response.data.application.maxSeven,
                      questionEight:response.data.application.questionEight,
                      minEight:response.data.application.minEight,
                      maxEight:response.data.application.maxEight,
                      questionNine:response.data.application.questionNine,
                      minNine:response.data.application.minNine,
                      maxNine:response.data.application.maxNine,
                      questionTen:response.data.application.questionTen,
                      minTen:response.data.application.minTen,
                      maxTen:response.data.application.maxTen,
                      answerOne:response.data.userApplication.answerOne,
                      answerTwo:response.data.userApplication.answerTwo,
                      answerThree:response.data.userApplication.answerThree,
                      answerFour:response.data.userApplication.answerFour,
                      answerFive:response.data.userApplication.answerFive,
                      answerSix:response.data.userApplication.answerSix,
                      answerSeven:response.data.userApplication.answerSeven,
                      answerEight:response.data.userApplication.answerEight,
                      answerNine:response.data.userApplication.answerNine,
                      answerTen:response.data.userApplication.answerTen
                    });
                });
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
         var QuestionOne=(
            <div>
                
                <h6 style={{color:"black", fontFamily:"serif"}}>
                    {this.state.questionOne}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                </h6> 
    
                <textarea disabled= {this.state.disabled} name="answerOne" value={this.state.answerOne} onChange={this.changeHandler} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}>
                </textarea>
                {this.state.minOne!==undefined && this.state.maxOne!==undefined ? MinMaxOne: this.state.minOne!==undefined ? MinOne:this.state.maxOne!==undefined?MaxOne:null}
    
                <br/>
                <br/>
    
            </div>
         );
    
         var QuestionTwo=(
            <div>
                
                <h6 style={{color:"black", fontFamily:"serif"}}>
                    {this.state.questionTwo}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                </h6> 
    
                <textarea disabled= {this.state.disabled} name="answerTwo" value={this.state.answerTwo} onChange={this.changeHandler} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}>
                </textarea>
                {this.state.minTwo!==undefined && this.state.maxTwo!==undefined ? MinMaxTwo: this.state.minTwo!==undefined ? MinTwo:this.state.maxTwo!==undefined?MaxTwo:null}
    
                <br/>
                <br/>
    
            </div>
         );
    
         var QuestionThree=(
            <div>
                
                <h6 style={{color:"black", fontFamily:"serif"}}>
                    {this.state.questionThree}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                </h6> 
    
                <textarea disabled= {this.state.disabled} name="answerThree" value={this.state.answerThree} onChange={this.changeHandler} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}>
                </textarea>
                {this.state.minThree!==undefined && this.state.maxThree!==undefined && this.state.minThree!=="0" && this.state.maxThree!=="0"? MinMaxThree: this.state.minThree!==undefined && this.state.minThree!=="0" ? MinThree: this.state.maxThree!==undefined && this.state.maxThree!=="0"?MaxThree:null}
    
                <br/>
                <br/>
    
            </div>
         );
    
         var QuestionFour=(
            <div>
                
                <h6 style={{color:"black", fontFamily:"serif"}}>
                {this.state.questionFour}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                </h6> 
    
                <textarea disabled= {this.state.disabled} name="answerFour" onChange={this.changeHandler} value={this.state.answerFour} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
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
    
                <textarea disabled= {this.state.disabled} name="answerFive" onChange={this.changeHandler} value={this.state.answerFive} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
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
    
                <textarea disabled= {this.state.disabled} name="answerSix" onChange={this.changeHandler} value={this.state.answerSix} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
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
    
                <textarea disabled= {this.state.disabled} name="answerSeven" onChange={this.changeHandler} value={this.state.answerSeven} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
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
    
                <textarea disabled= {this.state.disabled} name="answerEight" onChange={this.changeHandler} value={this.state.answerEight} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
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
    
                <textarea disabled= {this.state.disabled} name="answerNine" onChange={this.changeHandler} value={this.state.answerNine} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
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
    
                <textarea disabled= {this.state.disabled} name="answerTen" onChange={this.changeHandler} value={this.state.answerTen} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
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
                    <span style={{color:"white", fontStyle:"italic",fontSize:"1.5em", fontFamily:"Arial",fontWeight:"bold",backgroundColor:"#333FFF",marginLeft:"300px",border: "2px solid black"}}>
                    &nbsp;Applicant's answers&nbsp;
                    </span>
                <br/>
                <br/>
                <br/>
    
                <h6 style={{color:"black", fontFamily:"serif"}}>
                {this.state.questionOne} <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                </h6> 
    
                <textarea disabled= {this.state.disabled} name="answerOne" onChange={this.changeHandler} value={this.state.answerOne} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
                {this.state.minOne!==undefined && this.state.maxOne!==undefined ? MinMaxOne: this.state.minOne!==undefined ? MinOne:this.state.maxOne!==undefined?MaxOne:null}
    
                <br/>
                <br/>
                
                <h6 style={{color:"black", fontFamily:"serif"}}>
                {this.state.questionTwo} <span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                </h6> 
    
                <textarea disabled= {this.state.disabled} name="answerTwo" onChange={this.changeHandler} value={this.state.answerTwo}class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
                {this.state.minTwo!==undefined && this.state.maxTwo!==undefined ? MinMaxTwo: this.state.minTwo!==undefined ? MinTwo:this.state.maxTwo!==undefined?MaxTwo:null}
    
                {/* <div >
                 <Button
                     label="Submit"
                     style={{marginTop:"2vh",marginLeft: "350px",marginRight:"2500px",width:"100px", height:"35px" ,backgroundColor:"#333FFF",fontSize:"0.7em"}}
                    //  disabled={!this.validateForm()}
                    //  onClick={(event) => 
                    //      this.handleClick(event)
                    //  }
                 >
                 Submit
                 </Button>
                 </div> */}
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
                    <span style={{color:"white", fontStyle:"italic",fontSize:"1.5em", fontFamily:"Arial",fontWeight:"bold",backgroundColor:"#333FFF",marginLeft:"300px",border: "2px solid black"}}>
                    &nbsp;Applicant's answers&nbsp;
                    </span>
                <br/>
                <br/>
                <br/>
    
                <h6 style={{color:"black", fontFamily:"serif"}}>
                {this.state.questionOne}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                </h6> 
    
                <textarea disabled= {this.state.disabled} name="answerOne" onChange={this.changeHandler} value={this.state.answerOne} class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
                {this.state.minOne!==undefined && this.state.maxOne!==undefined ? MinMaxOne: this.state.minOne!==undefined ? MinOne:this.state.maxOne!==undefined?MaxOne:null}
    
                <br/>
                <br/>
                
                <h6 style={{color:"black", fontFamily:"serif"}}>
                {this.state.questionTwo}<span style={{color:"red", fontFamily:"monospace",fontSize:"1em",backgroundColor:'rgba(0,0,0.5,0.01)'}}>&nbsp;*</span>
                </h6> 
    
                <textarea disabled= {this.state.disabled} name="answerTwo" onChange={this.changeHandler} value={this.state.answerTwo}class="form-control question-answer" id="answer-465782" placeholder="Your Answer" style={{"height": "100px", "marginTop": "0px", "marginBottom": "0px"}}></textarea>
                {this.state.minTwo!==undefined && this.state.maxTwo!==undefined ? MinMaxTwo: this.state.minTwo!==undefined ? MinTwo:this.state.maxTwo!==undefined?MaxTwo:null}
                
                <br/>
                <br/>
    
                {this.state.questionThree!==undefined?QuestionThree:null}
                {this.state.questionFour!==undefined?QuestionFour:null}
                {this.state.questionFive!==undefined?QuestionFive:null}
                {this.state.questionSix!==undefined?QuestionSix:null}
                {this.state.questionSeven!==undefined?QuestionSeven:null}
                {this.state.questionEight!==undefined?QuestionEight:null}
                {this.state.questionNine!==undefined?QuestionNine:null}
                {this.state.questionTen!==undefined?QuestionTen:null}
    
                {/* <div >
                 <Button
                     label="Submit"
                     style={{marginTop:"2vh",marginLeft: "250px",marginRight:"2500px",width:"120px", height:"35px" ,backgroundColor:"#333FFF",fontSize:"0.8em"}}
                     onClick={() => this.redirectProfile(this.state.userId)}
                 >
                 View Profile
                 </Button>

                 <Button
                     label="Submit"
                     style={{marginTop:"-9.5vh",marginLeft: "400px",marginRight:"2500px",width:"100px", height:"35px" ,backgroundColor:"#333FFF",fontSize:"0.8em"}}
                    //  disabled={!this.validateForm()}
                    //  onClick={(event) => 
                    //      this.handleClick(event)
                    //  }
                 >
                 Accept
                 </Button>


                 <Button
                     label="Submit"
                     style={{marginTop:"-16vh",marginLeft: "530px",marginRight:"2500px",width:"100px", height:"35px" ,backgroundColor:"#333FFF",fontSize:"0.8em"}}
                    //  disabled={!this.validateForm()}
                    //  onClick={(event) => 
                    //      this.handleClick(event)
                    //  }
                 >
                 Reject
                 </Button>

                 </div> */}
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
                    <span style={{color:"white", fontStyle:"italic",fontSize:"1.5em", fontFamily:"Arial",fontWeight:"bold",backgroundColor:"#333FFF",marginLeft:"300px",border: "2px solid black"}}>
                    &nbsp;Applicant's answers&nbsp;
                    </span>
                <br/>
                <br/>
                <br/>
                {this.state.questionOne===undefined ?null:QuestionOne}
                {this.state.questionTwo===undefined ?null:QuestionTwo}
                {this.state.questionThree===undefined ?null:QuestionThree}
                {this.state.questionFour===undefined?null:QuestionFour}
                {this.state.questionFive===undefined ?null:QuestionFive}
                {this.state.questionSix===undefined ?null:QuestionSix}
                {this.state.questionSeven===undefined ?null:QuestionSeven}
                {this.state.questionEight===undefined ?null:QuestionEight}
                {this.state.questionNine===undefined ?null:QuestionNine}
                {this.state.questionTen===undefined ?null:QuestionTen}
{/*     
                <div >
                 <Button
                     label="Submit"
                     style={{marginTop:"0.2vh",marginLeft: "350px",marginRight:"2500px",width:"100px", height:"35px" ,backgroundColor:"#333FFF",fontSize:"0.7em"}}
                    //  disabled={!this.validateForm()}
                    //  onClick={(event) => 
                    //      this.handleClick(event)
                    //  }
                 >
                 Submit
                 </Button>
                 </div> */}
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
export default AdminViewUserApplication
