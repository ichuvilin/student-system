import React from 'react';
import {Alert, AlertTitle} from "@mui/material";

const PopAlert = () => {
    return (
        <Alert style={{marginTop: "20px"}} severity="success">
            <AlertTitle>Success</AlertTitle>
            <strong>New student is add</strong>
        </Alert>
    );
};

export default PopAlert;