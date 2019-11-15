import React from 'react';
import { Grid, Typography, Paper, IconButton, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import McsaIcon from '../images/mcsa.png';
import DevWebIcon from '../images/devweb.png';
import DevMvcIcon from '../images/devmvc.png';
import Html5Icon from '../images/html5.png';
import CaaIcon from '../images/caa.gif';
import OuIcon from '../images/ou.png';
import PadiOwdIcon from '../images/padiowd.png';
import BcsIcon from '../images/bcs.png';
import NvqIcon from '../images/nvq-logo.png';
import RyaIcon from '../images/rya.gif';
import NetCoreIcon from "../images/.netcore.png";
import GcpIcon from "../images/gcp.png";
import KubeIcon from "../images/kubernetes.png";
import DhIcon from "../images/dunnhumby.jpg";
import GamingIcon from "../images/gaming.png";
import SbIcon from "../images/spaceblaster.jpg";
import '../App.css';
import { Link } from "react-router-dom";
import { ExpandMore, PlayArrow } from '@material-ui/icons';

const HomePage: React.FC = () => {
  return (
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
            <img src={RyaIcon} className='Qualification-Icon'/>
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
            <ExpansionPanel className='Expansion' expanded>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <img src={DhIcon} className="Header-Icon"/>
                    <img src={NetCoreIcon} className='Qualification-Icon' />
                    <img src={GcpIcon} className='Qualification-Icon' />
                    <img src={KubeIcon} className='Qualification-Icon' />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography variant="body1">
                        <Typography variant="caption">July 2019 - November 2019</Typography><br />
                        This project was helping to rebuild from scratch, Dunnhumby's core data science platform with modern technologies such as .NET Core, Google Cloud Platform, Docker, Kubernetes and React.
                        My role as a senior software engineer was to design and develop some middle tier and backend services utilising .NET Core. The services hooked into GCP PubSub messaging queues and a PostgresSQL database.
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item md={12} xs={12}>
              <Typography variant='h4' className='Courier-Typography'>Games</Typography>
              <ExpansionPanel className='Expansion' expanded>
                  <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                      <Link to={"/spaceblaster"}>
                          <img src={SbIcon} className="Game-Icon"/>
                          <img src={GamingIcon} className="Game-Icon"/>
                          <PlayArrow fontSize="large" />
                      </Link>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                      <Typography variant="body1">
                          An open source Shoot em up game created with TypeScript. Game is still a work in progress but you can still see what I've done so far!<br /><br />
                          View the source at <a href="https://github.com/leedale1981/SpaceBlaster">https://github.com/leedale1981/SpaceBlaster</a>
                      </Typography>
                  </ExpansionPanelDetails>
              </ExpansionPanel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
