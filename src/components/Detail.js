import React from 'react';
import './Detail.css'

class Detail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                {this.props.match.params.id}
            </div>
        );
    }
}

export default Detail;