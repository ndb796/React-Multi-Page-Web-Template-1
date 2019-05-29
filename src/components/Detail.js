import React from 'react';
import './Detail.css'

const databaseURL = "https://react-multi-page-app.firebaseio.com";

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {}
        }
    }
    _get() {
        fetch(`${databaseURL}/about/${this.props.match.params.id}.json`).then(res => {
            if(res.status !== 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(detail => this.setState({detail: detail}))
    }
    componentDidMount() {
        this._get();
    }
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this._get();
        }
    }      
    render() {
        return (
            <div className="container">
                제목: {this.state.detail.title}<br />
                내용: {this.state.detail.content}
            </div>
        );
    }
}

export default Detail;