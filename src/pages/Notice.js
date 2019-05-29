import React from 'react';
import Notification from '../components/Notification';
import NoticeDetail from '../components/NoticeDetail';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const databaseURL = "https://react-multi-page-app.firebaseio.com";

class Notice extends React.Component {
  constructor() {
    super();
    this.state = {
      list: {}
    };
  }
  _get() {
    fetch(`${databaseURL}/notice.json`).then(res => {
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
        {this.props.location.pathname === '/notice' && Object.keys(this.state.list).map(id => {
          const notification = this.state.list[id];
          return <Notification key={id} id={id} title={notification.title} content={notification.content} date={notification.date} />
        })}
        <Route
          path="/notice/:id"
          component={NoticeDetail}
        />
      </div>
    );
  }
}

export default withRouter(Notice);