import React from "react";
import { getExperience } from '../../services/firestore';

class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            experiences: []
        }
    }

    componentWillMount() {
        getExperience().then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({ experiences: data});
        })
    }
    
    render() {
        return (
            <div>{this.state.experiences
                .map(d => this.experienceSection(d))}
            </div>
        );
    }

    experienceSection(exp) {
        return (
          <div>
              <div>{exp.title}, {exp.company} -- {exp.dateRange}</div>
              <ul>
                  {exp.points.map((value, i) => {
                      return <li key={i}>{value}</li>
                  })}
              </ul>
          </div>
        );
    }
}
export default Experience;