import React from 'react';
import Qa from '../components/Qa';

const databaseURL = "https://react-multi-page-app.firebaseio.com";

class Faq extends React.Component {
  constructor() {
    super();
    this.state = {
      list: {}
    };
  }
  _get() {
    fetch(`${databaseURL}/faq.json`).then(res => {
      if(res.status !== 200) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then(list => this.setState({list: list}));
  }
  componentDidMount() {
    this._get();
  }
  render() {
    return (
      <div>
        {Object.keys(this.state.list).map(id => {
          const qa = this.state.list[id];
          return <Qa key={id} question={qa.question} answer={qa.answer} />
        })}
      </div>
    );
  }
}

export default Faq;