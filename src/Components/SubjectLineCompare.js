import React from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import SubjectLineInput from './SubjectLineInput';


const SubjectLinesComparison = () => {
    const { subjectLines } = useSelector(state => state);

    const subjectLine1 = subjectLines.find((line) => line.id === 1)?.value || '';
    const subjectLine2 = subjectLines.find((line) => line.id === 2)?.value || '';

    const compareStrings = () => {
        if (subjectLine1 === subjectLine2) {
            return 'Subject lines are identical.';
        } else {
            return 'Subject lines are different.';
        }
    };

    return (
        <div style={{ padding: '50px 0' }}>
            <Typography variant="body1" gutterBottom>
                - Provide at least two input fields to allow users to enter and compare different subject lines in real time.
            </Typography>
            <Grid style={{ padding: '20px 0' }} container spacing={3}>
                <SubjectLineInput id={1} />
                <SubjectLineInput id={2} />
            </Grid>
            <Paper style={{ marginTop: '20px', padding: '10px' }}>
                <Typography variant="body1">
                    {compareStrings()}
                </Typography>
            </Paper>
        </div>
    );
};

export default SubjectLinesComparison;