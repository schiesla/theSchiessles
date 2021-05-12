import React, {useState, useEffect} from 'react';
import { Carousel, Card } from 'react-bootstrap';
import * as FirestoreService from '../services/firestore';

function ImageCarousel() {

    const [pictures, setPictures] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        FirestoreService.getWeddingPics().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setPictures(pictures => [...pictures, {
                    id: doc.id,
                    url: doc.data().url}]);
            })
        })
        .catch(() => setError('ERROR'));
    }, [setPictures, setError]);

    if (pictures) {
        return (
            <Card style={{ width: '50%' }}>
                <Card.Header>Wedding Photos</Card.Header>
                <Card.Body>
                    <Carousel fade>
                        {pictures.map((obj) => {
                            return (
                                <Carousel.Item key={obj.id}><img
                                    className="d-block w-100"
                                    src={obj.url}
                                    alt="Wedding Pictures"/>
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