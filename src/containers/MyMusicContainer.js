import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid, Row, Col, Image, PageHeader, Panel, Button } from 'react-bootstrap'
import { AddModal } from '../components/Modal/Modal'

import { getUserProfile } from '../actions/api'

class MyProfileContainer extends Component {
  constructor(props) {
    super(props)

    // State variables to be tracked in the component
    this.state = {
      showModal: false,
      type: '',
      addValue: ''
    }

    // ADD FUNCTION BINDINGS HERE

  }

  componentDidMount() {

    // ADD CHECK FOR USER QUERY PARAMETER HERE

  }

  // ADD FUNCTION TO HANDLE OPENING THE MODAL HERE (with "type" variable)
  handleModalOpen(type) {}

  // ADD FUNCTION TO HANDLE CLOSING THE MODAL HERE
  handleModalClose() {}

  // ADD FUNCTION TO TRACK TEXT CHANGES HERE (with event variable)
  handleTextChange(e) {}

  // ADD FUNCTION TO HANDLE SUBMITTING "ADD" FORM HERE
  handleAddSubmit() {}

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid valign-wrapper">
            <Col xs={12} md={8} lg={4}>
              {/* ADD PROFILE IMAGE HERE */}
              <Image src="https://chantillynews.org/wp-content/uploads/2017/01/nationalmentoringmonth1-900x561.png" thumbnail />
            </Col>
            <Col xs={12} md={4} lg={8}>
              {/* ADD PAGE HEADER WITH NAME AND ABOUT ME HEADINGS HERE */}
              
              {/* ADD ABOUT ME DESCRIPTION HERE */}
              

            </Col>
          </Row>
          <Row className="show-grid">

            {/* Include all sections in the following column */}
            <Col xs={12}>

              {/* ADD HEADER FOR SECTION HERE */}
              <pageheader>
              <font size="+3"><u>My Music Taste</u></font>
              </pageheader>
              <Panel>
              <font size="+1">The type of music I like is Rap and Pop, but sometimes country</font>
              </Panel>
              <br/>
              <h> <font size="+1">Playlists   </font> </h> 
              &emsp;&emsp;&emsp;&emsp;&emsp;
              <h> <font size="+1">Followers  </font> </h>
              &emsp;&emsp;&emsp;&emsp;&emsp;
              <h> <font size="+1">Following  </font> </h>
              <br/>
              &emsp;
              <h> <font size="+1">3</font> </h> 
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <h> <font size="+1">45</font> </h> 
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <h> <font size="+1">32</font> </h> 
              <br/><br/><br/><br/><br/>
              <h><font size ="+3">Recently Played Artists</font></h>
              <br/><br/>
              <h><font size ="+2">Uzi Boi</font></h>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <Image src="https://sslb.ulximg.com/image/405x405/artist/1464961822_6e757496657e78e0a893e0c8a3753afd.jpg/8b9b3e01b6e633fbd3974385e88c2f50/1464961822_bfdbd37bf6376d367e672d59e2b22b11.jpg" thumbnail />
              <br/><br/>
              <h><font size ="+2">Bandingo YGNE</font></h>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <Image src="https://i.ytimg.com/vi/CevxZvSJLk8/maxresdefault.jpg" thumbnail />
              <br/><br/> <br/><br/> <br/><br/>
              <h><font size ="+2">Uzi Boi</font></h>
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <Image src="https://i.ytimg.com/vi/CevxZvSJLk8/maxresdefault.jpg" thumbnail />
              <br/><br/>
              

              {/* ADD PANEL FOR SECTION INFORMATION WITH LIST HERE */}

              {/* ADD BUTTON FOR ADDITIONAL INFORMATION HERE */}

            </Col>
          </Row>
        </Grid>

        {/* ADD MODAL HERE */}

      </div>
    )
  }
}

// Uses withRouter to grab query paramters in URL (ex: http://localhost:3000?user=1 where user is the query parameter)
export default withRouter(MyProfileContainer)