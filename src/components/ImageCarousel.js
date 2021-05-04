import React, {useState, useEffect} from 'react';
import { Carousel } from 'react-bootstrap';
import firebase from "firebase";

class ImageCarousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pics: [],
        };
    }

    addElement = (element) => {
        var id = element.id;
        var data = element.data();
      this.setState({ pics: [...this.state.pics, {id: id, url: data.url}]});
    }

    render() {
        let weddingPics = firebase.firestore().collection("/pictures");
        weddingPics.get().then(snapshot => {
            snapshot.forEach(childSnapshot => this.addElement(childSnapshot));
          });
        return (
            <Carousel fade>
                {this.state.pics.map((value) => {
                    return (
                        <Carousel.Item><img
                            className="d-block w-100"
                            src={value.url}
                            alt={value.id}
                        /></Carousel.Item>);
                })}
            </Carousel>
        );
    }
}
export default ImageCarousel;