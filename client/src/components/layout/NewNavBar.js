import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Badge, ListGroup } from 'react-bootstrap';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { Button } from 'mdbreact';
import { red100, blue300 } from 'material-ui/styles/colors';
import { blue100 } from 'material-ui/styles/colors';
import { blue200 } from 'material-ui/styles/colors';
import { lightBlue100 } from 'material-ui/styles/colors';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo_edited from '../layout/logo_edited.png';
import { MDBRow, MDBCol, MDBInput } from 'mdbreact';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


var $ = require('jquery')(window);

class NewNavBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
            firstName:'',
            lastName:''
		};

		axios
			.get('/routes/api/jobSeekers/getByID/5e7d35d36626c516005f62a1')
			.then((response) => {
                console.log(response.data.data.gender)
				this.setState({
                    firstName: response.data.data.firstName,
					lastName: response.data.data.lastName
				});
            }
           );
	}
	
	logOut() {
		// localStorage.setItem('isLoggedIn', 'false');
		// localStorage.setItem('jwtToken', '');
		// localStorage.setItem('type', '');
		document.location.href = '/';
    }
    
    viewProfile(){
        document.location.href = '/personalinfo';
    }

    editProfile(){
        document.location.href = '/editprofile';
    }

    careerCoaching(){
        document.location.href = '/careerCoaching';
    }

    aboutUs(){
        document.location.href = '/aboutus';
	}
	
	contactUs(){
        document.location.href = '/contactus';
    }

	// changeHandler = (event) => {
	// 	this.setState({ [event.target.name]: event.target.value });
	// 	document.location.href = '/profile';
	// };

	// changeHandler2 = (event) => {
	// 	this.setState({ [event.target.name]: event.target.value });
	// 	document.location.href = '/editprofile';
	// };

	render() {
			return (
			<div style={{  justifyItems: 'center' }}>
				<nav
					class="navbar navbar-expand-sm bg-black navbar-dark"
					style={{
						backgroundColor:"black",
						position: 'fixed',
						padding: '0.5px',
						listStyle: 'none',
						margin: ' 0 auto',
						left: '0',
						top: '0',
						zIndex: '1',
						width: '100%'
					}}
				>
					<img src={logo_edited} width="35" heigth="10" style={{ color: "#3388FF" , marginLeft:"100px"}} alt="" />
					<ul class="navbar-nav nav-fill w-100">
						
                        <li class="nav-item" color="blue">
                            <input type="text" placeholder="Search for jobs" color="blue"fontColor= "#333FFF" name="search" style={{marginTop:"10px", marginLeft:"-65px",color:"blue"}} />
                            <button type="submit" backgroundColor="#333FFF"><i class="fa fa-search" color="#333FFF"></i></button>
						</li>

                        <li class="nav-item" >
							<a
								class="nav-link"
								className="fa fa-home"
                                // href="/"
                                href="/jobs"
								style={{ color: "#3C54F5", paddingTop: '14px', fontSize: '0.85em',marginLeft:"-125px" }}
							> 
							<br/>
							 Home
							</a>
						</li>

						<li class="nav-item" color="white">
							<a
								class="nav-link"
								className="fas fa-list-alt"
								href="/applications"
								style={{ color: "#3C54F5", paddingTop: '14px', fontSize: '0.85em',marginLeft:"-255px" }}
							>
							<br/>
							  Applications
							</a>
						</li>

						<li class="nav-item" color="white">
							<a
								class="nav-link"
								href="/savedjobs"
								className="fas fa-briefcase"
								style={{ color: "#3C54F5", paddingTop: '14px', fontSize: '0.85em',marginLeft:"-365px" }}
								>
							<br/>
								Saved jobs
							  </a>
						</li>

						<li class="nav-item" color="white">
							<a
								class="nav-link"
								href="/notifications"
								className="fas fa-bell"
								style={{ color: "#3C54F5", paddingTop: '13px', fontSize: '0.85em',marginLeft:"-475px"}}
								>
									<span class="badge badge-light" >3</span>
							<br/>
							Notifications
							  </a>
						</li>

						<li class="nav-item dropdown">
							<Dropdown class="widthd" multiple="multiple" >
								<Dropdown.Toggle variant={blue100} >
									<i className="fas fa-user-tie" style={{ color: "#3C54F5", fontSize: '0.9em'}}/>
								</Dropdown.Toggle>
								<Dropdown.Menu height="20px" multiple="multiple">
								<Dropdown.Item disabled header>{this.state.firstName}&nbsp;{this.state.lastName}</Dropdown.Item>
								<Dropdown.Divider />	
									<Dropdown.Item
										fontcolor= "#333FFF" 
										onClick={() => this.viewProfile()}
										style={{ textAlign: 'left', color: "#3C54F5" }}
										// className="fas fa-user"
									>
										{' '}
										View Profile
									</Dropdown.Item>
									{/* <Dropdown.Divider />							 */}
									<Dropdown.Item
										onClick={() => this.careerCoaching()}
										style={{ textAlign: 'left', color: "#3C54F5" }}
										// className="fas fa-comments"

									>
										{' '}
										Career Advising
									</Dropdown.Item>
									{/* <Dropdown.Divider /> */}
									<Dropdown.Item
										onClick={() => this.logOut()}
										style={{ textAlign: 'left', color: "#3C54F5" }}
									>
										{' '}
										Log out
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</li>
					</ul>
				</nav>
			</div>
		);
		
	}
	
}

export default NewNavBar;
