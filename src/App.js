import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EmailForm from './Components/EmailForm';
import EmailPreview from './Components/EmailPreview';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));


const App = () => {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Paper className={classes.paper}>
              <EmailForm />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Paper className={classes.paper}>
              <EmailPreview />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Provider>
  );
};

export default App;
