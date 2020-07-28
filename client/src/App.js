import React, { Component } from 'react'
import Page from 'react-page-loading';
import { Provider } from 'react-redux'; //new stuff
import store from './store'; //new stuff
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Homepage from './components/pages/Homepage.js'
import User from './components/pages/User.js'
import Register from './components/pages/Register.js'
import GetAllJobs from './components/pages/GetAllJobs.js'
import JobDetails from './components/pages/JobDetails.js'
import FillAnApplication from './components/pages/FillAnApplication.js'
import EditAnApplication from './components/pages/EditAnApplication.js'
import Applications from './components/pages/Applications.js'
import SavedJobs from './components/pages/SavedJobs.js'
import FilteredJobs from './components/pages/FilteredJobs.js'
import PersonalInfo from './components/pages/PersonalInfo.js'
import ChangeEmail from './components/pages/ChangeEmail.js'
import ChangePassword from './components/pages/ChangePassword.js'
import EditCV from './components/pages/EditCV.js'
import CV from './components/pages/CV.js'
import CreateANewJob from './components/pages/CreateANewJob.js'
import CheckboxExampleToggle from './components/pages/CheckboxExampleToggle.js'
import ChooseAnApplication from './components/pages/ChooseAnApplication';
import Questions from './components/pages/Questions.js';

// import add from './components/pages/EditCV.js'

import NewNavBar from './components/layout/NewNavBar.js';
import SideBar from './components/layout/SideBar.js';

import './App.css'
import EmployerJobs from './components/pages/EmployerJobs';
import EmployerJobDetails from './components/pages/EmployerJobDetails';
import ViewUserApplication from './components/pages/ViewUserApplication';
import ViewPersonalInfo from './components/pages/ViewPersonalInfo';
import ViewCv from './components/pages/ViewCv';
import Applicants from './components/pages/Applicants';
import SideBarEmployerApplicant from './components/layout/SideBarEmployerApplicant';
import SideBarEmployer from './components/layout/SideBarEmployer';

import AdminAllJobs from './components/pages/AdminAllJobs';
import AdminApplicants from './components/pages/AdminApplicants';
import AdminViewUserApplication from './components/pages/AdminViewUserApplication';
import AdminViewPersonalInfo from './components/pages/AdminViewPersonalInfo';
import AdminViewCv from './components/pages/AdminViewCV';
import SideBarAdminApplicant from './components/layout/SideBarAdminApplicant';
import SideBarAdmin from './components/layout/SideBarAdmin';
import AdminJobDetails from './components/pages/AdminJobDetails';
import GetAllJobSeekers from './components/pages/GetAllJobSeekers';
import GetAllEmployers from './components/pages/GetAllEmployers';
import EmployerPersonalInfo from './components/pages/EmployerPersonalInfo';
import EmployerCompany from './components/pages/EmployerCompany';
import AdminInfo from './components/pages/AdminInfo';
import AdminChangeEmail from './components/pages/AdminChangeEmail';
import AdminChangePassword from './components/pages/AdminChangePassword';
import EmployerChangeEmail from './components/pages/EmployerChangeEmail';
import EmployerChangePassword from './components/pages/EmployerChangePassword';

class App extends Component {
  constructor() {
    super()
    localStorage.setItem('filters', localStorage.getItem('filters') || []);
    localStorage.setItem('filters1', localStorage.getItem('filters1') || []);
  }
  state={
    filters:localStorage.getItem('filters'),
    filters1:localStorage.getItem('filters1'),
    jobId:{},
    languages:[]
  }
  
  setFilters=(filters)=>
  {
    this.setState({filters:filters})
  }

  setFilters=(filters1)=>
  {
    this.setState({filters1:filters1})
  }

  setJobId=(jobId)=>{
    this.setState({jobId:jobId})
  };

  setLanguages=(languages)=>{
    this.setState({languages:languages})
  };
  render() {
    var currentLocation = window.location.pathname;
    return (
      <div style={{ minHeight: '100hv' }}>
        <Page loader={'bubble-spin'} color={'#A9A9A9'} size={12}>
        <body
						style={{
							position: 'relative',
							minHeight: '100vh'
						}}
					>
          <Provider store={store}>
          <div style={{ paddingBottom: '7rem' }}>
          <Router>
            <div>
              <Switch>
                <Route
                  exact
                  path="/jobs"
                  render={props => <GetAllJobs {...props} />}
                />
                <Route
                  exact
                  path="/cv"
                  render={props => <CV {...props} />}
                />

                <Route
                  exact
                  path="/trial"
                  render={props => <CheckboxExampleToggle {...props} />}
                />

                <Route
                  exact
                  path="/newjob"
                  render={props => <CreateANewJob {...props} />}
                />

                <Route
                  exact
                  path="/questions"
                  render={props => <Questions {...props} />}
                />

                <Route
                  exact
                  path="/postedjobs"
                  render={props => <EmployerJobs {...props} />}
                />

                <Route
                  exact
                  path="/details"
                  render={props => <EmployerJobDetails {...props} />}
                />

                <Route
                  exact
                  path="/applicants"
                  render={props => <Applicants {...props} />}
                />

                <Route
                  exact
                  path="/viewapplication"
                  render={props => <ViewUserApplication {...props} />}
                />

                <Route
                  exact
                  path="/viewprofile"
                  render={props => <ViewPersonalInfo {...props} />}
                />

                <Route
                  exact
                  path="/viewcv"
                  render={props => <ViewCv {...props} />}
                />



                <Route
                  exact
                  path="/choosetype"
                  render={props => <ChooseAnApplication {...props} />}
                />

                <Route
                  exact
                  path="/user"
                  render={props => <User {...props} />}
                />
                
                <Route
                  exact
                  path="/register"
                  render={props => <Register {...props} />}
                />
{/* 
                  <Route
                exact
                path="/"
                render={props => <GetAllJobs {...props} filters={this.state.filters} filters1={this.state.filters1} />}
              /> */}

              <Route
                exact
                path="/filteredjobs"
                render={props => <FilteredJobs {...props} />}
              />
              <Route
                  exact
                  path="/jobdetails"
                  render={props => <JobDetails {...props} />}
              />

              <Route
                  exact
                  path="/application"
                  render={props => <FillAnApplication {...props} />}
              />

              <Route
                  exact
                  path="/applications"
                  render={props => <Applications {...props} />}
              />

              <Route
                  exact
                  path="/savedjobs"
                  render={props => <SavedJobs {...props} />}
              />

              <Route
                  exact
                  path="/editapplication"
                  render={props => <EditAnApplication {...props} />}
              />

              <Route
                  exact
                  path="/personalinfo"
                  render={props => <PersonalInfo {...props} />}
                />

              <Route
                  exact
                  path="/changeemail"
                  render={props => <ChangeEmail {...props} />}
                />

              <Route
                  exact
                  path="/changepassword"
                  render={props => <ChangePassword {...props} />}
                />

              <Route
                  exact
                  path="/editcv"
                  render={props => <EditCV {...props} />}
                />

                <Route
                  exact
                  path="/adminjobs"
                  render={props => <AdminAllJobs {...props} />}
                />

                <Route
                  exact
                  path="/adminapplicants"
                  render={props => <AdminApplicants {...props} />}
                />

                <Route
                  exact
                  path="/adminviewapplication"
                  render={props => <AdminViewUserApplication {...props} />}
                />

                <Route
                  exact
                  path="/adminviewprofile"
                  render={props => <AdminViewPersonalInfo {...props} />}
                />

                <Route
                  exact
                  path="/adminviewcv"
                  render={props => <AdminViewCv {...props} />}
                />

                <Route
                  exact
                  path="/adminjobdetails"
                  render={props => <AdminJobDetails {...props} />}
                />

                <Route
                  exact
                  path="/jobseekers"
                  render={props => <GetAllJobSeekers {...props} />}
                />

                <Route
                  exact
                  path="/employers"
                  render={props => <GetAllEmployers {...props} />}
                />

                <Route
                  exact
                  path="/employerinfo"
                  render={props => <EmployerPersonalInfo {...props} />}
                />

                <Route
                  exact
                  path="/employercompany"
                  render={props => <EmployerCompany {...props} />}
                />

                  <Route
                  exact
                  path="/admininfo"
                  render={props => <AdminInfo {...props} />}
                />

              <Route
                  exact
                  path="/adminchangeemail"
                  render={props => <AdminChangeEmail {...props} />}
                />

                <Route
                  exact
                  path="/adminchangepassword"
                  render={props => <AdminChangePassword {...props} />}
                />

                <Route
                  exact
                  path="/employerchangepassword"
                  render={props => <EmployerChangePassword {...props} />}
                />

                <Route
                  exact
                  path="/employerchangeemail"
                  render={props => <EmployerChangeEmail {...props} />}
                />





            </Switch>
            </div>
                 {/* {currentLocation==='/personalinfo' || currentLocation==='/changeemail' || currentLocation==='/changepassword' ||currentLocation==='/editcv' || currentLocation==='/cv' ?<SideBar />:null } */}
                  {/* {currentLocation==='/'?null:currentLocation==='/personalinfo' || currentLocation==='/changeemail' || currentLocation==='/changepassword' ||currentLocation==='/editcv'||currentLocation==='/cv' ?<SideBar /> :null}     */}
                  <NewNavBar/>
                  {/* {currentLocation==='/'||currentLocation==='/user'?null:<NewNavBar/>} */}
                  {currentLocation==='/viewcv'||currentLocation==='/viewprofile'|| currentLocation==='/viewapplication'?<SideBarEmployerApplicant/>:null}
                  {currentLocation==='/adminviewcv'||currentLocation==='/adminviewprofile'|| currentLocation==='/adminviewapplication'?<SideBarAdminApplicant/>:null}
                  {currentLocation==='/employerchangeemail'||currentLocation==='/employerchangepassword'|| currentLocation==='/employerinfo'?<SideBarEmployer/>:null}
                  {currentLocation==='/adminchangeemail'||currentLocation==='/adminchangepassword'|| currentLocation==='/admininfo'?<SideBarAdmin/>:null}

                  {/* <SideBar/> */}
                  {/* <SideBarEmployer/>  */}
          </Router>
          </div>
						</Provider>
					</body>
				</Page>
      </div>

    )
  }
}

export default App
