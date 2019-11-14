import React from "react";
import { Grid, Typography, IconButton, Avatar, Icon } from "@material-ui/core";
import MeLogo from "../images/me.jpg";
import AviationIcon from "../images/propeller.png";
import TechIcon from "../images/macbook.png";
import ScienceIcon from "../images/science.png";
import ScubaIcon from "../images/mask.png";
import BoatIcon from "../images/boat.png";
import { Link } from "react-router-dom";
import "../App.css";

const Header: React.FC = () => {
  return (
    <Grid container spacing={0} alignItems='center' justify='center' direction='row'>
      <Grid item md={2} xs={6}>
        <Link to={"/"}><Avatar alt="Lee Dale" src={MeLogo} className='Me-Avatar' /></Link>
      </Grid>
      <Grid item md={2} xs={6} alignContent='flex-start' alignItems='flex-start'>
        <Typography variant='h4' className='Courier-Typography'>Lee Dale</Typography>
      </Grid>
      <Grid item md={8} xs={12}>
        <Grid container spacing={0} direction='row'>
          <Grid item md={2} sm={4} xs={6}>
            <Link to={"/software"}>
              <Icon>
                <img src={TechIcon} className='Nav-Button' />
                <Typography variant='h6' className='Courier-Typography'>Software</Typography>
              </Icon>
            </Link>
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Link to={"/physics"}>
              <Icon>
                <img src={ScienceIcon} className='Nav-Button' />
                <Typography variant='h6' className='Courier-Typography'>Physics</Typography>
              </Icon>
            </Link>
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Link to={"/flying"}>
              <Icon>
                <img src={AviationIcon} className='Nav-Button' />
                <Typography variant='h6' className='Courier-Typography'>Flying</Typography>
              </Icon>
            </Link>
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Link to={"/sailing"}>
              <Icon>
                <img src={BoatIcon} className='Nav-Button' />
                <Typography variant='h6' className='Courier-Typography'>Sailing</Typography>
              </Icon>
            </Link>
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <Link to={"/diving"}>
              <Icon>
                <img src={ScubaIcon} className='Nav-Button' />
                <Typography variant='h6' className='Courier-Typography'>Diving</Typography>
              </Icon>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Header;
