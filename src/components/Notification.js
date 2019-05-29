import React from 'react';

import './Notification.css';
import { NavLink } from 'react-router-dom';

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    render() {
        return (
            <div className="notification">
                <div className="notification-left">
                    {this.props.id}
                </div>
                <div className="notification-center">
                    <NavLink to={"/notice/" + this.props.id}>
                        {this.props.title}
                    </NavLink>
                </div>
                <div className="notification-right">
                    {this.props.date}
                </div>
            </div>
        );
    }
}

export default Notification;