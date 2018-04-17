import React, { Component } from 'react' ;
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, Image, Button, ButtonToolbar, ToggleButtonGroup, ToggleButton, Grid, Row, Col, Form, FormGroup, InputGroup, FormControl} from 'react-bootstrap';
import bookimg from "./romanii_din_turcia.png";

class DownloadPage extends Component {
    render() {
        const dp = ( 
        <div>
          <header>
            <Navbar>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="#brand"><h1>Aromanian.org</h1></a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav pullRight>
                  <NavItem eventKey={1} href="#Books">
                    Books
                  </NavItem>
                  <NavItem eventKey={2} href="#About">
                    About
                  </NavItem>
                  <NavItem eventKey={3} href="#Get_Involved">
                    Get Involved
                  </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </header>

          <div id={"wallpaper"}>
            <Grid fluid={true}>
                <Row id="book">

                    <Col md={6}>
                          <Image id={"bookimg"} src={bookimg} responsive />{/*this is where the cover image goes */}
                    </Col>

                    <Col md={4} id={"description"}>
                        <Row>
                            <Col md={12}>
                               <h2>De La Românii Din Turcia Europeana:</h2><h4><em>Studiu Etic Și Statistic Asupra Armânilor</em></h4>{ /*title (will need to be routed to database later on)*/}
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                                <p><span className="byline">by Ioan Nenitescu</span></p>{ /*by author (will need to be routed to database later on)*/}
                            </Col>
                        </Row>

                        <Row>
                            <Col md={12}>
                              <p>The title translates to "The Romanians from Turkish Europe: An Ethnic and Statisticical Study of the Aromanian People". Written in Romanian in 1895, this text documents the customs, heritage and peculiar language of the Aromanians (or Vlachs) who lived the Ottoman Balkans. </p>{ /*description (will need to be routed to database later on)*/}
                            </Col>
                        </Row>            

                        <Row>
                            <Col md={5}>
                              <ButtonToolbar>
                                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                  <ToggleButton value={1}>$5</ToggleButton>
                                  <ToggleButton value={2}>$10</ToggleButton>
                                  <ToggleButton value={3}>$20</ToggleButton>
                                </ToggleButtonGroup>
                              </ButtonToolbar>
                            </Col>

                            <Col md={5}>
                              <Form inline>
                                <FormGroup>
                                  <InputGroup>
                                    <InputGroup.Addon>$</InputGroup.Addon>
                                    <FormControl type="text" placeholder="Custom"/>
                                    <InputGroup.Addon>.00</InputGroup.Addon>
                                  </InputGroup>
                                </FormGroup>
                              </Form>
                            </Col>

                            <Col md={5}>
                              <Button bsStyle="primary">Download</Button>{ /*will need to be routed to database later on*/}
                            </Col>
                        </Row>
                              
                    </Col>

                </Row>
            </Grid>
        </div>
      </div>
    );
    return(dp);
  }

}
export default DownloadPage
