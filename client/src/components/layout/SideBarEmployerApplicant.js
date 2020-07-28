import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import swal from 'sweetalert';
import axios from 'axios';


// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import React, { Component } from 'react';

class SideBarEmployer extends Component {
    state={
        cvType:""
    }
    componentDidMount()
    {
        axios
        .get('/routes/api/cvs/getByJobSeekerId/'+localStorage.getItem('userId'))
        .then((res) => {
            console.log(res.data.data[0].type)
            this.setState({cvType:res.data.data[0].type})
        })
    
    }
	
    redirectApplication()
    {
        document.location.href = '/viewapplication';
    }

    redirectProfile()
    {
        document.location.href = '/viewprofile';
    }

    redirectCV()
    {
        if(this.state.cvType==="Public")
        {
        document.location.href = '/viewcv';
        }
        if (this.state.cvType==="Private")
        {
            swal("Unfortunately, you can't view the applicant's cv because of its privacy. You can send them an email asking for the CV.")
        }
    }

    redirectAccept()
    {
        console.log(localStorage.getItem('jobId'))
        console.log(localStorage.getItem('userId'))
        axios
        .put('/routes/api/jobs/AcceptAJobSeeker/'+localStorage.getItem('jobId')+'/'+localStorage.getItem('userId'))    
        swal("This applicant has been accepted")
    }

    redirectReject()
    {
        console.log(localStorage.getItem('jobId'))
        console.log(localStorage.getItem('userId'))
        axios
        .put('/routes/api/jobs/RejectAJobSeeker/'+localStorage.getItem('jobId')+'/'+localStorage.getItem('userId'))    
        swal("This applicant has been rejected")
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
                            <a href="/viewapplication">
                            <i className="fa fa-list" style={{ fontSize: '1.75em',color:"#3C54F5"}} > </i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a style={{ paddingRight:"90px" ,fontSize:"15px" }}href="/viewapplication">View application</a>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="viewprofile" title="View profile">
                        <NavIcon>
                            <a href="/viewprofile">
                            <i className="far fa-user" style={{ fontSize: '1.75em',color:"#3C54F5"}} > </i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a style={{ paddingRight:"18px" ,fontSize:"15px" }}href="/viewprofile">View profile</a>
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


                    <NavItem eventKey="accept" title="Accept">
                        <NavIcon>
                            <a onClick={() => this.redirectAccept()}>
                            <i className="fa fa-check" style={{ fontSize: '1.75em',color:"green"}} > </i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a style={{ paddingRight:"50px" ,fontSize:"15px" }}onClick={() => this.redirectAccept()}>Accept</a>
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="reject" title="Reject">
                        <NavIcon>
                            <a onClick={() => this.redirectReject()}>
                            <i className="fa fa-times" style={{ fontSize: '1.75em',color:"red"}} onClick={() => this.redirectReject()}> </i>
                            </a>
                        </NavIcon>
                        <NavText>
                            <a style={{ paddingRight:"25px" ,fontSize:"15px" }}href="/changepassword">Reject</a>
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
export default SideBarEmployer;
