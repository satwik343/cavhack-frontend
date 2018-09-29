import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

// Hardcoded users for All Profiles page
const users = [
  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Doe',
  },
  {
    id: 2,
    firstName: 'Joe',
    lastName: 'Somebody',
  },
  {
    id: 3,
    firstName: 'Jack',
    lastName: 'Doe',
  },
  {
    id: 4,
    firstName: 'Sally',
    lastName: 'Doe',
  }
]

class AllProfilesContainer extends Component {
  render() {

    // ADD MAPPING FOR ALL USERS TO DYNAMICALLY CREATE CARDS HERE

    return (
      <Grid>
        <Row>
          <a href="https://www.youtube.com/watch?v=0KSOMA3QBU0" > 
          <font size="+2">Dark Horse </font></a>
          <br/> <br/>
                   
          <a href="https://www.youtube.com/watch?v=WrsFXgQk5UI" > 
          <font size="+2">XO Tour Life </font></a>
          <br/> <br/>
          <a href="https://www.youtube.com/watch?v=C5ELClt4JEc" > 
          <font size="+2">Baby Powder</font></a>
          <br/> <br/>
          <a href="https://www.youtube.com/watch?v=Xmz9CPuQGp0" > 
          <font size="+2">Green Tractor </font></a>
          <br/> <br/>
          <a href="https://www.youtube.com/watch?v=xpVfcZ0ZcFM" > 
          <font size="+2">Gods Plan</font></a>
          <br/> <br/>
          <a href="https://www.youtube.com/watch?v=PczuoZJ-PtM" > 
          <font size="+2">New Patek</font></a>
          <br/> <br/>
          <a href="https://www.youtube.com/watch?v=JdkhJhtxFl4" > 
          <font size="+2">Better Now </font></a>
          <br/><br/><br/>

          <h> <font size="+4"><font color="Red">I hope you enjoy this music!</font></font> </h>

          {/* ADD ALL PROFILES CREATED ABOVE HERE */}
         
        </Row>
      </Grid>
    )
  }
}

export default AllProfilesContainer