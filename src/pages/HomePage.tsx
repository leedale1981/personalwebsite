import React, { useState } from "react";
import "../App.css";
import {
  Grid,
  Typography,
  Paper,
  IconButton,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Hidden,
  Tooltip,
  Divider,
} from "@material-ui/core";
import McsaIcon from "../images/mcsa.png";
import McsdIcon from "../images/mcsd.png";
import AzFundIcon from "../images/azure-fundamentals.png";
import AzDevIcon from "../images/azure-developer-associate-600x600.png";
import TogafIcon from "../images/togaf.png";
import AwsCpIcon from "../images/AWS-CloudPractitioner.png"
import CaaIcon from "../images/caa.gif";
import PadiOwdIcon from "../images/padiowd.png";
import BcsIcon from "../images/bcs.png";
import NetCoreIcon from "../images/.netcore.png";
import DockerIcon from "../images/docker.png";
import ReactIcon from "../images/react.png";
import AzureIcon from "../images/azure.png";
import GamingIcon from "../images/gaming.png";
import IntroCyberIcon from "../images/introcyber.png";
import SbIcon from "../images/spaceblaster.jpg";
import gcpAceIcon from "../images/gcp-ace.png";
import networkPlusIcon from "../images/networkplus.png";
import securityPlusIcon from "../images/securityplus.png";
import ProvidorIcon from "../images/providor.jpg";
import DevIcon from "../images/dev.png";
import { Link } from "react-router-dom";
import {
  ExpandMore,
  PlayArrow,
} from "@material-ui/icons";

const HomePage: React.FC = () => {
  const [projectExpanded, setProjectExpanded] = useState("projectPanel");
  const [gamesExpanded, setGamesExpanded] = useState("gamesPanel");
  const [articleExpanded, setArticleExpanded] = useState("articlePanel");

  const handleExpansionChange = (panel: string) => (
    event: any,
    newExpanded: boolean
  ) => {
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

  return (
    <Grid
      container
      spacing={5}
      alignItems="flex-start"
      justify="flex-start"
      direction="row"
    >
      <Grid item md={7} xs={12}>
        <Typography variant="h5" className="Courier-Typography">
          About me
        </Typography>
        <Paper className="Paper" style={{ minHeight: 370 }}>
          <Typography variant="h6">Career</Typography>
          <Typography variant="body1">
            I am a software developer/technical lead/cloud architect who has been designing
            and building software solutions professionally for over twenty
            years. I worked thirteen of those years as a freelance software
            developer specialising in building enterprise web applications for
            various clients in many different industries. I currently work for a company called Providor which is part of the <a href="https://www.sureservegroup.co.uk/" target="_blank" rel="noopener noreferrer">Sureserve Group</a> designing and building software solutions in the energy industry.
            <br />
            <br />
            I completed a <a href='https://www.open.ac.uk/courses/combined-studies/degrees/open-degree-qd'>BSc (Honours) degree with The Open University in 2021</a> and
            <br />
            I am now studying with Edinburgh Napier University for a <a href='https://www.napier.ac.uk/courses/msc-advanced-security-and-digital-forensics-postgraduate-fulltime'>MSc in Advanced Security and Digtial Forensics</a>
            <br />
            <br />
          </Typography>
          
          <IconButton style={{ backgroundColor: "transparent" }}>
            <Tooltip title="AWS Certified Cloud Practitioner">
              <img
                src={AwsCpIcon}
                className="Qualification-Icon"
                alt="AWS Certified Cloud Practitioner"
              />
            </Tooltip>
          </IconButton><br />
          <IconButton style={{ backgroundColor: "transparent" }}>
            <Tooltip title="Google Certified Associate Cloud Engineer">
              <img
                src={gcpAceIcon}
                className="Qualification-Icon"
                alt="Google Certified Associate Cloud Engineer"
              />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <Tooltip title="TOGAF 9.2 Certified">
              <img
                src={TogafIcon}
                className="Qualification-Icon"
                alt="TOGAF 9.2 Certified"
              />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <Tooltip title="Azure Developer Associate">
              <img
                src={AzDevIcon}
                className="Qualification-Icon"
                alt="Azure Developer Associate"
              />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <Tooltip title="Azure Fundamentals">
              <img
                src={AzFundIcon}
                className="Qualification-Icon"
                alt="Azure Fundamentals"
              />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <Tooltip title="MCSD App Builder">
              <img
                src={McsdIcon}
                className="Qualification-Icon"
                alt="MCSD App Builder"
              />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <Tooltip title="MCSA Web Applications">
              <img
                src={McsaIcon}
                className="Qualification-Icon"
                alt="MCSA Web Applications"
              />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <Tooltip title="CompTIA Security+">
              <img
                src={securityPlusIcon}
                className="Qualification-Icon"
                alt="CompTIA Security+"
              />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <Tooltip title="CompTIA Network+">
              <img
                src={networkPlusIcon}
                className="Qualification-Icon"
                alt="CompTIA Network+"
              />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <Tooltip title="Foundation Certificate in Systems Development">
              <img
                src={BcsIcon}
                className="Qualification-Icon"
                alt="Foundation Certificate in Systems Development"
              />
            </Tooltip>
          </IconButton>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <Tooltip title="Introduction to Cyber Security">
              <img
                src={IntroCyberIcon}
                className="Qualification-Icon"
                alt="Introduction to Cyber Security"
              />
            </Tooltip>
          </IconButton>
          <br />
          <br />
          <Divider />
          <br />
          <br />
          <Typography variant="h6">Flying</Typography>
          <Typography variant="body1">
            I enjoy flying in my free time and I have recently gained my Private Pilots Licence (PPL A). I have about 95 hours logged so far and will look to be gaining more experience and ratings.
          </Typography>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <img src={CaaIcon} className="Qualification-Icon" alt="CAA" />
          </IconButton>
          <br />
          <br />
          <Link to={"/flying"}>
            <Typography variant="body1">
              If your interested in following my progress in aviation then check
              out the flying section.
            </Typography>
          </Link>
          <br />
          <br />
          <Divider />
          <br />
          <br />
          <Typography variant="h6">Diving</Typography>
          <Typography variant="body1">
            Another hobby is scuba diving. I am currently qualified as an <a href="https://www.padi.com/courses/master-scuba-diver" target="_blank" rel="noopener noreferrer">PADI Master Scuba Diver</a>.
            <br />
            <br />
            <Link to={"/diving"}>
              <Typography variant="body1">
                Check out the diving section to follow my diving adventures.
              </Typography>
            </Link>
          </Typography>
          <IconButton style={{ backgroundColor: "transparent" }}>
            <img src={PadiOwdIcon} className="Qualification-Icon" alt="PADI" />
          </IconButton>
        </Paper>
        <Paper className="Paper" style={{ minHeight: 370 }}>
          <Typography variant="h5" className="Courier-Typography">
            Strava
          </Typography>
          <br />
          <Grid
            container
            spacing={5}
            alignItems="flex-start"
            justify="flex-start"
            direction="row"
          >
            <Grid item md={6} xs={12}>
              <iframe title='stravaActivities' height='454' src='https://www.strava.com/athletes/2209153/latest-rides/ec6698b825db2503139dd78e4adafc60c391ab5b'></iframe>
            </Grid>
            <Grid item md={6} xs={12}>
              <iframe title='stravaActivity' height='160' src='https://www.strava.com/athletes/2209153/activity-summary/ec6698b825db2503139dd78e4adafc60c391ab5b'></iframe> 
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item md={5} xs={12}>
        <Grid
          container
          spacing={5}
          alignItems="flex-start"
          justify="flex-start"
          direction="column"
        >
          <Grid item md={12} xs={12}>
            <Typography
              variant="h5"
              className="Courier-Typography Section-Header"
            >
              Latest Article
            </Typography>
            <Link to={"/articles"} className="Section-Link">
              <Typography variant="body1">View All</Typography>
            </Link>
            <ExpansionPanel
              className="Expansion Section-Body"
              expanded={articleExpanded === "articlePanel"}
              onChange={handleExpansionChange("articlePanel")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <img
                  src={DevIcon}
                  className="Header-Icon"
                  alt="Docker"
                />
                <Typography variant="body2" style={{ lineHeight: 2 }}>
                Testing in .NET 6 with WebApplicationFactory (including Minimal APIs)
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body1">
                This article aims to discuss the benefits of integration testing in web applications and shows how the WebApplicationFactory class helps with this. At the end I also demonstrate how to use WebApplicationFactory to test the new .NET 6 minimal APIs. 
                  <br />
                  <br />
                  <a href="https://lee-jdale.medium.com/testing-in-net-with-webapplicationfactory-including-minimal-apis-ddcb4ed0aef5">
                    <Typography variant="body1">
                      Read the whole article
                    </Typography>
                  </a>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography variant="h5" className="Courier-Typography">
              Latest Project
            </Typography>
            <ExpansionPanel
              className="Expansion"
              expanded={projectExpanded === "projectPanel"}
              onChange={handleExpansionChange("projectPanel")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Grid
                  container
                  spacing={3}
                  alignItems="flex-start"
                  justify="flex-start"
                >
                  <Grid item md={4}>
                    <img
                      src={ProvidorIcon}
                      className="Header-Icon"
                      alt="Providor"
                    />
                  </Grid>
                  <Grid item md={2}>
                    <img
                      src={DockerIcon}
                      className="Header-Icon"
                      alt="Docker"
                    />
                  </Grid>
                  <Hidden xsDown>
                    <Grid item md={2}>
                      <img
                        src={ReactIcon}
                        className="Qualification-Icon"
                        alt="React"
                      />
                    </Grid>
                    <Grid item md={2}>
                      <img
                        src={NetCoreIcon}
                        className="Qualification-Icon"
                        alt=".NET Core"
                      />
                    </Grid>
                    <Grid item md={1}>
                      <img
                        src={AzureIcon}
                        className="Qualification-Icon"
                        alt="Azure"
                      />
                    </Grid>
                  </Hidden>
                </Grid>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body1">
                  <Typography variant="caption">
                    July 2020 - Present
                  </Typography>
                  <br />
                  In my role as lead software developer at <a href="https://www.providor.co.uk/" target="_blank" rel="noopener noreferrer">Providor</a> I am currently developing a new in house smart meter data flow system. 
                  The system is based on a microservice architecture using .NET Core, React, Docker Swarm, Azure DevOps among other technologies.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item md={12} xs={12}>
            <Typography variant="h5" className="Courier-Typography">
              Games
            </Typography>
            <ExpansionPanel
              className="Expansion"
              expanded={gamesExpanded === "gamesPanel"}
              onChange={handleExpansionChange("gamesPanel")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Link to={"/spaceblaster"}>
                  <img src={SbIcon} className="Game-Icon" alt="Space blaster" />
                  <img src={GamingIcon} className="Game-Icon" alt="Gaming" />
                  <PlayArrow fontSize="large" />
                </Link>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body1">
                  An open source Shoot em up game created with TypeScript. Game
                  is still a work in progress but you can still see what I've
                  done so far!
                  <br />
                  <br />
                  View the source at{" "}
                  <a href="https://github.com/leedale1981/SpaceBlaster" target="_blank" rel="noopener noreferrer">
                    https://github.com/leedale1981/SpaceBlaster
                  </a>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomePage;
