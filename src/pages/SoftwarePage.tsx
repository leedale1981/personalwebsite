import React, { useState } from "react";
import {
  Grid,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Tooltip,
  Hidden,
} from "@material-ui/core";
import { PlayArrow, ExpandMore } from "@material-ui/icons";
import DhIcon from "../images/dunnhumby.jpg";
import NetCoreIcon from "../images/.netcore.png";
import ProvidorIcon from "../images/providor.jpg";
import GcpIcon from "../images/gcp.png";
import KubeIcon from "../images/kubernetes.png";
import OfqualIcon from "../images/ofqual.png";
import MedalIcon from "../images/medal.png";
import ReactIcon from "../images/react.png";
import AzureIcon from "../images/azure.png";
import TsIcon from "../images/typescript.png";
import NodeIcon from "../images/node.png";
import GamingIcon from "../images/gaming.png";
import SbIcon from "../images/spaceblaster.jpg";
import FpIcon from "../images/factorydesignpattern.png";
import AzIcon from "../images/azureicon.png";
import AlgoIcon from "../images/algorithm.png";
import McsaIcon from "../images/mcsa.png";
import McsdIcon from "../images/mcsd.png";
import AzFundIcon from "../images/azure-fundamentals.png";
import AzDevIcon from "../images/azure-developer-associate-600x600.png";
import BcsIcon from "../images/bcs.png";
import IntroCyberIcon from "../images/introcyber.png";
import ltIcon from "../images/learningtree-cert.png";
import wordIcon from "../images/word.png";
import QuantumImage from "../images/quantum.png";
import TogafIcon from "../images/togaf.png";
import Docker from "../images/docker2.png";
import gcpAceIcon from "../images/gcp-ace.png";
import networkPlusIcon from "../images/networkplus.png";
import securityPlusIcon from "../images/securityplus.png";
import DockerIcon from "../images/docker.png";
import DevIcon from "../images/dev.png";
import { Link } from "react-router-dom";

const SoftwarePage: React.FC = () => {
  const [providorExpanded, setProvidorExpanded] = useState("providorPanel");
  const [dunnhumbyExpanded, setDunnhumbyExpanded] = useState("");
  const [ofqualExpanded, setOfqualExpanded] = useState("");
  const [certExpanded, setCertExpanded] = useState("certPanel");
  const [gamesExpanded, setGamesExpanded] = useState("gamesPanel");
  const [articleExpanded, setArticleExpanded] = useState("articlePanel");

  const handleExpansionChange = (panel: string) => (
    event: any,
    newExpanded: boolean
  ) => {
    switch (panel) {
      case "providorPanel":
        setProvidorExpanded(newExpanded ? panel : "");
        break;
      case "gamesPanel":
        setGamesExpanded(newExpanded ? panel : "");
        break;
      case "dunnhumbyPanel":
        setDunnhumbyExpanded(newExpanded ? panel : "");
        break;
      case "ofqualPanel":
        setOfqualExpanded(newExpanded ? panel : "");
        break;
      case "certPanel":
        setCertExpanded(newExpanded ? panel : "");
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
                <Typography variant="h6" style={{ lineHeight: 2 }}>
                Web Application Basics in Go
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body1">
                Go has some great support for easily building web applications utilising the supplied http package. There are however some concepts to grasp before fully understanding how Go handles web requests which you should probably know before creating your own applications.
                  <br />
                  <br />
                  <Link to={"/tech/articles/web-application-basics-in-go"}>
                    <Typography variant="body1">
                      Read the whole article
                    </Typography>
                  </Link>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

        <Typography variant="h5" className="Courier-Typography">
          Certifications
        </Typography>
        <ExpansionPanel
          className="Expansion"
          expanded={certExpanded === "certPanel"}
          onChange={handleExpansionChange("certPanel")}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMore />}>
            <img src={MedalIcon} className="Header-Icon" alt="Certifications" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid
              container
              spacing={3}
              alignItems="flex-start"
              justify="flex-start"
            >
              <Grid item md={4} sm={6}>
                <Tooltip title="Google Certified Associate Cloud Engineer">
                  <img
                    src={gcpAceIcon}
                    className="Qualification-Icon-Large"
                    alt="Google Certified Associate Cloud Engineer"
                  />
                </Tooltip>
              </Grid>
              <Grid item md={4} sm={6}>
                <Tooltip title="TOGAF 9.2 Certified">
                  <img
                    src={TogafIcon}
                    className="Qualification-Icon-Large"
                    alt="TOGAF 9.2 Certified"
                  />
                </Tooltip>
              </Grid>
              <Grid item md={4} sm={6}>
                <Tooltip title="Azure Developer Associate">
                  <img
                    src={AzDevIcon}
                    className="Qualification-Icon-Large"
                    alt="Azure Developer Associate"
                  />
                </Tooltip>
              </Grid>
              <Grid item md={4} sm={6}>
                <Tooltip title="Azure Fundamentals">
                  <img
                    src={AzFundIcon}
                    className="Qualification-Icon-Large"
                    alt="Azure Fundamentals"
                  />
                </Tooltip>
              </Grid>
              <Grid item md={4} sm={6}>
                <Tooltip title="MCSD Web App Builder">
                  <img
                    src={McsdIcon}
                    className="Qualification-Icon-Large"
                    alt="MCSD App Builder"
                  />
                </Tooltip>
              </Grid>
              <Grid item md={4} sm={6}>
                <Tooltip title="MCSA Web Applications">
                  <img
                    src={McsaIcon}
                    className="Qualification-Icon-Large"
                    alt="MCSA Web Applications"
                  />
                </Tooltip>
              </Grid>
              <Grid item md={4} sm={6}>
                <Tooltip title="CompTIA Security+">
                  <img
                    src={securityPlusIcon}
                    className="Qualification-Icon-Large"
                    alt="CompTIA Security+"
                  />
                </Tooltip>
              </Grid>
              <Grid item md={4} sm={6}>
                <Tooltip title="CompTIA Network+">
                  <img
                    src={networkPlusIcon}
                    className="Qualification-Icon-Large"
                    alt="CompTIA Network+"
                  />
                </Tooltip>
              </Grid>
              <Grid item md={4} sm={6}>
                <Tooltip title="Foundation Certificate in Systems Development">
                  <img
                    src={BcsIcon}
                    className="Qualification-Icon-Large"
                    alt="Foundation Certificate in Systems Development"
                  />
                </Tooltip>
              </Grid>
              <Grid item md={4} sm={6}>
                <Tooltip title="Introduction to Cyber Security">
                  <img
                    src={IntroCyberIcon}
                    className="Qualification-Icon-Large"
                    alt="Introduction to Cyber Security"
                  />
                </Tooltip>
              </Grid>
              <Grid item md={4} sm={6}>
                <Tooltip title="Visual Basic 6 Enterprise Development Certified Professional">
                  <img
                    src={ltIcon}
                    className="Qualification-Icon-Large"
                    alt="Visual Basic 6 Enterprise Development Certified Professional"
                  />
                </Tooltip>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
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
            <Typography variant="h5" className="Courier-Typography">
              Latest Project
            </Typography>

            <ExpansionPanel
              className="Expansion"
              expanded={providorExpanded === "providorPanel"}
              onChange={handleExpansionChange("providorPanel")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Grid
                  container
                  spacing={3}
                  alignItems="flex-start"
                  justify="flex-start"
                >
                  <Grid item md={3}>
                    <img src={ProvidorIcon} className="Header-Icon" alt="Providor" />
                  </Grid>
                  <Hidden xsDown>
                    <Grid item md={2}>
                      <img
                        src={DockerIcon}
                        className="Qualification-Icon"
                        alt="Docker"
                      />
                    </Grid>
                    <Grid item md={2}>
                      <img
                        src={ReactIcon}
                        className="Qualification-Icon"
                        alt="React"
                      />
                    </Grid>
                    <Grid item md={1}>
                      <img
                        src={NetCoreIcon}
                        className="Qualification-Icon"
                        alt=".NET Core"
                      />
                    </Grid>
                    <Grid item md={2}>
                      <img
                        src={AzureIcon}
                        className="Qualification-Icon"
                        alt="Azure"
                      />
                    </Grid>
                    <Grid item md={2}>
                      <img
                        src={TsIcon}
                        className="Qualification-Icon"
                        alt="Typescript"
                      />
                    </Grid>
                  </Hidden>
                </Grid>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body1">
                  <Typography variant="caption">July 2020 - Present</Typography>
                  <br />
                  In my role as lead software developer at <a href="https://www.providor.co.uk/" target="_blank" rel="noopener noreferrer">Providor</a> I am currentlydeveloping a new in house smart meter data flow system. 
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
                  <img src={SbIcon} className="Game-Icon" alt="SpaceBlaster" />
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
                  <a href="https://github.com/leedale1981/SpaceBlaster">
                    https://github.com/leedale1981/SpaceBlaster
                  </a>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item md={12} xs={12}>
            <a href="/cv/leedaleprofile.docx">
              <img src={wordIcon} className="Link-Icon" alt="CV" />
              <Typography variant="body1">Download CV</Typography>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SoftwarePage;
