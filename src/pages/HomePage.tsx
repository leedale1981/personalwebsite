import React, { useState } from 'react';
import '../App.css';
import { Grid, Typography, Paper, IconButton, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Collapse, Hidden, Tooltip } from '@material-ui/core';
import FpIcon from "../images/factorydesignpattern.png";
import McsaIcon from '../images/mcsa.png';
import McsdIcon from '../images/mcsd.png';
import AzFundIcon from '../images/azure-fundamentals.png';
import AzDevIcon from '../images/azure-developer-associate-600x600.png';
import TogafIcon from "../images/togaf.png";
import CaaIcon from '../images/caa.gif';
import OuIcon from '../images/ou.png';
import PadiOwdIcon from '../images/padiowd.png';
import BcsIcon from '../images/bcs.png';
import NvqIcon from '../images/nvq-logo.png';
import RyaIcon from '../images/rya.gif';
import NetCoreIcon from "../images/.netcore.png";
import OfqualIcon from "../images/ofqual.png";
import ReactIcon from "../images/react.png";
import AzureIcon from "../images/azure.png";
import TsIcon from "../images/typescript.png";
import GamingIcon from "../images/gaming.png";
import IntroCyberIcon from '../images/introcyber.png';
import CloudIcon from "../images/cloud.png";
import ltIcon from '../images/learningtree-cert.png';
import SbIcon from "../images/spaceblaster.jpg";
import gcpAceIcon from "../images/gcp-ace.png";
import networkPlusIcon from "../images/networkplus.png";
import { Link } from "react-router-dom";
import { ExpandMore, PlayArrow, KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

const HomePage: React.FC = () => {
  const [projectExpanded, setProjectExpanded] = useState("");
  const [gamesExpanded, setGamesExpanded] = useState("");
  const [articleExpanded, setArticleExpanded] = useState("");
  const [moreAboutMeExpanded, setMoreAboutMeExpanded] = useState(false);

  const handleExpansionChange = (panel: string) => (event: any, newExpanded: boolean) => {
    switch (panel) {
      case "projectPanel":
        setProjectExpanded(newExpanded ? panel : "");
        break;
      case "gamesPanel":
        setGamesExpanded(newExpanded ? panel : "");
        break;
      case "articlePanel":
          setArticleExpanded(newExpanded ? panel : "");
          break;
    }
  };

  const handleLinkExpandClick = (panel: string) => {
    switch (panel) {
      case "moreAboutMe":
        setMoreAboutMeExpanded(!moreAboutMeExpanded);
        break;
    }
  }

  return (
    <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='row'>
      <Grid item md={7} xs={12}>
        <Typography variant='h5' className='Courier-Typography'>About me</Typography>
        <Paper className='Paper' style={{minHeight: 370}}>
          <Typography variant='h6'>Career</Typography>
          <Typography variant='body1'>
            I am a software developer and cloud architect who has been designing and building software solutions professionally for the last twenty years. I have worked thirteen of those years as a freelance developer specialising in building enterprise web applications for various clients in many different industries. 
            <br /><br />
            My main technology stack is based around Microsoft .NET (Including .NET Core & ASP.NET MVC/WebAPI), JavaScript, TypeScript, React and Node. I have extensive knowledge of cloud technologies and architectures mainly on the Microsoft Azure platform and recently with Google’s Cloud Platform.
            <br /><br />
            I try to focus on building clean, testable code that not only delivers on my clients requirements but leaves them with a simple maintainable code base.
          </Typography>
          <br />
          <IconButton style={{ backgroundColor: 'transparent' }}>
            <Tooltip title='Google Certified Associate Cloud Engineer'>
                <img src={gcpAceIcon} className='Qualification-Icon' alt="Google Certified Associate Cloud Engineer" />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: 'transparent' }}>
            <Tooltip title='TOGAF 9.2 Certified'>
                <img src={TogafIcon} className='Qualification-Icon' alt="TOGAF 9.2 Certified" />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: 'transparent' }}>
            <Tooltip title='Azure Developer Associate'>
                <img src={AzDevIcon} className='Qualification-Icon' alt="Azure Developer Associate" />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: 'transparent' }}>
            <Tooltip title='Azure Fundamentals'>
                <img src={AzFundIcon} className='Qualification-Icon' alt="Azure Fundamentals" />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: 'transparent' }}>
            <Tooltip title='MCSD App Builder'>
                <img src={McsdIcon} className='Qualification-Icon' alt="MCSD App Builder" />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: 'transparent' }}>
            <Tooltip title='MCSA Web Applications'>
                <img src={McsaIcon} className='Qualification-Icon' alt="MCSA Web Applications" />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: 'transparent' }}>
            <Tooltip title='CompTIA Network+'>
                <img src={networkPlusIcon} className='Qualification-Icon' alt="CompTIA Network+" />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: 'transparent' }}>
            <Tooltip title='Foundation Certificate in Systems Development'>
                <img src={BcsIcon} className='Qualification-Icon' alt="Foundation Certificate in Systems Development" />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: 'transparent' }}>
            <Tooltip title='Introduction to Cyber Security'>
                <img src={IntroCyberIcon} className='Qualification-Icon' alt="Introduction to Cyber Security" />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: 'transparent' }}>
            <Tooltip title='Visual Basic 6 Enterprise Development Certified Professional'>
                <img src={ltIcon} className='Qualification-Icon' alt="Visual Basic 6 Enterprise Development Certified Professional" />
            </Tooltip>
          </IconButton>
        </Paper>
        <IconButton 
          disableRipple disableTouchRipple style={{ backgroundColor: 'transparent' }}
          onClick={() => handleLinkExpandClick("moreAboutMe")}>
          <Typography variant="h5" className='Courier-Typography'>
            {(moreAboutMeExpanded) ? "Less about me": "More about me" }
          </Typography>
          {(moreAboutMeExpanded) ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </IconButton>
        <Collapse in={moreAboutMeExpanded}>
          <Paper className='Paper'>
            <Typography variant='h6'>Education</Typography>
            <Typography variant='body1'>
              I am working towards a BSc (Hons) degree part time with the Open University. The degree is an open degree and has been split between computing and physics. I am currently doing modules SM358 The Quantum World and TM352 Web, mobile and cloud technologies. 
              I also have an NVQ in Business Administration
            </Typography>
            <IconButton style={{ backgroundColor: 'transparent' }}>
              <img src={OuIcon} className='Qualification-Icon' />
            </IconButton>
            <IconButton style={{ backgroundColor: 'transparent' }}>
              <img src={NvqIcon} className='Qualification-Icon' />
            </IconButton>
          </Paper>
        </Collapse>
        <Collapse in={moreAboutMeExpanded}>
          <Paper className='Paper'>
            <Typography variant='h6'>Flying</Typography>
            <Typography variant='body1'>
              I enjoy flying small aircraft in my free time and I'm currently training to get my private pilots licence at North Weald Flight Training. I have about 32 hours logged at the moment as a pilot under training.
            </Typography>
            <br /><br />
            <Link to={"/flying"}>
              <Typography variant='body1'>If your interested in following my progress in flying then check out the flying section.</Typography>
            </Link>
            <IconButton style={{ backgroundColor: 'transparent' }}>
              <img src={CaaIcon} className='Qualification-Icon'/>
            </IconButton>
          </Paper>
        </Collapse>
        <Collapse in={moreAboutMeExpanded}>
          <Paper className='Paper'>
            <Typography variant='h6'>Sailing</Typography>
            <Typography variant='body1'>
              My plan in the next few years is to purchase a yacht and sail around the world with my wife (and dogs). We are both working our way through the RYA certifications so we can gain as much experience as possible before we set off.
              <br /><br />
              <Link to={"/flying"}>
                <Typography variant='body1'>Visit the sailing section for updates and photos of our journey.</Typography>
              </Link>
            </Typography>
            <IconButton style={{ backgroundColor: 'transparent' }}>
              <img src={RyaIcon} className='Qualification-Icon'/>
            </IconButton>
          </Paper>
        </Collapse>
        <Collapse in={moreAboutMeExpanded}>
          <Paper className='Paper'>
            <Typography variant='h6'>Diving</Typography>
            <Typography variant='body1'>
              I have recently qualified as a PADI certified Open Water Diver and plan to do more diving in the future. Hoepfully working towards the Master Scuba Diver qualification.
              <br /><br />
              <Link to={"/flying"}>
                <Typography variant='body1'>Check out the diving section for updates on my diving progress.</Typography>
              </Link>
            </Typography>
            <IconButton style={{ backgroundColor: 'transparent' }}>
              <img src={PadiOwdIcon} className='Qualification-Icon' />
            </IconButton>
          </Paper>
        </Collapse>
      </Grid>
      <Grid item md={5} xs={12}>
        <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='column'>
          <Grid item md={12} xs={12}>
            <Typography variant='h5' className='Courier-Typography Section-Header'>Latest Article</Typography>
            <Link to={"/articles"} className="Section-Link">
              <Typography variant='body1'>View All</Typography>
            </Link>
            <ExpansionPanel className='Expansion Section-Body' expanded={articleExpanded === 'articlePanel'} onChange={handleExpansionChange('articlePanel')}>
                  <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                      <img src={CloudIcon} className="Header-Icon" alt="CloudComputing"/>
                      <Typography variant="body2" style={{lineHeight: 2}}>How to deploy a Web App and Load Balancer to Kubernetes on GKE</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                      <Typography variant="body1">
                          This video walks through creating a Kubernetes cluster on Google Cloud Platform GKE. It shows hows to deploy a YAML deployment file using the gcloud SDK and deploy a load balancer service type to connect to a web server running in a container.
                          <br /><br />
                          <Link to={"/tech/articles/kubernetes-gke"}>
                          <Typography variant='body1'>Read the whole article</Typography>
                          </Link>
                      </Typography>
                  </ExpansionPanelDetails>
              </ExpansionPanel>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography variant='h5' className='Courier-Typography'>Latest Project</Typography>
            <ExpansionPanel className='Expansion' expanded={projectExpanded === 'projectPanel'} onChange={handleExpansionChange('projectPanel')}>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Grid container spacing={3} alignItems='flex-start' justify='flex-start'>
                        <Grid item md={3}>
                          <img src={OfqualIcon} className="Header-Icon"  alt="Ofqual"/>
                        </Grid>
                        <Hidden xsDown>
                          <Grid item md={2}>
                                <img src={ReactIcon} className='Qualification-Icon'  alt="React" />
                            </Grid>
                            <Grid item md={2}>
                                <img src={NetCoreIcon} className='Qualification-Icon' alt=".NET Core" />
                            </Grid>
                            <Grid item md={2}>
                                <img src={AzureIcon} className='Qualification-Icon'  alt="Azure" />
                            </Grid>
                            <Grid item md={2}>
                                <img src={TsIcon} className='Qualification-Icon'  alt="Typescript" />
                            </Grid>
                        </Hidden>
                    </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography variant="body1">
                            <Typography variant="caption">June 2018 - April 2020</Typography><br />
                            My role at Ofqual was to design and build from scratch a fully working single page web application that would allow Ofqual to manage awarding organisations across England and Wales and to handle their accreditation process.
                            React was choosen for the front end application calling into and Node backend API. The application was hosted on the Micrtosoft Azure Cloud and services like CosmosDB, Azure AD and Azure Search were utilised within the application.
                            The application was sucessfully delivered into production. I went back to Ofqual a while later to migrate the backend API to .NET core and build extra functionality into the system.
                        </Typography>
                    </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item md={12} xs={12}>
              <Typography variant='h5' className='Courier-Typography'>Games</Typography>
              <ExpansionPanel className='Expansion' expanded={gamesExpanded === 'gamesPanel'} onChange={handleExpansionChange('gamesPanel')}>
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
