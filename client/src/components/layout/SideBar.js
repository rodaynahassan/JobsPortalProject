import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
// import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import NavLink from 'react-bootstrap/NavLink';
import {
    Button,
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
  } from 'semantic-ui-react'
import { blue100 } from 'material-ui/styles/colors';
import { blue300 } from 'material-ui/styles/colors';
  
class SideBar extends Component {
	
    redirectEmail()
    {
        document.location.href = '/changeemail';
    }

    redirectPassword()
    {
        document.location.href = '/changepassword';
    }

    redirectGetCV()
    {
        document.location.href = '/cv';
    }

    redirectEditCV()
    {
        document.location.href = '/editcv';
    }

	render() {
	
		return (
            <div>
                <br/>
                <br/>
                <br/>

			<SideNav
                // marginLeft="50px"
                onSelect={(selected) => {}}
                // direction="rtl"
                style={{backgroundColor:"black", height: '100%', position: 'fixed',direction:'rtl' ,width:"4%",top:"50px"}}
            >
                <SideNav.Toggle />
                <SideNav.Nav>
                    <NavItem eventKey="personalInfo" title="Personal Info">
                        <NavIcon>
                            <a href="/">
                            <i className="fa fa-info-circle" style={{ fontSize: '1.75em',color:"#3C54F5"}} > </i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a style={{ paddingRight:"90px" ,fontSize:"15px" }}href="/">Personal Info</a>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="changeEmail" title="Change your email">
                        <NavIcon>
                            <a href="/changeemail">
                            <i className="fa fa-at" style={{ fontSize: '1.75em',color:"#3C54F5"}} > </i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a style={{ paddingRight:"50px" ,fontSize:"15px" }}href="/changeemail">Change your email</a>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="chnagePassword" title="Change Password">
                        <NavIcon>
                            <a href="/changepassword">
                            <i className="fa fa-key" style={{ fontSize: '1.75em',color:"#3C54F5"}} > </i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a style={{ paddingRight:"25px" ,fontSize:"15px" }}href="/changepassword">Change your password</a>
                        </NavText>
                    </NavItem>
                  
                    {/* <NavItem eventKey="settings">
						<NavIcon>
							<i className="fa fa-cog" style={{ fontSize: '24px' ,color:"#3C54F5"}} />
						</NavIcon>
						<NavText style={{ direction: 'rtl' }}>Account Settings</NavText>

						<NavItem eventKey="email">
							<NavIcon>
                            <i onClick={() => this.redirectEmail()} className="fa fa-at" style={{ fontSize: '1.1em',color:"#3C54F5" }} >&nbsp;Change your email</i>
							</NavIcon>
						</NavItem>

						<NavItem eventKey="password">
							<NavIcon>
								<i onClick={() => this.redirectPassword()} className="fa fa-key" style={{ fontSize: '1.em',color:"#3C54F5" }} >&nbsp;Change your password</i>
							</NavIcon>
						</NavItem>
					</NavItem> */}
                     <NavItem eventKey="viewCv" title="View/download your CV">
                        <NavIcon>
                            <a href="/cv">
                            <i className="fa fa-file-pdf" style={{ fontSize: '1.75em',color:"#3C54F5"}} > </i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a style={{ paddingRight:"18px" ,fontSize:"15px" }}href="/cv">View/download your CV</a>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="editCv" title="Edit your CV">
                        <NavIcon>
                            <a href="/editcv">
                            <i className="fa fa-edit" style={{ fontSize: '1.7em',color:"#3C54F5"}} > </i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a style={{ paddingRight:"95px" ,fontSize:"15px" }}href="/editcv">Edit your CV</a>
                        </NavText>
                    </NavItem>

                    {/* <NavItem eventKey="cv">
						<NavIcon>
							<i className="fa fa-file" style={{ fontSize: '24px' ,color:"#3C54F5"}} />
						</NavIcon>
						<NavText style={{ direction: 'rtl' }}>CV</NavText>

						<NavItem eventKey="yourCv">
							<NavIcon>
                            <i onClick={() => this.redirectGetCV()} className="fa fa-file-pdf" style={{ fontSize: '1.2em',color:"#3C54F5" }} >&nbsp;View and download your CV</i>
							</NavIcon>
						</NavItem>

						<NavItem eventKey="editCv">
							<NavIcon>
								<i onClick={() => this.redirectEditCV()} className="fa fa-edit" style={{ fontSize: '1.2em',color:"#3C54F5" }} >&nbsp;Edit your CV</i>
							</NavIcon>
						</NavItem>
					</NavItem> */}
                </SideNav.Nav>
            </SideNav>

            </div>
		);
	}
}
export default SideBar;
