import React from 'react';
import Row from "react-bootstrap/Row";
import ImageCarousel from '../components/ImageCarousel';
import * as FirestoreService from '../services/firestore';

class Home extends React.Component {
    render() {
       return (
         <Row className="justify-content-md-center space-above">
            <ImageCarousel 
               title = "Our Homes Journey" 
               search = {FirestoreService.getHousePics} />
         </Row>
       )
    }
  }
  export default Home;