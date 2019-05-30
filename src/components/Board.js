import React from 'react';
import './Board.css';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }
    hover = () => {
        this.setState({ hover: true })
    }
    leave = () => {
        this.setState({ hover: false })
    }
    render() {
        return (
            <Card className="content">
                <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {this.props.title}
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions>
                <Button size="small" color="primary">
                    자세히 보기
                </Button>
                </CardActions>
            </Card>
        );
    }
}

export default Board;