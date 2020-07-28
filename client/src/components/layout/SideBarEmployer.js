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
  
class SideBarEmployer extends Component {
	
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
                            <a href="/employerinfo">
                            <i className="fa fa-info-circle" style={{ fontSize: '1.75em',color:"#3C54F5"}} > </i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a style={{ paddingRight:"90px" ,fontSize:"15px" }}href="/employerinfo">Personal Info</a>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="changeEmail" title="Change your email">
                        <NavIcon>
                            <a href="/employerchangeemail">
                            <i className="fa fa-at" style={{ fontSize: '1.75em',color:"#3C54F5"}} > </i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a style={{ paddingRight:"50px" ,fontSize:"15px" }}href="/employerchangeemail">Change your email</a>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="chnagePassword" title="Change Password">
                        <NavIcon>
                            <a href="/employerchangepassword">
                            <i className="fa fa-key" style={{ fontSize: '1.75em',color:"#3C54F5"}} > </i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a style={{ paddingRight:"25px" ,fontSize:"15px" }}href="/employerchangepassword">Change your password</a>
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>

            </div>
		);
	}
}
export default SideBarEmployer;
