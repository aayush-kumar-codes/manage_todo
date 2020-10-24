import React, { useEffect } from 'react';
import { getTasksRequest, addTaskRequest } from '../Redux/Actions'
import { useDispatch, useSelector } from 'react-redux';
import Table from '../Components/table'
import AddModal from '../Components/addModal';
import { Button } from '@material-ui/core';
const Dashboard = () => {
    const dispatch = useDispatch()
    const tasks = useSelector(state => state.tasks);
    // const addTask = useSelector(state => state.addTask)
    const [open, setOpen] = React.useState(false);

    const handleModal = () => {
        setOpen(!open)
    }
    useEffect(() => {
        dispatch(getTasksRequest())
    }, [])

    const addTask = (data) => {
        dispatch(addTaskRequest(data))
    }

    return (<div>
        <Table rows={tasks?.data} />
        <AddModal addTask={addTask} open={open} handleModal={handleModal} />
        <Button variant="contained" color="primary" onClick={handleModal} >Add Task</Button>
    </div>)
}

export default Dashboard;