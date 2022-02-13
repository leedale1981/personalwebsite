import * as React from 'react';
import { Grid, Typography, Paper, ListItem, List, ListItemAvatar, ListItemText, Chip } from '@material-ui/core';
import FpIcon from "../images/factorydesignpattern.png";
import BcIcon from "../images/blockchain.png";
import AlIcon from "../images/alexa.png";
import AzIcon from "../images/azureicon.png";
import AlgoIcon from "../images/algorithm.png";
import QuantumImage from "../images/quantum.png";
import CloudIcon from "../images/cloud.png";
import Docker from "../images/docker2.png";
import Maintanance from "../images/maintenance.png";
import DevIcon from "../images/dev.png";
import { Link } from 'react-router-dom';

const ArticleListPage: React.FC = () => {

    return (
        <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='row'>
            <Grid item md={7} xs={12}>
                <Typography variant='h5' className='Courier-Typography'>All Articles</Typography>
                <Paper className="Paper">
                <List>
                    <a href="https://lee-jdale.medium.com/testing-in-net-with-webapplicationfactory-including-minimal-apis-ddcb4ed0aef5">
                        <ListItem divider>
                            <ListItemAvatar><img src={DevIcon} className="Header-Icon"  alt="Testing in .NET 6 with WebApplicationFactory (including Minimal APIs)"/></ListItemAvatar>
                            <ListItemText><Typography variant="body1" style={{lineHeight: 1.5}}>Testing in .NET 6 with WebApplicationFactory (including Minimal APIs)</Typography></ListItemText>
                        </ListItem>
                    </a>
                    <Link to={"/tech/articles/dotnet-6-minimal-apis"}>
                        <ListItem divider>
                            <ListItemAvatar><img src={DevIcon} className="Header-Icon"  alt=".NET 6 Minimal APIs vs Node JS"/></ListItemAvatar>
                            <ListItemText><Typography variant="body1" style={{lineHeight: 1.5}}>.NET 6 Minimal APIs vs Node JS</Typography></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to={"/tech/articles/web-application-basics-in-go"}>
                        <ListItem divider>
                            <ListItemAvatar><img src={DevIcon} className="Header-Icon"  alt="Web Application Basics in Go"/></ListItemAvatar>
                            <ListItemText><Typography variant="body1" style={{lineHeight: 1.5}}>Web Application Basics in Go</Typography></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to={"/tech/articles/creating-dotnet-new-templates"}>
                        <ListItem divider>
                            <ListItemAvatar><img src={DevIcon} className="Header-Icon"  alt="Creating Opinionated .NET Templates for your Organisation"/></ListItemAvatar>
                            <ListItemText><Typography variant="body1" style={{lineHeight: 1.5}}>Creating Opinionated .NET Templates for your Organisation</Typography></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to={"/tech/articles/software-evolution"}>
                        <ListItem divider>
                            <ListItemAvatar><img src={Maintanance} className="Header-Icon"  alt="Software Evolution – Lehman’s Laws"/></ListItemAvatar>
                            <ListItemText><Typography variant="body1" style={{lineHeight: 1.5}}>Software Evolution – Lehman’s Laws</Typography></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to={"/tech/articles/docker-bind-mount-network"}>
                        <ListItem divider>
                            <ListItemAvatar><img src={Docker} className="Header-Icon"  alt="How to bind to a Windows Share using CIFS in Docker"/></ListItemAvatar>
                            <ListItemText><Typography variant="body1" style={{lineHeight: 1.5}}>How to bind to a Windows Share using CIFS in Docker</Typography></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to={"/tech/articles/kubernetes-gke"}>
                        <ListItem divider>
                            <ListItemAvatar><img src={CloudIcon} className="Header-Icon"  alt="How to deploy a Web App and Load Balancer to Kubernetes on GKE"/></ListItemAvatar>
                            <ListItemText><Typography variant="body1" style={{lineHeight: 1.5}}>How to deploy a Web App and Load Balancer to Kubernetes on GKE</Typography></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to={"/tech/articles/quantum-computing"}>
                        <ListItem divider>
                            <ListItemAvatar><img src={QuantumImage} className="Header-Icon"  alt="Quantum Computing: What is the Schrodinger Equation anyway?"/></ListItemAvatar>
                            <ListItemText><Typography variant="body1" style={{lineHeight: 1.5}}>Quantum Computing: What is the Schrodinger Equation anyway?</Typography></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to={"/tech/articles/bloom-filters"}>
                        <ListItem divider>
                            <ListItemAvatar><img src={AlgoIcon} className="Header-Icon"  alt="Bloom Filter Algorithm"/></ListItemAvatar>
                            <ListItemText><Typography variant="body1" style={{lineHeight: 3}}>What is a Bloom Filter?</Typography></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to={"/tech/articles/microsoft-azure-exams"}>
                        <ListItem divider>
                            <ListItemAvatar><img src={AzIcon} className="Header-Icon"  alt="Microsoft Azure Exams"/></ListItemAvatar>
                            <ListItemText><Typography variant="body1" style={{lineHeight: 1.5}}>How I studied and passed two Microsoft Azure Exams in a month</Typography></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to={"/tech/articles/factory-method-design-pattern-csharp"}>
                        <ListItem divider>
                            <ListItemAvatar><img src={FpIcon} className="Header-Icon"  alt="Factory Pattern"/></ListItemAvatar>
                            <ListItemText><Typography variant="body1" style={{lineHeight: 3}}>How to use the Factory Design Pattern with C#.</Typography></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to={"/tech/articles/blockchain-what-is-it"}>
                        <ListItem divider>
                            <ListItemAvatar><img src={BcIcon} className="Header-Icon"  alt="Blockchain"/></ListItemAvatar>
                            <ListItemText><Typography variant="body1" style={{lineHeight: 2.3}}>The blockchain, what is it?</Typography></ListItemText>
                        </ListItem>
                    </Link>
                    <Link to={"/tech/articles/my-first-alexa-skill"}>
                        <ListItem divider>
                            <ListItemAvatar><img src={AlIcon} className="Header-Icon"  alt="Amazon Alexa"/></ListItemAvatar>
                            <ListItemText><Typography variant="body1" style={{lineHeight: 2.3}}>My first Alexa Skill.</Typography></ListItemText>
                        </ListItem>
                    </Link>
                    <ListItem divider>
                        <a href="https://leedale.wordpress.com/page/1/" target="_blank" rel="noopener noreferrer">
                            <ListItemText><Typography variant="body1" style={{lineHeight: 2.3}}>View article archive on Wordpress.</Typography></ListItemText>
                        </a>
                    </ListItem>
                </List>
                </Paper>
            </Grid>
            <Grid item md={5} xs={12}>
                <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='column'>
                    <Grid item md={12} xs={12}>
                        <Typography variant='h5' className='Courier-Typography'>Categories</Typography>
                        <Paper className="Paper">
                            <div className="Article-Tags">
                                <Chip label="tech" /><Chip label="c#" /><Chip label="programming" /><Chip label="software development" /><Chip label=".net core" />
                                <Chip label="blockchain" /><Chip label="cryptocurrency" />
                                <Chip label="typescript" /><Chip label="node" />
                                <Chip label="sofware development" />
                                <Chip label="alexa" />
                                <Chip label="software engineering" />
                                <Chip label="docker" />
                                <Chip label="containers" />
                                <Chip label="sre" />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ArticleListPage;