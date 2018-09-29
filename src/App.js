// importing components to use in this file
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar, NavItem, Nav, NavbarBrand } from 'react-bootstrap'

import MyProfileContainer from './containers/MyProfileContainer'
import AllProfilesContainer from './containers/AllProfilesContainer'
import MyMusicContainer from './containers/MyMusicContainer'
class App extends Component {
  constructor(props) {
    super(props)

    // set title of the webpage when component is created
    document.title = 'My Profile'
  }

  render() {
    return (
      <div>
        {/* ! ADD NAVBAR HERE */}
       <Navbar>
        <Navbar.Header href="/"> 
          <Navbar.Brand>
            <b><font size="+2"><font color="Green"> SongSpace</font> </font></b>
          </Navbar.Brand>
        </Navbar.Header>
       <Nav>
         <NavItem href="/"> 
         <font color="black">Profile</font>
         
         </NavItem>
         <NavItem href="/all"> 
         <font color="black">All Music</font>
         
         </NavItem>
         <NavItem href="/rap">
         <font color="black">Rap Music</font>
         </NavItem>
          <NavItem href="/pop" > 
          <font color="black">Pop Music</font>
         </NavItem> 
         <NavItem href="/country"> 
         <font color="black">Country Music</font>
         </NavItem> 
       </Nav>


       </Navbar>
       

        {/* router to navigate between pages, each page is a container */}
        <Switch>
          <Route exact
            path="/"
            render={() => (
              <MyProfileContainer history={this.props.history} />
            )}
          />
          <Route path="/profiles"
            render={() => (
              <AllProfilesContainer history={this.props.history} />
            )}
          />
          <Route path="/all"
            render={() => (
              <AllProfilesContainer history={this.props.history} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
