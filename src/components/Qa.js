import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20
    },
    panel: {
        padding: theme.spacing(0.2, 0),
    }
}));

function Qa(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ExpansionPanel className={classes.panel}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>질문: {props.question}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        답변: {props.answer}
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}

export default Qa;