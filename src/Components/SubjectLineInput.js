import React from 'react';
import { TextField, Grid, InputAdornment } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { updateSubjectLine } from '../redux/actions';

const SubjectLineInput = ({ id }) => {
  const dispatch = useDispatch();
  const { subjectLines } = useSelector(state => state);


  const handleChange = (event) => {
    dispatch(updateSubjectLine(id, event.target.value));
  };

  return (
    <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label={`Subject Line`}
          id="standard-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">{id}</InputAdornment>,
          }}
          variant="standard"

          value={subjectLines.find((line) => line.id === id)?.value || ''}
          onChange={handleChange}
        />
    </Grid>
  );
};

export default SubjectLineInput;