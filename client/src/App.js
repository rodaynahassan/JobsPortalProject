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

// import add from './components/pages/EditCV.js'

import NewNavBar from './components/layout/NewNavBar.js';
import SideBar from './components/layout/SideBar.js';

import './App.css'

class App extends Component {
  constructor() {
    super()
    localStorage.setItem('filters', localStorage.getItem('filters') || []);
    localStorage.setItem('filters1', localStorage.getItem('filters1') || []);
  }
  state={
    filters:localStorage.getItem('filters'),
    filters1:localStorage.getItem('filters1'),
    jobId:{}
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
                  path="/"
                  render={props => <CreateANewJob {...props} />}
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
            </Switch>
            </div>
                 {/* {currentLocation==='/personalinfo' || currentLocation==='/changeemail' || currentLocation==='/changepassword' ||currentLocation==='/editcv' || currentLocation==='/cv' ?<SideBar />:null } */}
                  {currentLocation==='/'?null:currentLocation==='/personalinfo' || currentLocation==='/changeemail' || currentLocation==='/changepassword' ||currentLocation==='/editcv'||currentLocation==='/cv' ?<SideBar /> :null}    
                  {/* <NewNavBar/> */}
                  {currentLocation==='/'||currentLocation==='/user'?null:<NewNavBar/>}

                  {/* <SideBar/> */} 
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
