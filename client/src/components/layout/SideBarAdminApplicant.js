import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import swal from 'sweetalert';
import axios from 'axios';


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';

class SideBarAdmin extends Component {
    redirectApplication()
    {
        document.location.href = '/adminviewapplication';
    }

    redirectProfile()
    {
        document.location.href = '/adminviewprofile';
    }

    redirectCV()
    {
        document.location.href = '/adminviewcv';
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

                    <NavItem eventKey="application" title="View application">
                        <NavIcon>
                            <a href="/adminviewapplication">
                            <i className="fa fa-list" style={{ fontSize: '1.75em',color:"#3C54F5"}} > </i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a style={{ paddingRight:"90px" ,fontSize:"15px" }}href="/adminviewapplication">View application</a>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="viewprofile" title="View profile">
                        <NavIcon>
                            <a href="/adminviewprofile">
                            <i className="far fa-user" style={{ fontSize: '1.75em',color:"#3C54F5"}} > </i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a style={{ paddingRight:"18px" ,fontSize:"15px" }}href="/adminviewprofile">View profile</a>
                        </NavText>
                    </NavItem>


                    <NavItem eventKey="viewCv" title="View CV">
                        <NavIcon>
                            <a onClick={() => this.redirectCV()}>
                            <i className="far fa-file-pdf" style={{ fontSize: '1.75em',color:"#3C54F5"}} > </i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a style={{ paddingRight:"18px" ,fontSize:"15px" }} onClick={() => this.redirectCV()}>View CV</a>
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>

            </div>
		);
	}
}
export default SideBarAdmin;
