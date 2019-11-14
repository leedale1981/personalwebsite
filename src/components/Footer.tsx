import React from "react";
import { Typography } from "@material-ui/core";
import ReactIcon from "../images/react.png";
import MaterialIcon from "../images/material.png";
import AzureIcon from "../images/azure.png";
import '../App.css';

const Footer: React.FC = () => {
  return (
    <Typography variant='caption'>
      Website created using <a href="https://reactjs.org/" title="reactjs">React js <img src={ReactIcon} /></a> <br /> 
      UI created with <a href="https://material-ui.com/" title="Material UI">Material UI <img src={MaterialIcon} /></a>  <br />
      Hosted on <a href="https://material-ui.com/" title="Microsoft Azure">Microsoft Azure <img src={AzureIcon} /></a>  <br />
      Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
    </Typography>
  );
}

export default Footer;
