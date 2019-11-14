import React from 'react';
import { Grid, Avatar, Typography, Divider, IconButton, Container } from '@material-ui/core';
import MeLogo from './images/me.jpg';
import AviationIcon from './images/propeller.png';
import TechIcon from './images/macbook.png';
import ScubaIcon from './images/mask.png';
import BoatIcon from './images/boat.png';
import MainContent from './components/MainContent';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Grid container spacing={0} alignItems='center' justify='flex-start' direction='row'>
          <Grid item md={2} xs={2}>
            <Avatar alt="Lee Dale" src={MeLogo} className='Me-Avatar' />
          </Grid>
          <Grid item md={2} xs={2} alignContent='flex-start' alignItems='flex-start'>
            <Typography variant='h4' className='Courier-Typography'>Lee Dale</Typography>
          </Grid>
          <Grid item md={8} xs={12}>
            <Grid container spacing={0} alignItems='center' justify='flex-start' direction='row'>
              <Grid item md={3} xs={12}>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                  <img src={TechIcon} className='Nav-Button' />
                </IconButton>
                <Typography variant='h6' className='Courier-Typography'>Technology</Typography>
              </Grid>
              <Grid item md={3} xs={12}>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                  <img src={AviationIcon} className='Nav-Button' />
                </IconButton>
                <Typography variant='h6' className='Courier-Typography'>Flying</Typography>
              </Grid>
              <Grid item md={3} xs={12}>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                  <img src={BoatIcon} className='Nav-Button' />
                </IconButton>
                <Typography variant='h6' className='Courier-Typography'>Sailing</Typography>
              </Grid>
              <Grid item md={3} xs={12}>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                  <img src={ScubaIcon} className='Nav-Button' />
                </IconButton>
                <Typography variant='h6' className='Courier-Typography'>Diving</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </header>
      <Divider />
      <body>
        <Container className='Main-Container'>
          <MainContent />
        </Container>
      </body>
    </div>
  );
}

export default App;
