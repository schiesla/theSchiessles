import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TopicCard from '../components/TopicCard';
import { getHousePic, getWeddingPic } from '../services/firestore';

class Main extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
          housePicUrl: "",
          weddingPicUrl: ""
      }
  }

   componentWillMount() {
      getHousePic('6qlkWV1xbtCFezSXHu4J').then(doc => this.setState({housePicUrl: doc.data().url}));
      getWeddingPic('4EJRVIgUo85e8kwxJSM5').then(doc => this.setState({weddingPicUrl: doc.data().url}));
   }

    render() {
       return (
        <Row className="justify-content-around align-content-center background-match" style={{height: '100%'}}>
            {/* <Row className="justify-content-around space-above"> */}
               <TopicCard route="/home" title="The House" picture={this.state.housePicUrl}/>
               <TopicCard route="/wedding" title="The Wedding" picture={this.state.weddingPicUrl}/>
            {/* </Row> */}
            {/* <Row className="justify-content-around space-above"> */}
               {/* <TopicCard route="/eats" title = "The Eats" picture={this.state.housePicUrl}/>
               <TopicCard route="/blog" title = "The Blog" picture={this.state.housePicUrl}/> */}
            {/* </Row> */}
          </Row>
       )
    }
}
export default Main;