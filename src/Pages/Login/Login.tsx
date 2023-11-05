import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  Snackbar,
} from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './Login.style';

function Alert(props: AlertProps) { 
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login: React.FC = () => {
  const classes = useStyles();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const isEmailValid = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    setEmailError('');

    if (!isEmailValid(email)) {
      setEmailError('Niepoprawny adres email');
      return;
    }

    if (email === 'example@example.com' && password === 'password') {
      setLoggedIn(true);
      setShowSuccessMessage(true);
    } else {
      alert('Błąd logowania. Spróbuj ponownie.');
    }
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">Logowanie</Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adres email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Hasło"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Zaloguj się
          </Button>
        </form>
      </div>
      <Snackbar
        open={showSuccessMessage}
        autoHideDuration={6000}
        onClose={() => setShowSuccessMessage(false)}
      >
        <Alert onClose={() => setShowSuccessMessage(false)} severity="success">
          Zalogowano pomyślnie.
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
