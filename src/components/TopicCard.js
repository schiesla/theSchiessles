import React from 'react';
import { Card } from 'react-bootstrap';

class TopicCard extends React.Component {

    render() {
        return (
            <Card style={{ width: '18rem' , height: '400px'}}>
                <Card.Img style={{height: '80%' , objectFit: 'cover'}} src={this.props.picture}></Card.Img>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>{this.props.text}</Card.Text>
                </Card.Body>
            </Card> 
        );
    }
}
export default TopicCard;