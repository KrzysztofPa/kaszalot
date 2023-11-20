import { Theme, createStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "'Roboto', sans-serif", // Dodane tutaj
    fontSize: '14px',
    fontWeight: 400,
    fontStyle: 'normal',
  },
  appBar: {
    backgroundColor: '#1D9EDC',
  },
  tabs: {
    marginLeft: 0,
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
  },
  tab: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    borderRadius: theme.shape.borderRadius,
    color: '#ffffff',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
  },
  tabDrawer: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    borderRadius: theme.shape.borderRadius,
    color: '#ffffff',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '24px',
  },
  logo: {
    maxWidth: 100,
    maxHeight: 40,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
  },
  inputRoot: {
    color: '#ffffff',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  drawerPaper: {
    width: 240,
    backgroundColor: '#1D9EDC',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center'
  },
  buttonIcon: {
    color: '#ffffff',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
}));

export default useStyles;
