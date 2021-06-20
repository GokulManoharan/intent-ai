import React from 'react';
import Typography from '@material-ui/core/Typography';
import './intent.css';

const Intent = ({
    intent,
    handleSelectMessage,
}) => {
    return (
        <div id="intent-container">
            <div className="intent-header">
                <Typography variant="h5" className="intent-title">{intent.name}</Typography>
                <Typography variant="subtitle1" >{intent.description}</Typography>
            </div>
            <div className="intent-body">
                <Typography variant="subtitle1" >Example user messages:</Typography>
                {
                    intent?.trainingData?.expressions.map(exp => (
                        <React.Fragment key={exp.id}>
                            <label className="control control-checkbox">
                                {exp.text}
                                <input type="checkbox" onChange={() => {
                                    handleSelectMessage(exp.text, intent.id)
                                }} />
                                <div className="control_indicator"></div>
                            </label>
                        </React.Fragment>
                    ))
                }
            </div>
            <div className="reply-container">
                <Typography variant="subtitle1" >Sample reply:</Typography>
                <Typography variant="subtitle1" className="reply" >{intent.reply.text}</Typography>
            </div>
        </div>
    );
};

export default Intent;