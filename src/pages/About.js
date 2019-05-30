import React from 'react';
import Board from '../components/Board';
import Detail from '../components/Detail';
import Grid from '@material-ui/core/Grid';
import { Route, Link } from 'react-router-dom';

const databaseURL = "https://react-multi-page-app.firebaseio.com";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      list: {}
    }
  }
  _get() {
    fetch(`${databaseURL}/about.json`).then(res => {
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
        <div>
          <Grid container>
              {Object.keys(this.state.list).map(id => {
                const board = this.state.list[id];
                return (
                  <Grid item xs={3} key={id}>
                    <Link to={"/about/" + id}>
                      <Board title={board.title}/>
                    </Link>
                  </Grid>
                );
              })}
          </Grid>
        </div>
        <div>
          <Route
            path="/about/:id"
            component={Detail}
          />
        </div>
      </div>
    );
  }
}

export default About;
