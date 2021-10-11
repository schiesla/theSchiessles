import React, {useState, useEffect} from 'react';
import { Carousel, Card } from 'react-bootstrap';

function ImageCarousel(props) {

    const [pictures, setPictures] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        var search = props.search || (() => null);
        search().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setPictures(pictures => [...pictures, {
                    id: doc.id,
                    url: doc.data().url}]);
            })
        })
        .catch(() => setError('ERROR'));
    }, [props, setPictures, setError, error]);

    if (pictures) {
        return (
            <Card style={{ width: '50%' }}>
                <Card.Header>{props.title}</Card.Header>
                <Card.Body>
                    <Carousel fade>
                        {pictures.map((obj) => {
                            return (
                                <Carousel.Item key={obj.id}><img
                                    className="d-block w-100"
                                    src={obj.url}
                                    alt="Wedding Pictures"/>
                                    <Carousel.Caption>Date goes here</Carousel.Caption>
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