import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
import AddForm from './taskForm'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    paper: {
        // position: 'absolute',
        width: 400,
        // backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function SimpleModal({ open, handleModal, addTask }) {
    const classes = useStyles();
    const [state, setState] = useState({})

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value })
    }

    const submitAction = () => {
        console.log(state, "lllllllllllllllll");
        let data = {
            task_name: state.taskName,
            description: state.description,
            start_date: state.startDate,
            end_date: state.endDate,
            status: state.status === 'active' ? true : false
        }
        addTask(data)
        handleModal()
    }
    return (
        <div>
            <Dialog open={open} onClose={handleModal} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add New Task</DialogTitle>
                <DialogContent>
                    <AddForm handleChange={handleChange} state={state} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModal} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={submitAction} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
