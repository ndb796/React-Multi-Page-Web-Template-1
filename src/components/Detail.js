import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const databaseURL = "https://react-multi-page-app.firebaseio.com";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(3, 10),
        padding: theme.spacing(3, 2),
    },
}));

function PaperSheet(props) {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    {props.title}
                </Typography>
                <Typography component="p">
                    {props.content}
                </Typography>
            </Paper>
        </div>
    );
}

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
            <PaperSheet title={this.state.detail.title} content={this.state.detail.content} />
        );
    }
}

export default Detail;