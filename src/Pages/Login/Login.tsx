import React, { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  Snackbar,
  CircularProgress,
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
  const [username, setUsername] = useState<string>('');
  const [registrationEmail, setRegistrationEmail] = useState<string>('');
  const [registrationPassword, setRegistrationPassword] = useState<string>('');
  const [registrationError, setRegistrationError] = useState<string>('');
  const [registrationLoading, setRegistrationLoading] = useState<boolean>(false);

  const [loginLoading, setLoginLoading] = useState<boolean>(false);

  const isEmailValid = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    setLoginLoading(true);
    setEmailError('');

    if (!isEmailValid(email)) {
      setEmailError('Niepoprawny adres email');
      setLoginLoading(false);
      return;
    }

    fetch('http://localhost:5000/api/Auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Błąd logowania');
        }
        return response.json();
      })
      .then(data => {
        setLoggedIn(true);
        setShowSuccessMessage(true);
      })
      .catch(error => {
        alert('Błąd logowania. Spróbuj ponownie.');
      })
      .finally(() => {
        setLoginLoading(false);
      });
  };

  const handleRegistration = () => {
    setRegistrationLoading(true);
    setRegistrationError('');

    if (!isEmailValid(registrationEmail)) {
      setRegistrationError('Niepoprawny adres email');
      setRegistrationLoading(false);
      return;
    }

    fetch('http://localhost:5000/api/Auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        email: registrationEmail,
        password: registrationPassword,
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Błąd rejestracji');
        }
        return response.json();
      })
      .then(data => {
        alert('Zarejestrowano pomyślnie. Możesz teraz się zalogować.');
        setRegistrationEmail('');
        setRegistrationPassword('');
      })
      .catch(error => {
        setRegistrationError('Błąd rejestracji. Spróbuj ponownie.');
      })
      .finally(() => {
        setRegistrationLoading(false);
      });
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
            disabled={loginLoading || registrationLoading}
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
            disabled={loginLoading || registrationLoading}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
            disabled={loginLoading || registrationLoading}
          >
            {loginLoading ? <CircularProgress size={24} /> : 'Zaloguj się'}
          </Button>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nazwa użytkownika"
            name="username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={loginLoading || registrationLoading}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="registrationEmail"
            label="Nowy adres email"
            name="registrationEmail"
            autoComplete="email"
            value={registrationEmail}
            onChange={(e) => setRegistrationEmail(e.target.value)}
            error={!!registrationError}
            helperText={registrationError}
            disabled={loginLoading || registrationLoading}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="registrationPassword"
            label="Nowe hasło"
            type="password"
            id="registrationPassword"
            value={registrationPassword}
            onChange={(e) => setRegistrationPassword(e.target.value)}
            disabled={loginLoading || registrationLoading}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleRegistration}
            disabled={loginLoading || registrationLoading}
          >
            {registrationLoading ? <CircularProgress size={24} /> : 'Zarejestruj się'}
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
