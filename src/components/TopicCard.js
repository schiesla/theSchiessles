import React from 'react';
import { Card, Button } from 'react-bootstrap';

class TopicCard extends React.Component {

    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.img}/>
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>{this.props.text}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
            </Card> 
        );
    }
}
export default TopicCard;