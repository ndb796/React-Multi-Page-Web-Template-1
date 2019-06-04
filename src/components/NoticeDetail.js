import React from 'react';
import './NoticeDetail.css';
import { NavLink } from 'react-router-dom';

const databaseURL = "https://react-multi-page-app.firebaseio.com";

class NoticeDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            notice: {}
        };
    }
    _get() {
        fetch(`${databaseURL}/notice/${this.props.match.params.id}.json`).then(res => {
            if(res.status !== 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(data => this.setState({notice: data}));
      }
    componentDidMount() {
        this._get();
    }
    render() {
        return (
        <div className="detail">
            제목: {this.state.notice['title']}<br />
            내용: {this.state.notice['content']}<br />
            날짜: {this.state.notice['date']}<br />
            <NavLink to="/notice">
                <strong>목록 보기</strong>
            </NavLink>
        </div>
        );
    }
};

export default NoticeDetail;