import * as React from 'react';
import { Grid, Typography, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Icon } from '@material-ui/core';
import { PlayArrow } from "@material-ui/icons";
import DhIcon from "../images/dunnhumby.jpg";
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
import { Link } from "react-router-dom";

const SoftwarePage: React.FC = () => {

    return (
        <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='row'>
            <Grid item md={7} xs={12}>
                <Typography variant='h4' className='Courier-Typography'>Recent Projects</Typography>
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
                <ExpansionPanel className='Expansion' expanded>
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
            </Grid>
            <Grid item md={5} xs={12}>
                <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='column'>
                    <Grid item md={12} xs={12}>
                        <Typography variant='h4' className='Courier-Typography'>Articles</Typography>
                        <Paper className='Paper'>
                        <Typography variant='h6'>Some article</Typography>
                        <Typography variant='body1'>
                            I have been a software developer for twenty years now and have worked thirteen of those years as a freelance developer specializing in building enterprise web applications. The main technology stack is based around Microsoft .NET (Including .NET Core & ASP.NET MVC/WebAPI), JavaScript, TypeScript, React and Node. I have extensive knowledge of cloud technologies and architectures mainly on the Microsoft Azure platform and recently with Google’s Cloud Platform.
                        </Typography>
                        </Paper>
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

export default SoftwarePage;