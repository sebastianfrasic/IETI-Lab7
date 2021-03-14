import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



export const Task = (props) => {
    return (
        <Box m={1} p={5}>
            <Card variant="outlined">
                <CardContent>
                    <Typography align="center" variant="h4" component="h2">
                        {props.description}
                    </Typography>
                    <Typography align="center" color="textSecondary">
                        {props.status}
                    </Typography>
                    <Typography align="center" variant="h5" component="h2">
                        {props.dueDate}
                    </Typography>
                    <br/>
                    <Typography align="center" variant="body" component="p" gutterBottom>
                        <Typography align="center" variant="h6" component="p" gutterBottom> Responsible: </Typography>
                        {props.responsible.name} <br/>
                        {props.responsible.email}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};