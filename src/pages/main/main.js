import React from 'react';
import TopicCard from '../../components/topic-card/topic-card';
import { getHousePic, getWeddingPic } from '../../services/firestore';
import './main.css';


class Main extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
          housePicUrl: "",
          weddingPicUrl: ""
      }
  }

   componentWillMount() {
      getHousePic('LUrUFMGD20jRjijEifyN').then(doc => this.setState({housePicUrl: doc.data().url}));
      getWeddingPic('4EJRVIgUo85e8kwxJSM5').then(doc => this.setState({weddingPicUrl: doc.data().url}));
   }

    render() {
       return (
        <div className='main'>
            {/* <Row className="justify-content-around space-above"> */}
               <TopicCard route="/home" title="The House" picture={this.state.housePicUrl}/>
               <TopicCard route="/wedding" title="The Wedding" picture={this.state.weddingPicUrl}/>
            {/* </Row> */}
            {/* <Row className="justify-content-around space-above"> */}
               {/* <TopicCard route="/eats" title = "The Eats" picture={this.state.housePicUrl}/>
               <TopicCard route="/blog" title = "The Blog" picture={this.state.housePicUrl}/> */}
            {/* </Row> */}
          </div>
       )
    }
}
export default Main;