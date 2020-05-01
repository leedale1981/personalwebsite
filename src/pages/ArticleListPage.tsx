import * as React from 'react';
import { Grid, Typography, Paper, IconButton, ListItem, List, ListItemAvatar, ListItemText, Chip } from '@material-ui/core';
import FpIcon from "../images/factorydesignpattern.png";
import BcIcon from "../images/blockchain.png";
import AlIcon from "../images/alexa.png";
import AzIcon from "../images/azureicon.png";
import OfficeIcon from "../images/office.png";
import { Link } from 'react-router-dom';

const ArticleListPage: React.FC = () => {

    return (
        <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='row'>
            <Grid item md={7} xs={12}>
                <Typography variant='h5' className='Courier-Typography'>All Articles</Typography>
                <Paper className="Paper">
                <List>
                    <Link to={"/tech/articles/microsoft-azure-exams"}>
                        <ListItem divider>
                            <ListItemAvatar><img src={AzIcon} className="Header-Icon"  alt="Microsoft Azure Exams"/></ListItemAvatar>
                            <ListItemText><Typography variant="body1" style={{lineHeight: 3}}>How I studied and passed two Microsoft Azure Exams in a month</Typography></ListItemText>
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
                        <a href="https://leedale.wordpress.com/page/1/" target="_blank">
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
                                <Chip label="typescript" /><Chip label="node" /><Chip label="sofware development" /><Chip label="alexa" />
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ArticleListPage;