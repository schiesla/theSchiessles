import React from 'react';
import ImageCarousel from '../components/image-carousel/image-carousel';
import {Row} from "react-bootstrap";
import * as FirestoreService from '../services/firestore';

class Wedding extends React.Component {
    render() {
       return (
          <Row className="justify-content-md-center" style={{paddingTop: '2rem'}}>
            <ImageCarousel 
               title = "Wedding Photos" 
               search = {FirestoreService.getWeddingPics}/>
         </Row>
       )
    }
  }
  export default Wedding;