import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import Row from "react-bootstrap/Row";

class Wedding extends React.Component {
    render() {
       return (
          <Row className="justify-content-md-center">
         <ImageCarousel />
         </Row>
       )
    }
  }
  export default Wedding;