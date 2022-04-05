import React, {useState, useEffect, FC} from 'react';
import { Carousel, Card } from 'react-bootstrap';
import firebase from "firebase/app"
import { Picture } from '../../interfaces/Picture';
import { Theme } from '../../interfaces/Theme';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducer';
import './image-carousel.css';

export interface CarouselProps {
    search: Function,
    title: string
}

export const ImageCarousel: FC<CarouselProps> = (props): JSX.Element =>  {
    const [pictures, setPictures] = useState<Picture[]>([]);
    const [error, setError] = useState();
    const currentTheme: Theme = useSelector((state: AppState) => state.currentTheme);


    function toBasicDate(dateNumber: number):string {
        return dateNumber 
            ? new Date(dateNumber).toLocaleDateString("en-US")
            : "";
    }

    useEffect(() => {
        var search = props.search || (() => null);
        search().then((querySnapshot: firebase.firestore.QuerySnapshot) => {
            querySnapshot.forEach((doc) => {
                setPictures(pictures => [...pictures, {
                    id: doc.id,
                    url: doc.data().url,
                    date: doc.data().date}]);
            })
        })
        .catch(() => console.log("ERROR"));
    }, [props, setPictures, setError, error]);

    if (pictures) {
        return (
            <Card className="carousel-card" style={{color: currentTheme.onSurface, backgroundColor: currentTheme.surface}}>
                <Card.Header>{props.title}</Card.Header>
                <Card.Body>
                    <Carousel fade>
                        {pictures.map((obj) => {
                            return (
                                <Carousel.Item key={obj.id}>
                                    <img
                                        className="d-block w-100"
                                        src={obj.url}
                                        alt="Pictures"/>
                                    <Carousel.Caption>
                                        {toBasicDate(obj.date)}
                                    </Carousel.Caption>
                                </Carousel.Item>);
                        })}
                    </Carousel>
                </Card.Body>
            </Card>
        )
    }
    else {
        return <div>IDK</div>
    }
}
export default ImageCarousel;