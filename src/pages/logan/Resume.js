import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Experience from "./Experience";
import Education from "./Education";
import "../../App.css";
import { Card, Tab, Nav } from 'react-bootstrap';


class Resume extends React.Component {
    
    render() {     
       return (
      <Container fluid>
            <Row className="row1">
            <Col md={3}>
                    <Card>
                        {/* <Card.Img className="pic-style" variant="top" src={this.props.img}/> */}
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>schizzla27@gmail.com</Card.Text>
                            <Card.Text>(219) 746-3128</Card.Text>
                            <Card.Text>13004 Corydon Dr. Fishers, IN 46037</Card.Text>
                        </Card.Body>
                    </Card> 
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Text>Software Engineer with three years of full stack development experience. Comfortable developing in multiple languages and frameworks. Experienced communicator in both  technical and non-technical fashions. Developing managerial experience.</Card.Text>
                        </Card.Body>
                    </Card> 
                </Col>
            </Row>
            <Row className="row2">
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Col md={3}>
                        <Card>
                            <Card.Body>
                            <Card.Title>Sections</Card.Title>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item><Nav.Link eventKey="first">Education</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="second">Experience</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="third">Skills</Nav.Link></Nav.Item>
                                    <Nav.Item><Nav.Link eventKey="fourth">References</Nav.Link></Nav.Item>
                                </Nav>
                            </Card.Body>
                        </Card> 
                    </Col>
  
                    <Col sm={9}>
                        <Card>
                            <Card.Body>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <h1>Education</h1>
                                        <Education/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <h1>Experience</h1>
                                        <Experience/>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <h1>Skills</h1>
                                        Java, Javascript, HTML, CSS, Flutter, Cordova, Ionic, AngularJS, KnockoutJS, NodeJS, AWS, MongoDB, Xcode, Android Studio, GitHub, Jira, Adapting to change, Communication
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="fourth">
                                        <h1>References</h1>
                                        Rob Signorelli Melissa Signorelli Alex Crowley
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Card>
                    </Col>
                </Tab.Container>
            </Row>
      </Container>
       )
    }
  }
  export default Resume;
