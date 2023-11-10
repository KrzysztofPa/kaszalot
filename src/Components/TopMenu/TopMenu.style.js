import { Theme, createStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: '#1D9EDC',
    },
    tabs: {
      marginLeft: 0,
    },
    tab: {
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: "'Roboto', sans-serif",
      borderRadius: theme.shape.borderRadius,

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
      fontFamily: "'Roboto', sans-serif",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 'auto',
      },
      fontFamily: "'Roboto', sans-serif",
    },
    drawerPaper: {
      width: 240,
      backgroundColor: '#1D9EDC',
      color: '#ffffff',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: "'Roboto', sans-serif",
    },
    buttonIcon: {
      color: '#ffffff',
            '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
    },
  }));

export default useStyles;
