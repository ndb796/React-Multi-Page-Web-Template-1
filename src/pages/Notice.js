import React from 'react';
import Notification from '../components/Notification';
import NoticeDetail from '../components/NoticeDetail';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
        <br/>
        <Paper>
          <Table>
            <TableHead>
              {this.props.location.pathname === '/notice' &&
                <TableRow>
                  <TableCell align="center">번호</TableCell>
                  <TableCell align="center">제목</TableCell>
                  <TableCell align="center">날짜</TableCell>
                </TableRow>
              }
            </TableHead>
            <TableBody>
              {this.props.location.pathname === '/notice' && Object.keys(this.state.list).map(id => {
                const notification = this.state.list[id];
                return <Notification key={id} id={id} title={notification.title} content={notification.content} date={notification.date} />
              })}
            </TableBody>
          </Table>
          <Route
            path="/notice/:id"
            component={NoticeDetail}
          />
        </Paper>
      </div>
    );
  }
}

export default withRouter(Notice);