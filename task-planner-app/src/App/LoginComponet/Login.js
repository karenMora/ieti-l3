import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { FormControl, InputLabel, Input } from '@material-ui/core';
import './Login.css';
import Link_material from '@material-ui/core/Link';


const Profile='/Profile';

export class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Grid container className="background">
          <Grid item xs={false} sm={4} md={7}/>
          <Grid item xs={12} sm={12} md={5} elevation={6}>
              <CssBaseline />
              <main className="layout">
                <Paper className="paper">
                    <LockOutlinedIcon />
                  <Typography variant="headline">Ingreso</Typography>
                  <form className="form">
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="email">Email</InputLabel>
                      <Input id="email" name="email" autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                      <InputLabel htmlFor="password">Contraseña</InputLabel>
                      <Input name="password" type="password" id="password" autoComplete="current-password" />
                    </FormControl>
                    <br />
                    <br />
                    <Button type="submit" fullWidth variant="contained" color="primary" className="submit" component={Link} to={Profile}>
                        Ingresar
                    </Button>
                    <Grid container spacing={4}>
                      <Grid item xs={12}></Grid>
                    </Grid>

                  </form>
                </Paper>
              </main>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

/*function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Hay Parking
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
*/
