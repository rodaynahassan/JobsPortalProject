import React, { Component } from 'react'
// import Carousel from 'react-bootstrap/Carousel'
// import { Button } from 'react-bootstrap'
import HomePage from '../layout/homepage.jpg'
import { MDBRow, MDBCol, MDBInput } from 'mdbreact'
import { Button, Card } from 'react-bootstrap'
import Animation from '../layout/animation.mp4'
import Carousel from 'react-bootstrap/Carousel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// import Image2 from '../layout/Image2.jpg'
// import Image3 from '../layout/Image3.jpeg'
// import Image4 from '../layout/Image4.jpeg'
// import firebase from 'firebase'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// import axios from 'axios'
// import setAuthToken from '../../actions/setAuthToken'
// import swal from 'sweetalert'
// import 'bootstrap/dist/css/bootstrap.min.css'

// const apiKey = require('../../config/firebaseAuth').apiKey;
// const authDomain = require('../../config/firebaseAuth').authDomain;

// firebase.initializeApp({
//   apiKey: apiKey,
//   authDomain: authDomain
// })

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
      gender: '',
      isSignedIn: false
    }
  }
  // uiConfig = {
  //   signInFlow: 'popup',
  //   signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  //   callbacks: {
  //     signInSuccess: () => false
  //   }
  // }

  // componentDidMount = () => {
  //   console.log(this.state.isSignedIn)
  //   firebase.auth().onAuthStateChanged(user => {
  //     this.setState({ isSignedIn: user })
  //     if (this.state.isSignedIn) {
  //       this.setState({
  //         name: firebase.auth().currentUser.displayName,
  //         email: firebase.auth().currentUser.email
  //       })
  //       var body = {
  //         name: this.state.name,
  //         email: this.state.email
  //       }
  //       axios
  //         .post('/routes/api/users/googleLogin', body)
  //         .then(res => {
  //           const token = res.data.data
  //           localStorage.setItem('jwtToken', token)
  //           localStorage.setItem('isLoggedIn', true)
  //           setAuthToken(token)
  //           if (localStorage.getItem('isLoggedIn') === 'true') {
  //             document.location.href = '/profile'
  //             this.setState({ isSignedIn: false })
  //           }
  //         })
  //         .catch(err => {
  //           localStorage.setItem('isLoggedIn', false)
  //           swal('Wrong Email or Password!')
  //           return err
  //         })
  //     }
  //   })
  // }
  // props = {
  //   startStyle: { opacity: 0 },
  //   endStyle: { opacity: 1 }
  // }
  // login() {
  //   document.location.href = '/login'
  // }
  // register() {
  //   document.location.href = '/register'
  // }
  
 

  render() {
    return (
      <div>
            <video
							playsinline="playsinline"
							autoplay="autoplay"
							muted="muted"
							// loop="loop"
							width="100%"
							object-fit="cover"
						>
							<source src={Animation} type="video/mp4" />
						</video>
         {/* </div> */}
         <div id="timeOut">
         <Card 
            style={{
                width:"30%",
                height:"470px",
                paddingLeft:"0.5px",
                backgroundColor:'rgba(0,0,0,0.005)',
                marginLeft:"1040px",
                marginTop:"-480px",
                paddingTop:"0.1px"
                }}
            >
              <Card.Body style={{backgroundColor:"dark"}}>
                <div>
				  <MuiThemeProvider style={{marginLeft:"100px"}}>
					<div>
					<h6 style={{fontWeight:"bold",color:"black",marginLeft:"85px",fontSize:"25px",marginTop:"10px"}}>
                    Welcome to JobsHub!
                        </h6>
                                <MDBInput
                                required 
                                 label="Email" 
                                 type="text"
                                 name="email"
                                 value={this.state.email}
                                //  className={
								// 		this.state.oldEmail.length >= 10 && this.state.oldEmail.length <= 30 ? (
								// 			'is-valid'
								// 		) : (
								// 			'is-invalid'
								// 		)
                                //     } 
                                // onChange={this.changeHandler}
                                >
                                </MDBInput>

                                <MDBInput
                                required
							
                                 label="Password" 
                                 type="text"
                                 name="password"
                    //              value={this.state.newEmail}
                    //              className={
										// this.state.newEmail.length >= 10 && this.state.newEmail.length <= 30 ? (
										// 	'is-valid'
										// ) : (
										// 	'is-invalid'
										// )
                    //                 } 
                    //             onChange={this.changeHandler}
                                >
                                </MDBInput>
                                <Button
                  variant="#2e5a7c"
                  hover="white"
									style={{ marginLeft:"70px",width: '270px', height: '40px',backgroundColor:"#0000CC" ,color:"white",hover:"white"}}  
									// onClick={(e) => this.handleSubmit(e)}
									type="submit"
								>
									Sign in
								</Button>
                <br/>
                <br/>

                                <h6 >
                                  <a href="forgotPassword" style={{marginLeft:"78px",textDecoration:'none',color:"black"}}>
                                    Forgot your password? Reset it now!
                                  </a>
                                </h6> 
                                _____________________________________________________________
                                <br/>
                                <p
                  style=
                  {
                      {
                      fontFamily:"Times New Roman",
                      fontSize:"20px",
                      fontStyle:"normal",
                      marginLeft:"150px",
                      // transform:'translate3d(940px,-945px,0)',
                      color:"black"
                      }
                  }
                  >
                   New member?
            </p>
                               
                  <h3 >
									<a href="user" style={{textDecoration:'none',color:"#0000CC",marginLeft:"130px"}}>
										Join us now!
									</a>
								</h3> 
							

                        
					</div>
				</MuiThemeProvider>
                </div>
          </Card.Body>
          </Card>
          </div>
      </div>
    )
  }
}

export default Homepage
