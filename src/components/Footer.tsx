import React from 'react';
import { Typography } from '@material-ui/core';
import ReactIcon from '../images/react.png';
import MaterialIcon from '../images/material.png';
import '../App.css';

const Footer: React.FC = () => {
  return (
    <Typography variant='body2'>
      Website created using <a href="https://reactjs.org/" title="reactjs">React js <img src={ReactIcon} /></a> <br /> 
      UI created with <a href="https://material-ui.com/" title="reactjs">Material UI <img src={MaterialIcon} /></a>  <br />
      Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </Typography>
  );
}

export default Footer;
