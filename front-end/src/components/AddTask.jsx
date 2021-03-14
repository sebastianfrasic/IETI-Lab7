import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import axios from "axios";
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const AddTask = (props) => {
    const [descriptionState, setDescriptionState] = useState("");
    const [responsibleState, setResponsibleState] = useState("");
    const [emailState, setEmailState] = useState("");
    const [statusState, setStatusState] = useState("");
    const [startDate, setStartDate] = useState(new Date());

    const handleDescriptionChange = (e) => {
        setDescriptionState(e.target.value);
    }

    const handleResponsibleChange = (e) => {
        setResponsibleState(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmailState(e.target.value);
    }


    const handleStatusChange = (e) => {
        setStatusState(e.target.value);
    }

    const handleDateChange = (e) => {
        setStartDate(e);
    }


    let task = {
        description: descriptionState,
        responsible: {
            name: responsibleState,
            email: emailState
        },
        status: statusState,
        dueDate: startDate.toLocaleDateString()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(task)
        axios.post("https://ieti-lab7-frasica.azurewebsites.net/api/add-task-v2?code=3z8nk09VlhVNrLdTAVcesT9sbl1uVtFFZGjBXAUUaXg7p/o5K6GF4Q==", task)
            .then(response => {
                return response.data;
            })
            .then(Response => {
                Swal.fire(
                    '¡Nice!',
                    'Task added',
                    'success'
                )
            }).catch(error => {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Error adding task at making the POST. Be sure you are on Firefox and have the CorsE extension'
                })
            });
    }



    return (
        <div>
            <CssBaseline />
            <Container maxWidth="sm" align="center">
                <Typography component="div" />

                <form className="form" onSubmit={handleSubmit}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="description">Description</InputLabel>
                        <Input
                            onChange={handleDescriptionChange}
                            id="description"
                            name="description"
                            autoComplete="description"
                            autoFocus
                            value={descriptionState}
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="status">Status</InputLabel>
                        <Select
                            labelId="status"
                            id="status"
                            value={statusState}
                            onChange={handleStatusChange}
                        >
                            <MenuItem value={"Ready"}>Ready</MenuItem>
                            <MenuItem value={"In progress"}>In progress</MenuItem>
                            <MenuItem value={"Done"}>Done</MenuItem>
                        </Select>
                    </FormControl>
                    <br/><br/><br/><br/>
                    <Typography align="left" variant="h6" component="p" gutterBottom> Responsible: </Typography>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="responsible">Name</InputLabel>
                        <Input
                            onChange={handleResponsibleChange}
                            id="responsible"
                            name="responsible"
                            autoComplete="responsible"
                            autoFocus
                            value={responsibleState}
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="responsible">E-mail</InputLabel>
                        <Input
                            onChange={handleEmailChange}
                            id="responsible"
                            name="responsible"
                            autoComplete="responsible"
                            autoFocus
                            value={emailState}
                        />
                    </FormControl>


                    <br/><br/><br/><br/>
                    <Typography align="left" variant="h6" component="p" gutterBottom> Due date: </Typography>
                    <DatePicker selected={startDate} onChange={handleDateChange} />
 

                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <Button style={{ width: 300, height: 50 }} type="submit" variant="contained" color="primary">
                        <Typography > Add task</Typography>
                    </Button>

                </form>
            </Container>
        </div>
    );
};