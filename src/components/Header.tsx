import React from 'react';
import { Grid, Typography, IconButton, Avatar } from '@material-ui/core';
import MeLogo from '../images/me.jpg';
import AviationIcon from '../images/propeller.png';
import TechIcon from '../images/macbook.png';
import ScienceIcon from '../images/science.png';
import ScubaIcon from '../images/mask.png';
import BoatIcon from '../images/boat.png';
import '../App.css';

const Header: React.FC = () => {
  return (
    <Grid container spacing={0} alignItems='center' justify='flex-start' direction='row'>
      <Grid item md={2} xs={6}>
        <Avatar alt="Lee Dale" src={MeLogo} className='Me-Avatar' />
      </Grid>
      <Grid item md={2} xs={6} alignContent='flex-start' alignItems='flex-start'>
        <Typography variant='h4' className='Courier-Typography'>Lee Dale</Typography>
      </Grid>
      <Grid item md={8} xs={12}>
        <Grid container spacing={0} alignItems='center' justify='flex-start' direction='row'>
          <Grid item md={2} sm={4} xs={6}>
            <IconButton style={{ backgroundColor: 'transparent' }}>
              <img src={TechIcon} className='Nav-Button' />
            </IconButton>
            <Typography variant='h6' className='Courier-Typography'>Technology</Typography>
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <IconButton style={{ backgroundColor: 'transparent' }}>
              <img src={ScienceIcon} className='Nav-Button' />
            </IconButton>
            <Typography variant='h6' className='Courier-Typography'>Science</Typography>
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <IconButton style={{ backgroundColor: 'transparent' }}>
              <img src={AviationIcon} className='Nav-Button' />
            </IconButton>
            <Typography variant='h6' className='Courier-Typography'>Flying</Typography>
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <IconButton style={{ backgroundColor: 'transparent' }}>
              <img src={BoatIcon} className='Nav-Button' />
            </IconButton>
            <Typography variant='h6' className='Courier-Typography'>Sailing</Typography>
          </Grid>
          <Grid item md={2} sm={4} xs={6}>
            <IconButton style={{ backgroundColor: 'transparent' }}>
              <img src={ScubaIcon} className='Nav-Button' />
            </IconButton>
            <Typography variant='h6' className='Courier-Typography'>Diving</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Header;
