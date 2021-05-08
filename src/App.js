import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Signup from './components/auth/Signup';
import AuthService from './components/auth/auth-service';
import Login from './components/auth/Login';
//import ProtectedRoute from './components/auth/protected-route';
import AddBusiness from './components/Business/AddBusiness';
import BusinessList from './components/Business/BusinessList';
import BusinessEdit from './components/Business/editBusiness';
import AddCourse from './components/Course/AddCourse';
import CourseList from './components/Course/CourseList';
import CourseEdit from './components/Course/editCourse';
import AddGuide from './components/Guide/AddGuide';
import GuideList from './components/Guide/GuideList';
import GuideEdit from './components/Guide/editGuide';
import AddMonument from './components/Monument/AddMonument';
import MonumentList from './components/Monument/MonumentList';
import MonumentEdit from './components/Monument/editMonument';


class App extends Component {
  state = { loggedInUser: null }

  service = new AuthService()

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service.loggedin()
        .then((response) => {
          this.setState({
            loggedInUser: response,
          })
        })
        .catch((err) => {
          this.setState({
            loggedInUser: false
          })
        })
    }
  }

  setTheUser = (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
    console.log("user is", this.state.loggedInUser)
  }

  render() {
    this.fetchUser()
    return (
      <div className="App">
        <Navbar loggedInUser={this.state.loggedInUser} setTheUser={this.setTheUser} />
        <Switch>
          <Route exact path='/signup' render={(props) => <Signup setTheUser={this.setTheUser} {...props} />} />
          <Route exact path='/login' render={(props) => <Login setTheUser={this.setTheUser} {...props} />} />
          <Route exact path='/business/add' render={(props) => <AddBusiness setTheUser={this.setTheUser} {...props} />} />
          <Route exact path='/business/list' render={(props) => <BusinessList setTheUser={this.setTheUser} {...props} />} />
          <Route exact path='/business/:id/edit' render={(props) => <BusinessEdit setTheUser={this.setTheUser} {...props} />} />
          <Route exact path='/course/add' render={(props) => <AddCourse setTheUser={this.setTheUser} {...props} />} />
          <Route exact path='/course/list' render={(props) => <CourseList setTheUser={this.setTheUser} {...props} />} />
          <Route exact path='/course/:id/edit' render={(props) => <CourseEdit setTheUser={this.setTheUser} {...props} />} />
          <Route exact path='/guide/add' render={(props) => <AddGuide setTheUser={this.setTheUser} {...props} />} />
          <Route exact path='/guide/list' render={(props) => <GuideList setTheUser={this.setTheUser} {...props} />} />
          <Route exact path='/guide/:id/edit' render={(props) => <GuideEdit setTheUser={this.setTheUser} {...props} />} />
          <Route exact path='/monument/add' render={(props) => <AddMonument setTheUser={this.setTheUser} {...props} />} />
          <Route exact path='/monument/list' render={(props) => <MonumentList setTheUser={this.setTheUser} {...props} />} />
          <Route exact path='/monument/:id/edit' render={(props) => <MonumentEdit setTheUser={this.setTheUser} {...props} />} />
        </Switch>
      </div>
    );
  }
}
export default App;