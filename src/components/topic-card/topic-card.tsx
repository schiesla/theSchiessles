import React, { FC } from 'react';
import { Theme } from '../../interfaces/Theme';
import { Link } from 'react-router-dom';
import { AppState } from '../../redux/reducer';
import { useSelector } from 'react-redux';
import './topic-card.css';

export interface TopicProps {
    route: string,
    picture: string,
    title: string,
    text: string
}

export const TopicCard: FC<TopicProps> = (props): JSX.Element => {
    const currentTheme: Theme = useSelector((state: AppState) => state.currentTheme);

    return (
        <Link className="topic-link" to={props.route}>
            <div className='tcard' style={{backgroundColor: currentTheme.surface}}>
                <div className='img-container'>
                    <img src={props.picture} alt={props.title}/>
                </div>
                <div className='body'>
                    <h3 style={{color: currentTheme.onSurface}}>{props.title}</h3>
                </div>
            </div>
        </Link>
    );
}
export default TopicCard;