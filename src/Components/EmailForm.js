import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSubject, updateSubject2, updatePreviewText, addEmailSubject } from '../redux/actions';
import { Grid, TextField, Typography, Button, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SubjectLineCompare from '../Components/SubjectLineCompare';
import MailIcon from '@material-ui/icons/Mail';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'left',
    height: '92vh',
    backgroundColor: '#fff',
  },
  formGrid: {
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    padding: theme.spacing(2),
  },
  buttonDisplay:{
    display: 'flex',
    padding: '10px',
  },
  button: {
    margin: '0 10px'
  }

}));

const EmailForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { subject, previewText, subject2 } = useSelector(state => state);

  const handleSubjectChange = (e) => {
    dispatch(updateSubject(e.target.value));
  };

  const handleSubject2Change = (e) => {
    dispatch(updateSubject2(e.target.value));
  };

  const handlePreviewTextChange = (e) => {
    dispatch(updatePreviewText(e.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (subject.trim() !== '') {
      dispatch(addEmailSubject(
        {
          subject: subject,
          subject2: subject2,
          previewText: previewText,
          color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
        }));
      dispatch(updateSubject(''));
      dispatch(updateSubject2(''));
      dispatch(updatePreviewText(''));
    }
  };

  const ClearSubject = () => {
    dispatch(updateSubject(''));
    dispatch(updateSubject2(''));
    dispatch(updatePreviewText(''));
  };


  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        <CheckCircleOutlineIcon style={{ margin: '0 10px 0 0' }} />
        Subject
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subject line"
              id="standard-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">A</InputAdornment>,
              }}
              variant="standard"
              value={subject}
              onChange={handleSubjectChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start">B</InputAdornment>,
              }}
              variant="standard"
              value={subject2}
              onChange={handleSubject2Change}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="standard-start-adornment"
              sx={{ m: 1, width: '25ch' }}
              InputProps={{
                startAdornment: <InputAdornment position="start"><MailIcon /></InputAdornment>,
              }}
              variant="standard"
              label="Email Preview Text"
              value={previewText}
              onChange={handlePreviewTextChange}
              multiline
            />
          </Grid>
          <Grid item xs={12} className={classes.buttonDisplay}>
            <Button
              className={classes.button}
              type="submit"
              variant="contained"
              color='primary'
              disabled={!subject.trim()}
            >
              Add Subject
            </Button>
            <Button
              className={classes.button}
              onClick={() => ClearSubject()}
              variant="contained"
              color='primary'
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>

      <SubjectLineCompare />
    </div>
  );
};

export default EmailForm;