import React from 'react';
import ImageCarousel from '../../components/image-carousel/image-carousel';
import * as FirestoreService from '../../services/firestore';
import './home.css';

class Home extends React.Component {
    render() {
       return (
         <div className='home'>
            <ImageCarousel 
               title = "First Home Build" 
               search = {FirestoreService.getHousePics} />
         </div>
       )
    }
  }
  export default Home;