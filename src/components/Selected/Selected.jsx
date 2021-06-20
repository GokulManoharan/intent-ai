import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./selected.css";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const Selected = ({
    selectedMessages
}) => {
    const classes = useStyles();

    return (
        <div id={`selected-container ${classes.root}`}>
            <Typography variant="h4" gutterBottom>Selected intents</Typography>
            {
                Object.keys(selectedMessages)?.map(name => {
                    return (
                        <React.Fragment key={name}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant="h5" gutterBottom>{name} : {selectedMessages[name].length}</Typography>
                                </AccordionSummary>
                                {
                                    selectedMessages[name].map(msg => {
                                        return (
                                            <React.Fragment key={msg}>
                                                <AccordionDetails>
                                                    <Typography className="selected-msg">
                                                        - {msg}
                                                    </Typography>
                                                </AccordionDetails>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </Accordion>
                        </React.Fragment>

                    )
                })
            }
        </div>
    );
};

export default Selected;