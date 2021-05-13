import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopicCard from '../components/TopicCard';

class Main extends React.Component {
    render() {
       return (
        <Col>
            <Row>
               <div>About Us...</div>
            </Row>
            <Row className="justify-content-around">
               <TopicCard title = "The House" text = "text 1"/>
               <TopicCard title = "The Wedding" text = "text 2"/>
               <TopicCard title = "Title 3" text = "text 3"/>
               <TopicCard title = "Title 4" text = "text 4"/>
            </Row>
          </Col>
       )
    }
}
export default Main;