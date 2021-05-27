import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../../App.css";
import { Card, Button } from 'react-bootstrap';


class Resume extends React.Component {
    render() {
       return (
      <Container fluid>
            <Row className="row1">
                <Col md={3}>
                    <Card>
                        <Card.Img className="pic-style" src={process.env.PUBLIC_URL + "/favicon.ico"}/>
                        <Card.Body>
                            <Card.Title>Logan Schiessle</Card.Title>
                            <Card.Text>info about me</Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card> 
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={this.props.img}/>
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>{this.props.text}</Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card> 
                </Col>
            </Row>
            <Row className="row2">
            <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Sections</Card.Title>
                            <Card.Text>list of sections..</Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card> 
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={this.props.img}/>
                        <Card.Body>
                            <Card.Title>Specific section title</Card.Title>
                            <Card.Text>specific section text</Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card> 
                </Col>
            </Row>
      </Container>
       )
    }
  }
  export default Resume;