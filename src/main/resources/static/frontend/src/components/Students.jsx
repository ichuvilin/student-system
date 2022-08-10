import * as React from 'react';
import {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import {Button, Container, LinearProgress, Paper} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import PopAlert from "./PopAlert";


const Students = () => {
    const paperStyle = {padding: "50px 20px", width: 600, margin: "20px auto"}
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [students, setStudents] = useState([])
    const [showPopUp, setShowPopUp] = useState(false);
    const showPopupHandler = () => setShowPopUp(true);

    const handlerClick = (e) => {
        e.preventDefault()
        const student = {name, address};
        console.log(student)
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(student)
        }).then(() => {
            showPopupHandler()
        })
        setName('')
        setAddress('')
    }

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then(result => setStudents(result))

        const timer = setTimeout(() => {
            setShowPopUp(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, [showPopUp]);
    let popup = null;
    if (showPopUp) {
        popup = <PopAlert/>;
    }
    return (
        <Container maxWidth="sm">
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color: "blue", textAlign: "center", marginBottom: "20px"}}><u>Add Student</u></h1>
                <form
                    noValidate autoComplete="off">
                    <TextField style={{marginBottom: "20px"}} id="outlined-basic" label="Student Name"
                               variant="outlined" fullWidth value={name} onChange={e => setName(e.target.value)}/>
                    <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
                               value={address} onChange={e => setAddress(e.target.value)}/>

                    <Button
                        style={{marginTop: "20px"}}
                        variant="contained"
                        endIcon={<SendIcon/>}
                        onClick={handlerClick}
                    >
                        Send
                    </Button>
                    {popup}
                </form>
            </Paper>
            <h1>Students List</h1>

            <Paper elevation={3} style={paperStyle}>
                {students.length === 0 ?
                    <LinearProgress/>
                    :
                    students.map(student => (
                        <Paper elevation={6} style={{margin: 10, padding: 15, textAlign: "left"}} key={student.id}>
                            Name: {student.name} <br/>
                            Address: {student.address}
                        </Paper>
                    ))
                }
            </Paper>
        </Container>
    );
}

export default Students

