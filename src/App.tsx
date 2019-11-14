import React from 'react';
import { Grid, Avatar, Typography, Divider, Paper, Button, IconButton, Container } from '@material-ui/core';
import MeLogo from './images/me.jpg';
import AviationIcon from './images/propeller.png';
import TechIcon from './images/macbook.png';
import ScubaIcon from './images/mask.png';
import McsaIcon from './images/mcsa.png';
import DevWebIcon from './images/devweb.png';
import DevMvcIcon from './images/devmvc.png';
import Html5Icon from './images/html5.png';
import CaaIcon from './images/caa.gif';
import OuIcon from './images/ou.png';
import PadiOwdIcon from './images/padiowd.png';
import BoatIcon from './images/boat.png';
import BcsIcon from './images/bcs.png';
import NvqIcon from './images/nvq-logo.png';
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
          <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='row'>
            <Grid item md={7} xs={12}>
              <Typography variant='h4' className='Courier-Typography'>About me</Typography>
              <Paper className='Paper'>
                <Typography variant='h6'>Career</Typography>
                <Typography variant='body1'>
                  I have been a software developer for twenty years now and have worked thirteen of those years as a freelance developer specializing in building enterprise web applications. The main technology stack is based around Microsoft .NET (Including .NET Core & ASP.NET MVC/WebAPI), JavaScript, TypeScript, React and Node. I have extensive knowledge of cloud technologies and architectures mainly on the Microsoft Azure platform and recently with Google’s Cloud Platform.
                  <br /><br />
                  I try to focus on building clean, testable code that not only delivers on my clients requirements but leaves them with a simple maintainable code base.
                </Typography>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                  <img src={McsaIcon} className='Qualification-Icon' />
                </IconButton>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                  <img src={DevWebIcon} className='Qualification-Icon' />
                </IconButton>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                  <img src={DevMvcIcon} className='Qualification-Icon' />
                </IconButton>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                  <img src={Html5Icon} className='Qualification-Icon' />
                </IconButton>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                  <img src={BcsIcon} className='Qualification-Icon' />
                </IconButton>
              </Paper>
              <Paper className='Paper'>
                <Typography variant='h6'>Education</Typography>
                <Typography variant='body1'>
                  I am working towards a BSc (Hons) degree with the Open University. The degree is an open degree and has been split between computing and physics. I am currently doing modules SM358 The Quantum World and TM352 Web, mobile and cloud technologies. 
                  I also have an NVQ in Business Administration
                </Typography>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                  <img src={OuIcon} className='Qualification-Icon' />
                </IconButton>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                  <img src={NvqIcon} className='Qualification-Icon' />
                </IconButton>
              </Paper>
              <Paper className='Paper'>
                <Typography variant='h6'>Flying</Typography>
                <Typography variant='body1'>
                  I’m am training to get my private pilots licence at North Weald Flight Training. I currently have about 23 hours logged as pilot under training and have completed 5 out of 9 ground exams.
                </Typography>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                  <img src={CaaIcon} className='Qualification-Icon'/>
                </IconButton>
              </Paper>
              <Paper className='Paper'>
                <Typography variant='h6'>Sailing</Typography>
                <Typography variant='body1'>
                  I’m am training to get my private pilots licence at North Weald Flight Training. I currently have about 23 hours logged as pilot under training and have completed 5 out of 9 ground exams.
                </Typography>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                  <img src={CaaIcon} className='Qualification-Icon'/>
                </IconButton>
              </Paper>
              <Paper className='Paper'>
                <Typography variant='h6'>Diving</Typography>
                <Typography variant='body1'>
                  I have been a software developer for twenty years now and have worked thirteen of those years as a freelance developer specializing in building enterprise web applications. The main technology stack is based around Microsoft .NET (Including .NET Core & ASP.NET MVC/WebAPI), JavaScript, TypeScript, React and Node. I have extensive knowledge of cloud technologies and architectures mainly on the Microsoft Azure platform and recently with Google’s Cloud Platform.
                </Typography>
                <IconButton style={{ backgroundColor: 'transparent' }}>
                  <img src={PadiOwdIcon} className='Qualification-Icon' />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item md={5} xs={12}>
              <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='column'>
                <Grid item md={12} xs={12}>
                  <Typography variant='h4' className='Courier-Typography'>Latest Article</Typography>
                  <Paper className='Paper'>
                    <Typography variant='h6'>Some article</Typography>
                    <Typography variant='body1'>
                      I have been a software developer for twenty years now and have worked thirteen of those years as a freelance developer specializing in building enterprise web applications. The main technology stack is based around Microsoft .NET (Including .NET Core & ASP.NET MVC/WebAPI), JavaScript, TypeScript, React and Node. I have extensive knowledge of cloud technologies and architectures mainly on the Microsoft Azure platform and recently with Google’s Cloud Platform.
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item md={12} xs={12}>
                  <Typography variant='h4' className='Courier-Typography'>Latest Project</Typography>
                  <Paper className='Paper'>
                    <Typography variant='h6'>Some project</Typography>
                    <Typography variant='body1'>
                      I have been a software developer for twenty years now and have worked thirteen of those years as a freelance developer specializing in building enterprise web applications. The main technology stack is based around Microsoft .NET (Including .NET Core & ASP.NET MVC/WebAPI), JavaScript, TypeScript, React and Node. I have extensive knowledge of cloud technologies and architectures mainly on the Microsoft Azure platform and recently with Google’s Cloud Platform.
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </body>
    </div>
  );
}

export default App;
