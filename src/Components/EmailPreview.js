import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Avatar,
} from '@material-ui/core';
import moment from "moment";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '92vh',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  outerBorder: {
    position: 'relative',
    width: '375px',
    height: '667px',
    border: '2px solid #000',
    borderRadius: '40px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'black',
  },
  innerBorder: {
    width: 'calc(100% - 10px)',
    height: 'calc(100% - 10px)',
    border: '2px solid #000',
    borderRadius: '36px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
    overflow: 'hidden',
  },
  notch: {
    width: '205px',
    height: 30,
    backgroundColor: '#000',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: theme.spacing(1),
  },
  screen: {
    width: '100%',
    height: '100%',
    padding: theme.spacing(2),
    overflowY: 'auto',
  },
  paper: {
    padding: theme.spacing(2),
    minHeight: '400px',
    maxWidth: '100px',
  },
  emailItem: {
    cursor: 'pointer',
  },
  text: {
    whiteSpace: 'nowrap', /* Prevent text wrapping */
    overflow: 'hidden', /* Hide any overflowing text */
    textOverflow: 'ellipsis', /* Display ellipsis (...) for overflowed text */
    width: '100%',
  },
  font: {
    fontWeight: 900,
    whiteSpace: 'nowrap', /* Prevent text wrapping */
    overflow: 'hidden', /* Hide any overflowing text */
    textOverflow: 'ellipsis', /* Display ellipsis (...) for overflowed text */
    width: '100%',
  },
  primary: {
    fontWeight: 800,
    color: 'gray'
  },
  time : {
    position : 'absolute',
    top : '10px', 
    right : '34px'
  }
}));




const EmailForm = () => {
  const { emailSubjects } = useSelector(state => state);
  const { subject, previewText, subject2 } = useSelector(state => state);
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.outerBorder}>
        <div className={classes.innerBorder}>
          <div className={classes.notch}></div>
          <div className={classes.time}>{
          moment(new Date()).format('h:mm')}</div>
          <Paper className={classes.screen} elevation={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Inbox
                </Typography>
                {subject ?
                  <List sx={{ width: '100%', maxWidth: 360 }}>
                    <React.Fragment >
                      <ListItem button alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar style={{ backgroundColor: 'rgb(17, 30, 64)' }}>
                            {subject.slice(0, 1).toUpperCase()}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography className={classes.font}>
                              {subject}
                            </Typography>}
                          secondary={
                            <>
                              <Typography className={classes.text}>
                                {subject2}
                              </Typography>
                              <Typography className={classes.text}>
                                {previewText}
                              </Typography>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  </List> : null}
                <List sx={{ width: '100%', maxWidth: 360 }}>
                  {emailSubjects.map((email) => (
                    <React.Fragment >
                      <ListItem button alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar style={{ backgroundColor: email.data.color }}>
                            {email.data.subject.slice(0, 1).toUpperCase()}
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography className={classes.font}
                            >
                              {email.data.subject}
                            </Typography>}
                          secondary={
                            <>
                              <Typography className={classes.text}>
                                {email.data.subject2}
                              </Typography>
                              <Typography className={classes.text}>
                                {email.data.previewText}
                              </Typography>
                              <Typography className={classes.text}>
                                {moment(email.id).format('MMMM Do YYYY, h:mm:ss a')}
                              </Typography>
                            </>
                          }
                        />
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                </List>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </Container>
  );
};

export default EmailForm;