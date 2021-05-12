import React, {useState, useEffect} from 'react';
// import { Carousel } from 'react-bootstrap';
import * as FirestoreService from '../services/firestore';

function ImageCarousel() {

    const [pictures, setPictures] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        FirestoreService.getWeddingPics(1).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setPictures(pictures => pictures.concat(doc.data().url));
            })
        })
        .catch(() => setError('ERROR'));
    }, [setPictures, setError]);

    if (pictures) {
        return (<div> {pictures.map((url) => <img src={url}/>)}</div>)
        }
    else {
        return <div>BUT</div>
    }

    // render() {
    //     let weddingPics = firebase.firestore().collection("/pictures").limit(5);
    //     weddingPics.get().then(snapshot => {
    //         snapshot.forEach(childSnapshot => this.addElement(childSnapshot));
    //       });
    //     return (
    //         <Carousel fade>
    //             {this.state.pics.map((value) => {
    //                 return (
    //                     <Carousel.Item><img
    //                         className="d-block w-100"
    //                         src={value.url}
    //                         alt={value.id}
    //                     /></Carousel.Item>);
    //             })}
    //         </Carousel>
    //     );
    // }
}
export default ImageCarousel;