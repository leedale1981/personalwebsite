import React, { useState } from 'react';
import '../App.css';
import { Grid, Typography, Paper, IconButton, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Collapse, Hidden, Tooltip } from '@material-ui/core';
import FpIcon from "../images/factorydesignpattern.png";
import McsaIcon from '../images/mcsa.png';
import McsdIcon from '../images/mcsd.png';
import AzFundIcon from '../images/azure-fundamentals.png';
import AzDevIncon from '../images/azure-developer-associate-600x600.png';
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
import IntroCyberIcon from '../images/introcyber.png';
import ltIcon from '../images/learningtree-cert.png';
import SbIcon from "../images/spaceblaster.jpg";
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
            I am a software developer who has been writing software professionally for the last twenty years. I have worked thirteen of those years as a freelance developer specialising in building enterprise web applications for various clients in many different industries. 
            <br /><br />
            My main technology stack is based around Microsoft .NET (Including .NET Core & ASP.NET MVC/WebAPI), JavaScript, TypeScript, React and Node. I have extensive knowledge of cloud technologies and architectures mainly on the Microsoft Azure platform and recently with Google’s Cloud Platform.
            <br /><br />
            I try to focus on building clean, testable code that not only delivers on my clients requirements but leaves them with a simple maintainable code base.
          </Typography>
          <br />
          <IconButton style={{ backgroundColor: 'transparent' }}>
            <Tooltip title='Azure Developer Associate'>
                <img src={AzDevIncon} className='Qualification-Icon' alt="Azure Developer Associate" />
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
              I enjoy flying small aircraft in my free time and I'm currently training to get my private pilots licence at North Weald Flight Training. I have about 23 hours logged at the moment as a pilot under training and looking to go solo for the first time soon!
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
            <Typography variant='h5' className='Courier-Typography'>Latest Article</Typography>
            <ExpansionPanel className='Expansion' expanded={articleExpanded === 'articlePanel'} onChange={handleExpansionChange('articlePanel')}>
                <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <img src={FpIcon} className="Header-Icon"/>
                    <Typography variant="body2" style={{lineHeight: 3}}>How to use the Factory Design Pattern with C#.</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography variant="body1">
                        The factory method is a design pattern that can be used in your .NET projects to support dependency injection and therefore testable classes while also keeping your components decoupled from external dependencies.
                        <br /><br />
                        <Link to={"/tech/articles/factory-method-design-pattern-csharp"}>
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
                        <Grid item md={5}>
                            <img src={DhIcon} className="Header-Icon" alt="Dunnhumby" />
                        </Grid>
                        <Hidden xsDown>
                            <Grid item md={2}>
                                <img src={NetCoreIcon} className='Qualification-Icon'  alt=".Net Core" />
                            </Grid>
                            <Grid item md={2}>
                                <img src={GcpIcon} className='Qualification-Icon' alt="Google Cloud Platform" />
                            </Grid>
                            <Grid item md={2}>
                                <img src={KubeIcon} className='Qualification-Icon'  alt="Kubernetes" />
                            </Grid>
                        </Hidden>
                    </Grid>
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
