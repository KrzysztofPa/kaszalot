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
import { useNavigate } from 'react-router-dom';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './Login.style';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Login: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

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
  const [loginError, setLoginError] = useState<string>('');
  
  const [isRegistrationMode, setIsRegistrationMode] = useState<boolean>(false);

  const isEmailValid = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    setLoginLoading(true);
    setEmailError('');
    setLoginError('');

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
        navigate('/Main');
      })
      .catch(error => {
        setLoginError('Błąd logowania. Spróbuj ponownie.');
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
          throw new Error(response.status === 409 ? 'Email już istnieje' : 'Błąd rejestracji');
        }
        return response.json();
      })
      .then(data => {
        setShowSuccessMessage(true);
        setUsername('');
        setRegistrationEmail('');
        setRegistrationPassword('');
      })
      .catch(error => {
        setShowSuccessMessage(false);
        setRegistrationError(error.message);
      })
      .finally(() => {
        setRegistrationLoading(false);
      });
  };

  const toggleMode = () => {
    setIsRegistrationMode(!isRegistrationMode);
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">{isRegistrationMode ? 'Rejestracja' : 'Logowanie'}</Typography>
        <form className={classes.form} noValidate>
          {isRegistrationMode && (
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
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={isRegistrationMode ? "registrationEmail" : "email"}
            label="Adres email"
            name={isRegistrationMode ? "registrationEmail" : "email"}
            autoComplete="email"
            value={isRegistrationMode ? registrationEmail : email}
            onChange={(e) => isRegistrationMode ? setRegistrationEmail(e.target.value) : setEmail(e.target.value)}
            error={isRegistrationMode ? !!registrationError : !!emailError}
            helperText={isRegistrationMode ? registrationError : emailError}
            disabled={loginLoading || registrationLoading}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name={isRegistrationMode ? "registrationPassword" : "password"}
            label="Hasło"
            type="password"
            id={isRegistrationMode ? "registrationPassword" : "password"}
            value={isRegistrationMode ? registrationPassword : password}
            onChange={(e) => isRegistrationMode ? setRegistrationPassword(e.target.value) : setPassword(e.target.value)}
            disabled={loginLoading || registrationLoading}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            color={isRegistrationMode ? "secondary" : "primary"}
            onClick={isRegistrationMode ? handleRegistration : handleLogin}
            disabled={loginLoading || registrationLoading}
          >
            {isRegistrationMode ? (registrationLoading ? <CircularProgress size={24} /> : 'Zarejestruj się') : (loginLoading ? <CircularProgress size={24} /> : 'Zaloguj się')}
          </Button>
          <Button
            type="button"
            fullWidth
            variant="outlined"
            color="default"
            onClick={toggleMode}
            disabled={loginLoading || registrationLoading}
          >
            {isRegistrationMode ? 'Zaloguj się' : 'Zarejestruj się'}
          </Button>
        </form>
      </div>
      <Snackbar
        open={showSuccessMessage || !!loginError}
        autoHideDuration={6000}
        onClose={() => {
          setShowSuccessMessage(false);
          setLoginError('');
        }}
      >
        <Alert onClose={() => {
          setShowSuccessMessage(false);
          setLoginError('');
        }} severity={loginError ? "error" : "success"}>
          {loggedIn ? 'Zalogowano pomyślnie.' : (loginError || 'Zarejestrowano pomyślnie. Możesz teraz się zalogować.')}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
