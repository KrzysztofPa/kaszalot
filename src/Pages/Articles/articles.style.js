// articles.style.ts
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
  selectedImage: {
    width: '100%',
    height: 'auto',
    marginTop: theme.spacing(1),
  },
  editingContent: {
    marginBottom: theme.spacing(2),
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },
  selectedImage: {
    maxWidth: '100%',
    maxHeight: '400px',
    width: 'auto',
    height: 'auto',
  },
  deleteButton: {
    marginTop: theme.spacing(1),
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: '#1D9EDC',
    color: 'white',
    marginTop: theme.spacing(1),
  },
  closeButton: {
    backgroundColor: '#1D9EDC',
    color: 'white',
    marginTop: theme.spacing(1),
  },
}));

export default useStyles;
