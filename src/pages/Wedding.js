import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import Row from "react-bootstrap/Row";
import * as FirestoreService from '../services/firestore';

class Wedding extends React.Component {
    render() {
       return (
          <Row className="justify-content-md-center">
            <ImageCarousel 
               title = "Wedding Photos" 
               search = {FirestoreService.getWeddingPics}/>
            {/* <iframe src="https://www.youtube.com/watch?v=73wPiCczDuU"></iframe> */}
         </Row>
       )
    }
  }
  export default Wedding;