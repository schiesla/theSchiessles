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
        <Col>
            <Row className="justify-content-around">
               <TopicCard title="The House" picture={this.state.housePicUrl}/>
               <TopicCard title="The Wedding" picture={this.state.weddingPicUrl}/>
            </Row>
            <Row className="justify-content-around">
               <TopicCard title = "Title 3" text = "text 3"/>
               <TopicCard title = "Title 4" text = "text 4"/>
            </Row>
          </Col>
       )
    }
}
export default Main;