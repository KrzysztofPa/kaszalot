// articles.tsx
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {
  makeStyles,
  Typography,
  Grid,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Card,
  CardContent,
  CardMedia,
  TextField,
  IconButton,
} from '@material-ui/core';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import DeleteIcon from '@material-ui/icons/Delete';

// Style
import useStyles from './articles.style';
import mockDatabase from './mockDatabase';

interface Article {
  id: number;
  title: string;
  content: string;
  fullContent: string;
  date: string;
  image: string;
}

interface User {
  isAdmin: boolean;
}

export const Articles = (): JSX.Element => {
  const classes = useStyles();
  const [selectedPost, setSelectedPost] = useState<Article | null>(null);
  const [editorContent, setEditorContent] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const currentUser: User = { isAdmin: true };

  const handlePostClick = (post: Article): void => {
    setSelectedPost(post);
    setEditorContent(post.fullContent);
    setSelectedImage(post.image);
    setIsEditing(currentUser.isAdmin);
  };

  const handleClose = (): void => {
    setSelectedPost(null);
    setEditorContent('');
    setSelectedImage('');
    setIsEditing(false);
  };

  const handleEditorChange = (content: string): void => {
    setEditorContent(content);
  };

  const handleSave = (): void => {
    if (selectedPost) {
      const updatedDatabase = mockDatabase.map((post) =>
        post.id === selectedPost.id
          ? { ...post, fullContent: editorContent, image: selectedImage }
          : post
      );
      mockDatabase.length = 0;
      mockDatabase.push(...updatedDatabase);
      setSelectedPost({ ...selectedPost, fullContent: editorContent, image: selectedImage });
      setIsEditing(false);
    }
  };

  const handleTitleChange = (newTitle: string): void => {
    if (selectedPost) {
      const updatedDatabase = mockDatabase.map((post) =>
        post.id === selectedPost.id ? { ...post, title: newTitle } : post
      );
      mockDatabase.length = 0;
      mockDatabase.push(...updatedDatabase);
      setSelectedPost({ ...selectedPost, title: newTitle });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          setSelectedImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleRemoveImage = (): void => {
    setSelectedImage('');
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {mockDatabase.map((article) => (
          <Grid item key={article.id} xs={12} sm={6} md={4}>
            <Paper className={classes.article} onClick={() => handlePostClick(article)}>
              <Card>
                <CardMedia className={classes.cardMedia} image={article.image} title={article.title} />
                <CardContent>
                  <Typography variant="h6" className={classes.articleTitle}>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" className={classes.articleContent}>
                    {article.content}
                  </Typography>
                  <Typography variant="caption" className={classes.articleDate}>
                    {article.date}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog open={selectedPost !== null} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>
          {isEditing ? (
            <TextField
              fullWidth
              value={selectedPost?.title}
              onChange={(e) => handleTitleChange(e.target.value)}
            />
          ) : (
            selectedPost?.title
          )}
        </DialogTitle>
        <DialogContent>
  {isEditing && (
    <div className={classes.editingContent}>
      <div className={classes.imageContainer}>
        <img src={selectedImage} alt="Selected" className={classes.selectedImage} />
        <div>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            id="image-upload"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="image-upload">
            <IconButton color="primary" component="span">
              <AddPhotoAlternateIcon />
            </IconButton>
          </label>
          {selectedImage && (
            <IconButton
              color="secondary"
              onClick={handleRemoveImage}
              className={classes.deleteButton}
            >
              <DeleteIcon />
            </IconButton>
          )}
        </div>
      </div>
    </div>
  )}
  {isEditing ? (
    <ReactQuill value={editorContent} onChange={handleEditorChange} />
  ) : (
    <div dangerouslySetInnerHTML={{ __html: editorContent }} />
  )}
</DialogContent>

{isEditing && (
  <DialogActions className={classes.dialogActions}>
    <div className={classes.buttonsContainer}>
      <Button onClick={handleSave} className={classes.saveButton}>
        Zapisz
      </Button>
      <Button onClick={handleClose} className={classes.closeButton}>
        Zamknij
      </Button>
    </div>
  </DialogActions>
)}
      </Dialog>
    </div>
  );
};
