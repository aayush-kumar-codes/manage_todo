import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    taskName: {
        width: '100%'
    }
}));

export default function BasicTextFields({ state, handleChange }) {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" name="taskName"
                value={state?.taskName} onChange={handleChange} label="task name" className={classes.taskName} />
            <TextField type="text-area" id="standard-basic" name="description"
                value={state?.description} onChange={handleChange} label="description" className={classes.taskName} />
            <TextField
                id="datetime-local"
                label="start time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                name="startDate"
                value={state?.startDate}
                onChange={handleChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />

            <TextField
                id="datetime-local"
                label="end time"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                name="endDate"
                value={state?.endDate}
                onChange={handleChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <FormLabel component="legend">Status</FormLabel>
            <RadioGroup aria-label="status" name="status" value={state.status} onChange={handleChange}>
                <FormControlLabel value="not active" control={<Radio />} label="not active" />
                <FormControlLabel value="active" control={<Radio />} label="active" />
            </RadioGroup>
        </form>
    );
}
