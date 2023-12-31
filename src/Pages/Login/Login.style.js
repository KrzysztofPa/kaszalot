import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
  },
  paper: {
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#1D9EDC',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    color: '#1D9EDC',

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#1D9EDC'
  },
}));

export default useStyles;
