import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  article: {
    cursor: 'pointer',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  articleTitle: {
    fontWeight: 'bold',
  },
  articleContent: {
    marginTop: theme.spacing(1),
  },
  articleDate: {
    marginTop: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
  dialogActions: {
    padding: theme.spacing(2),
  },
}));

export default useStyles;