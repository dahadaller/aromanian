import React, { Component } from 'react' ;
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Button, Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import bookimg from "./romanii_din_turcia.png";

class DownloadPage extends Component {
    render() {
        const dp = ( 
        <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link
              </NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                Link Right
              </NavItem>
              <NavItem eventKey={2} href="#">
                Link Right
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <Grid>
            <Row>
                <Col md={6}>
                    <Image src={bookimg} rounded responsive />{/*this is where the cover image goes */}
                </Col>
                <Col md={6}>
                    <Row>
                        <Col md={12}>
                           <h2>De La Romanii Din Turcia Europeana:</h2><br/><h4>Studiu Etic Si Statistic Aspura Armanilor</h4>{ /*title (will need to be routed to database later on)*/}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <p>by Ioan Nenitescu</p>{ /*by author (will need to be routed to database later on)*/}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <p>The title translates to "get translation from sana". It's an ethography or a cultural study of the vlach people written in 1895. Its n out-of-print book that, for the first time in over one hundred ears will be published once again. This time online, for th whole world to access.</p>{ /*description (will need to be routed to database later on)*/}
                        </Col>
                    </Row>            
                    <Row>
                        <Col md={12}>
                            <p>test</p>{ /*Donation Amount (stripe api)*/}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Button bsStyle="primary">Download</Button>{ /*<Button bsStyle="primary">Default button</Button>  (will need to be routed to database later on)*/}
                        </Col>
                    </Row>                                 
                </Col>
            </Row>
        </Grid>
        </div>
        );
        return(dp);
    }

}
export default DownloadPage
