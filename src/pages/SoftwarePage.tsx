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
import { Link } from "react-router-dom";

const SoftwarePage: React.FC = () => {
  const [providorExpanded, setProvidorExpanded] = useState("providorPanel");
  const [dunnhumbyExpanded, setDunnhumbyExpanded] = useState("");
  const [ofqualExpanded, setOfqualExpanded] = useState("");
  const [certExpanded, setCertExpanded] = useState("certPanel");
  const [gamesExpanded, setGamesExpanded] = useState("gamesPanel");
  const [blockchainExpanded, setBlockchainExpanded] = useState("");
  const [factoryPatternExpanded, setFactoryPatternExpanded] = useState("");
  const [quantumExpanded, setQuantumExpanded] = useState("");
  const [gkeExpanded, setGkeExpanded] = useState("gkePanel");

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
      case "blockchainPanel":
        setBlockchainExpanded(newExpanded ? panel : "");
        break;
      case "factoryPatternPanel":
        setFactoryPatternExpanded(newExpanded ? panel : "");
        break;
      case "quantumPanel":
        setQuantumExpanded(newExpanded ? panel : "");
        break;
      case "gkePanel":
        setGkeExpanded(newExpanded ? panel : "");
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
              Articles
            </Typography>
            <Link to={"/articles"} className="Section-Link">
              <Typography variant="body1">View All</Typography>
            </Link>
            <ExpansionPanel
              className="Expansion Section-Body"
              expanded={gkeExpanded === "gkePanel"}
              onChange={handleExpansionChange("gkePanel")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <img
                  src={Docker}
                  className="Header-Icon"
                  alt="Docker"
                />
                <Typography variant="body2" style={{ lineHeight: 2 }}>
                How to bind to a Windows Share using CIFS in Docker
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body1">
                  Docker is great for building stateless, ephemeral services but sometimes these services need to access data outside the container. This article shows you how to bind a network share to a Docker container.
                  <br />
                  <br />
                  <Link to={"/tech/articles/docker-bind-mount-network"}>
                    <Typography variant="body1">
                      Read the whole article
                    </Typography>
                  </Link>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              className="Expansion Section-Body"
              expanded={quantumExpanded === "quantumPanel"}
              onChange={handleExpansionChange("quantumPanel")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <img
                  src={QuantumImage}
                  className="Header-Icon"
                  alt="QuantumComputing"
                />
                <Typography variant="body2" style={{ lineHeight: 2 }}>
                  Quantum Computing: What is the Schrodinger Equation anyway?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body1">
                  In this article I give a very brief introduction to the
                  Schrodinger Equation and how we can use quantum mechanics in
                  computing to achieve things classical computation methods
                  cannot.
                  <br />
                  <br />
                  <Link to={"/tech/articles/quantum-computing"}>
                    <Typography variant="body1">
                      Read the whole article
                    </Typography>
                  </Link>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              className="Expansion Section-Body"
              expanded={factoryPatternExpanded === "factoryPatternPanel"}
              onChange={handleExpansionChange("factoryPatternPanel")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <img
                  src={AzIcon}
                  className="Header-Icon"
                  alt="Factory Pattern"
                />
                <Typography variant="body2" style={{ lineHeight: 2 }}>
                  How I studied and passed two Microsoft Azure Exams in a month
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body1">
                  This article outlines what resources and approach I took to
                  passing Microsoft exams AZ-900 and AZ-203
                  <br />
                  <br />
                  <Link to={"/tech/articles/microsoft-azure-exams"}>
                    <Typography variant="body1">
                      Read the whole article
                    </Typography>
                  </Link>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              className="Expansion"
              expanded={factoryPatternExpanded === "factoryPatternPanel"}
              onChange={handleExpansionChange("factoryPatternPanel")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <img
                  src={FpIcon}
                  className="Header-Icon"
                  alt="Factory Pattern"
                />
                <Typography variant="body2" style={{ lineHeight: 3 }}>
                  How to use the Factory Design Pattern with C#.
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body1">
                  The factory method is a design pattern that can be used in
                  your .NET projects to support dependency injection and
                  therefore testable classes while also keeping your components
                  decoupled from external dependencies.
                  <br />
                  <br />
                  <Link
                    to={"/tech/articles/factory-method-design-pattern-csharp"}
                  >
                    <Typography variant="body1">
                      Read the whole article
                    </Typography>
                  </Link>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel
              className="Expansion"
              expanded={blockchainExpanded === "blockchainPanel"}
              onChange={handleExpansionChange("blockchainPanel")}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <img
                  src={AlgoIcon}
                  className="Header-Icon"
                  alt="Bloom filter"
                />
                <Typography variant="body2" style={{ lineHeight: 2.3 }}>
                  What is a Bloom Filter?
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography variant="body1">
                  This article is about a data structure called a{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Bloom_filter"
                    target="_blank"
                  >
                    Bloom Filter
                  </a>
                  . I was asked to write this as part of the M269 module for my
                  Open University degree course in 2018. I thought I would share
                  this here as it has some applications in network routing and
                  may be interesting to some.
                  <br />
                  <br />
                  <Link to={"/tech/articles/bloom-filters"}>
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
              Recent Projects
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
                  I am a software developer/technical lead/cloud architect who has been designing
                and building software solutions professionally for the last twenty
                years. I have worked thirteen of those years as a freelance
                developer specialising in building enterprise web applications for
                various clients in many different industries. I currently work for a company called Providor which is part of the Sureserve Group designing and building software solutions in the energy industry.
                  system.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>


          <ExpansionPanel
            className="Expansion"
            expanded={ofqualExpanded === "ofqualPanel"}
            onChange={handleExpansionChange("ofqualPanel")}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              <Grid
                container
                spacing={3}
                alignItems="flex-start"
                justify="flex-start"
              >
                <Grid item md={3}>
                  <img src={OfqualIcon} className="Header-Icon" alt="Ofqual" />
                </Grid>
                <Hidden xsDown>
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
                  <Grid item md={1}>
                    <img
                      src={NodeIcon}
                      className="Qualification-Icon"
                      alt="Node"
                    />
                  </Grid>
                </Hidden>
              </Grid>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="body1">
                <Typography variant="caption">June 2018 - April 2020</Typography>
                <br />
                My role at Ofqual was to design and build from scratch a fully
                working single page web application that would allow Ofqual to
                manage awarding organisations across England and Wales and to
                handle their accreditation process. React was choosen for the
                front end application calling into and Node backend API. The
                application was hosted on the Micrtosoft Azure Cloud and services
                like CosmosDB, Azure AD and Azure Search were utilised within the
                application. The application was sucessfully delivered into
                production. I went back to Ofqual a while later to migrate the
                backend API to .NET core and build extra functionality into the
                system.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            className="Expansion"
            expanded={dunnhumbyExpanded === "dunnhumbyPanel"}
            onChange={handleExpansionChange("dunnhumbyPanel")}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
              <Grid
                container
                spacing={3}
                alignItems="flex-start"
                justify="flex-start"
              >
                <Grid item md={5}>
                  <img src={DhIcon} className="Header-Icon" alt="Dunnhumby" />
                </Grid>
                <Hidden xsDown>
                  <Grid item md={2}>
                    <img
                      src={NetCoreIcon}
                      className="Qualification-Icon"
                      alt=".Net Core"
                    />
                  </Grid>
                  <Grid item md={2}>
                    <img
                      src={GcpIcon}
                      className="Qualification-Icon"
                      alt="Google Cloud Platform"
                    />
                  </Grid>
                  <Grid item md={2}>
                    <img
                      src={KubeIcon}
                      className="Qualification-Icon"
                      alt="Kubernetes"
                    />
                  </Grid>
                </Hidden>
              </Grid>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography variant="body1">
                <Typography variant="caption">
                  July 2019 - November 2019
                </Typography>
                <br />
                This project was helping to rebuild from scratch, Dunnhumby's core
                data science platform with modern technologies such as .NET Core,
                Google Cloud Platform, Docker, Kubernetes and React. My role as a
                senior software engineer was to design and develop some middle
                tier and backend services utilising .NET Core. The services hooked
                into GCP PubSub messaging queues and a PostgresSQL database.
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
