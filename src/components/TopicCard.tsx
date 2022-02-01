import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import { Theme } from '../interfaces/Theme';
import { Link } from 'react-router-dom';
import { AppState } from '../redux/reducer';
import { useSelector } from 'react-redux';

export interface TopicProps {
    route: string,
    picture: string,
    title: string,
    text: string
}

export const TopicCard: FC<TopicProps> = (props): JSX.Element => {
    const currentTheme: Theme = useSelector((state: AppState) => state.currentTheme);

    const cardStyle: React.CSSProperties = {
        width: '18rem',
        height: '400px',
        backgroundColor: currentTheme.surface
    }

    const cardImageStyle: React.CSSProperties = {
        height: '80%', 
        objectFit: 'cover'
    }

    const cardBodyStyle: React.CSSProperties = {
        color: currentTheme.onSurface
    }

    return (
        <Link to={props.route}>
        <Card style={cardStyle}>
            <Card.Img style={cardImageStyle} src={props.picture}></Card.Img>
            <Card.Body style={cardBodyStyle}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.text}</Card.Text>
            </Card.Body>
        </Card> 
        </Link>
    );
}
export default TopicCard;