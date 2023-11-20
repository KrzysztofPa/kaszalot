import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#1D9EDC',
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  address: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '50%',
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Roboto',
  },
  map: {
    width: '50%',
    height: '200px',
    border: 0,
    marginLeft: theme.spacing(2),
  },
}));
