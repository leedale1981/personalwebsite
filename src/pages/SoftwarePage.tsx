import React, { useState } from 'react';
import { Grid, Typography, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Icon, Collapse, IconButton } from '@material-ui/core';
import { PlayArrow, KeyboardArrowUp, KeyboardArrowDown } from "@material-ui/icons";
import DhIcon from "../images/dunnhumby.jpg";
import CandcIcon from "../images/candc.png";
import { ExpandMore } from "@material-ui/icons";
import NetCoreIcon from "../images/.netcore.png";
import GcpIcon from "../images/gcp.png";
import KubeIcon from "../images/kubernetes.png";
import OfqualIcon from "../images/ofqual.png";
import ReactIcon from "../images/react.png";
import AzureIcon from "../images/azure.png";
import TsIcon from "../images/typescript.png";
import NodeIcon from "../images/node.png";
import GamingIcon from "../images/gaming.png";
import SbIcon from "../images/spaceblaster.jpg";
import BcIcon from "../images/blockchain.png";
import AlIcon from "../images/alexa.png";
import { Link } from "react-router-dom";

const SoftwarePage: React.FC = () => {
    const [dunnhumbyExpanded, setDunnhumbyExpanded] = useState('dunnhumbyPanel');
    const [ofqualExpanded, setOfqualExpanded] = useState("ofqualPanel");
    const [candcExpanded, setCandcExpanded] = useState("");
    const [gamesExpanded, setGamesExpanded] = useState("gamesPanel");
    const [blockchainExpanded, setBlockchainExpanded] = useState("");
    const [alexaskillExpanded, setAlexaskillExpanded] = useState("");
    const [moreProjectsExpanded, setMoreProjectsExpanded] = useState(false);

    const handleExpansionChange = (panel: string) => (event: any, newExpanded: boolean) => {
      switch (panel) {
        case "gamesPanel":
            setGamesExpanded(newExpanded ? panel : "");
            break;
        case "dunnhumbyPanel":
          setDunnhumbyExpanded(newExpanded ? panel : "");
          break;
        case "ofqualPanel":
          setOfqualExpanded(newExpanded ? panel : "");
          break;
        case "candcPanel":
            setCandcExpanded(newExpanded ? panel : "");
            break;
        case "blockchainPanel":
            setBlockchainExpanded(newExpanded ? panel : "");
            break;
        case "alexaskillPanel":
            setAlexaskillExpanded(newExpanded ? panel : "");
            break;
      }
    };

    const handleLinkExpandClick = (panel: string) => {
        switch (panel) {
          case "moreProjects":
            setMoreProjectsExpanded(!moreProjectsExpanded);
            break;
        }
      }

    return (
        <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='row'>
            <Grid item md={7} xs={12}>
                <Typography variant='h5' className='Courier-Typography'>Recent Projects</Typography>
                <ExpansionPanel className='Expansion' expanded={dunnhumbyExpanded === 'dunnhumbyPanel'} onChange={handleExpansionChange('dunnhumbyPanel')}>
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
                <ExpansionPanel className='Expansion' expanded={ofqualExpanded === 'ofqualPanel'} onChange={handleExpansionChange('ofqualPanel')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                        <img src={OfqualIcon} className="Header-Icon"/>
                        <img src={ReactIcon} className='Qualification-Icon' />
                        <img src={AzureIcon} className='Qualification-Icon' />
                        <img src={TsIcon} className='Qualification-Icon' />
                        <img src={NodeIcon} className='Qualification-Icon' />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="body1">
                            <Typography variant="caption">June 2018 - July 2019</Typography><br />
                            My role at Ofqual as a senior web developer was to design and build from scratch a fully working single page web application that would allow Ofqual to manage awarding organisations across England and Wales and to handle their accreditation process.
                            React was choosen for the front end applicatyion and Node was used to build out the backend API. The application was hosted on the Micrtosoft Azure Cloud and services like CosmosDB, Azure AD and Azure Search were utilised within the application.
                            The application was sucessfully delivered into production and is now live.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <IconButton 
                    disableRipple disableTouchRipple style={{ backgroundColor: 'transparent' }}
                    onClick={() => handleLinkExpandClick("moreProjects")}>
                    <Typography variant="h5" className='Courier-Typography'>
                        {(moreProjectsExpanded) ? "Less projects": "More projects" }
                    </Typography>
                    {(moreProjectsExpanded) ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                </IconButton>
                <Collapse in={moreProjectsExpanded}>
                    <ExpansionPanel className='Expansion' expanded={candcExpanded === 'candcPanel'} onChange={handleExpansionChange('candcPanel')}>
                        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                            <img src={CandcIcon} className="Header-Icon"/>
                            <img src={NetCoreIcon} className='Qualification-Icon' />
                            <img src={AzureIcon} className='Qualification-Icon' />
                            <img src={TsIcon} className='Qualification-Icon' />
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography variant="body1">
                                <Typography variant="caption">February 2018 - June 2018</Typography><br />
                                My role at Content and Code was to design and build a .NET core Web API service layer that surfaced data from Microsoft Office 365 to allow an iOS mobile application to access content. I also built components using TypeScript with React for use in C&C's intranet product. All projects were deployed to the Microsoft Azure cloud.
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </Collapse>
            </Grid>
            <Grid item md={5} xs={12}>
                <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='column'>
                    <Grid item md={12} xs={12}>
                        <Typography variant='h5' className='Courier-Typography'>Articles</Typography>
                        <ExpansionPanel className='Expansion' expanded={blockchainExpanded === 'blockchainPanel'} onChange={handleExpansionChange('blockchainPanel')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                                <img src={BcIcon} className="Header-Icon"/>
                                <Typography variant="h6" style={{lineHeight: 2.3}}>The blockchain, what is it?</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography variant="body1">
                                    Lately I've been reading and taking an interest in the technology known as the blockchain. In this article I attempt to outline and explain in broad terms what the blockchain is and how it has the potential to change society in a number of ways.
                                    <br /><br />
                                    <Link to={"/tech/articles/blockchain-what-is-it"}>
                                    <Typography variant='body1'>Read the whole article</Typography>
                                    </Link>
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>
                        <ExpansionPanel className='Expansion' expanded={alexaskillExpanded === 'alexaskillPanel'} onChange={handleExpansionChange('alexaskillPanel')}>
                            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                                <img src={AlIcon} className="Header-Icon"/>
                                <Typography variant="h6" style={{lineHeight: 2.3}}>My first Alexa Skill.</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography variant="body1">
                                    I created an Alexa skills with Node and TypeScript and this article runs through the steps I took to create and deploy the application.
                                    <br /><br />
                                    <Link to={"/tech/articles/my-first-alexa-skill"}>
                                    <Typography variant='body1'>Read the whole article</Typography>
                                    </Link>
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

export default SoftwarePage;