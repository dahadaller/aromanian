var React = require('react');

{/* */}

class DownloadPage extends React.Component {
    render(){
        <Grid>
            <Row>
                <Col md={4}>
                    <Image src="/thumbnail.png" rounded />  {/* this is where the cover image goes */}
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={6}>
                           { /*title (will need to be routed to database later on)*/}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            { /*by author (will need to be routed to database later on)*/}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            { /*description (will need to be routed to database later on)*/}
                        </Col>
                    </Row>            
                    <Row>
                        <Col md={6}>
                            { /*Donation Amount (stripe api)*/}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Button bsStyle="primary">Default button</Button> { /*Download (will need to be routed to database later on)*/}
                        </Col>
                    </Row>                                 
                </Col>
            </Row>
        </Grid>
    }
}
module.exports = DownloadPage;