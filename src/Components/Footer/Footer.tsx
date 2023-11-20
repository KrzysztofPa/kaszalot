import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './Footer.style';

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.address}>
        <Typography variant="body1" className={classes.text}>
          Kaszaloty Sp. z o.o.
        </Typography>
        <Typography variant="body1" className={classes.text}>
          ul. Przykładowa 123, 00-000 Miasto
        </Typography>
        <Typography variant="body1" className={classes.text}>
          NIP: 123-456-78-90
        </Typography>
      </Box>
      <iframe
        className={classes.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250647.294669166!2d21.000655829019!3d52.22967527975826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2spl!4v1637677804456!5m2!1sen!2spl"
        allowFullScreen={true}
        loading="lazy"
      />
    </Box>
  );
};

export default Footer;
