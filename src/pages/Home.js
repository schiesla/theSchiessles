import React from 'react';
import Row from "react-bootstrap/Row";
import ImageCarousel from '../components/ImageCarousel';
import * as FirestoreService from '../services/firestore';

class Home extends React.Component {
    render() {
       return (
         <Row className="justify-content-md-center">
            <ImageCarousel 
               title = "First Home Build" 
               search = {FirestoreService.getHousePics} />
         </Row>
       )
    }
  }
  export default Home;