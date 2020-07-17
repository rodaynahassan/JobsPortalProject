import React, { Component } from 'react'
// import Carousel from 'react-bootstrap/Carousel'
// import { Button } from 'react-bootstrap'
import iconz from '../layout/iconz.png'

import Employer from '../layout/employericon.png'
import CareerAdvisor from '../layout/careerAdvisoricon.PNG'
import HomePage from '../layout/homepage.jpg'

import { MDBRow, MDBCol, MDBInput } from 'mdbreact'
import { Button } from 'react-bootstrap'

// import setAuthToken from '../../actions/setAuthToken'
// import swal from 'sweetalert'
import 'bootstrap/dist/css/bootstrap.min.css'

class User extends Component {
    handleSubmit1(e)
    {
        document.location.href = '/register';
    }

    handleSubmit2(e)
    {
        document.location.href = '/employer';
    }

    handleSubmit3(e)
    {
        document.location.href = '/careeradvisor';
    }
//   constructor(props) {
//     super(props)
//     this.state = {
//       
//     }
//   }

//   componentDidMount = () => {
//     console.log(this.state.isSignedIn)
//     firebase.auth().onAuthStateChanged(user => {
//       this.setState({ isSignedIn: user })
//       if (this.state.isSignedIn) {
//         this.setState({
//           name: firebase.auth().currentUser.displayName,
//           email: firebase.auth().currentUser.email
//         })
//         var body = {
//           name: this.state.name,
//           email: this.state.email
//         }
//         axios
//           .post('/routes/api/users/googleLogin', body)
//           .then(res => {
//             const token = res.data.data
//             localStorage.setItem('jwtToken', token)
//             localStorage.setItem('isLoggedIn', true)
//             setAuthToken(token)
//             if (localStorage.getItem('isLoggedIn') === 'true') {
//               document.location.href = '/profile'
//               this.setState({ isSignedIn: false })
//             }
//           })
//           .catch(err => {
//             localStorage.setItem('isLoggedIn', false)
//             swal('Wrong Email or Password!')
//             return err
//           })
//       }
//     })
//   }
//   props = {
//     startStyle: { opacity: 0 },
//     endStyle: { opacity: 1 }
//   }
//   login() {
//     document.location.href = '/login'
//   }
//   register() {
//     document.location.href = '/register'
//   }
  
      render() {
    return (

      <div>
        <img
            src={HomePage}
            style={{
              backgroundSize: 'cover',
              width: '100%',
              height: '100%',
              position: 'sticky',
              zIndex: '0'
            }}
        />

        <div 
            class="container" 
            style=
            {
                {
                 height: "400px",
                 width: "980px",
                 backgroundColor: "white",      
                 transform:'translate3d(15px,-550px,0)',
                 opacity: '0.9'
                }
            }
        >
        </div>

        <p
            style=
            {
                {
                 fontFamily:"Times New Roman",
                 fontSize:"26px",
                 fontStyle:"normal",
                 transform:'translate3d(320px,-910px,0)',
                 color:"black"
                }
            }
            >
               Want to find jobs?
        </p>

        <img
            src={iconz}
            style={{
              width: '200px',
              height: '190px',
              position: 'sticky',
              transform:'translate3d(320px,-900px,0)'
            }}
        />

        <div className="text-center mb-3">
            <Button
                variant="#2e5a7c"
                hover="white"
                style={{ width: '220px', height: '40px',backgroundColor:"#3388FF" ,transform:'translate3d(-340px,-875px,0)',color:"white",hover:"white",fontSize:"15px"}}  
                onClick={(e) => this.handleSubmit1(e)}
                type="submit"
             >
             Register as a Job Seeker
            </Button>
        </div>
        
        <p
            style=
            {
                {
                 fontFamily:"Times New Roman",
                 fontSize:"26px",
                 fontStyle:"normal",
                 transform:'translate3d(630px,-1222px,0)',
                 color:"black"
                }
            }
            >
               Want to offer jobs?
        </p>

        <img
            src={Employer}
            style={{
              width: '250px',
              height: '190px',
              position: 'sticky',
              transform:'translate3d(610px,-1200px,0)'
            }}
        />

        <div className="text-center mb-3">
            <Button
                variant="#2e5a7c"
                hover="white"
                style={{ width: '220px', height: '40px',backgroundColor:"#3388FF" ,transform:'translate3d(-20px,-1190px,0)',color:"white",hover:"white",fontSize:"15px"}}  
                onClick={(e) => this.handleSubmit2(e)}
                type="submit"
             >
             Register as an Employer
            </Button>
        </div>

        <p
            style=
            {
                {
                 fontFamily:"Times New Roman",
                 fontSize:"26px",
                 fontStyle:"normal",
                 transform:'translate3d(930px,-1533px,0)',
                 color:"black"
                }
            }
            >
               Want to be a consultant?
        </p>

        <img
            src={CareerAdvisor}
            style={{
              width: '200px',
              height: '170px',
              position: 'sticky',
              transform:'translate3d(950px,-1510px,0)'
            //   zIndex: '0'
            }}
        />

        <div className="text-center mb-3">
            <Button
                variant="#2e5a7c"
                hover="white"
                style={{ width: '250px', height: '40px',backgroundColor:"#3388FF" ,transform:'translate3d(300px,-1480px,0)',color:"white",hover:"white",fontSize:"14px"}}  
                onClick={(e) => this.handleSubmit3(e)}
                type="submit"
             >
             Register as a Career Advisor
            </Button>
        </div>
        <Button
                variant="#2e5a7c"
                hover="white"
                style={{ width: '280px', height: '40px',backgroundColor:"#3388FF" ,transform:'translate3d(610px,-1450px,0)',color:"white",hover:"white",fontSize:"16px"}}  
                onClick={(e) => this.handleSubmit3(e)}
                type="submit"
             >
             Already a member? Sign in!
            </Button>
            </div>
    )
  }
}

export default User
