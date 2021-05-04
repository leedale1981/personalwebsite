import React, { useState } from 'react';
import { Grid, Typography, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import FlyingIcon from '../images/flying.png';
import { Done } from '@material-ui/icons';
import Solo1 from '../images/solo1.jpg';
import Solo2 from '../images/solo2.jpg';

const FlyingPage: React.FC = () => {
    const [update4Expanded, setUpdate4Expanded] = useState("update4Panel");
    const [update3Expanded, setUpdate3Expanded] = useState("");
    const [update2Expanded, setUpdate2Expanded] = useState("");
    const [update1Expanded, setUpdate1Expanded] = useState("");

    const handleExpansionChange = (panel: string) => (event: any, newExpanded: boolean) => {
        switch (panel) {
          case "update4Panel":
            setUpdate4Expanded(newExpanded ? panel : "");
            break;
          case "update3Panel":
            setUpdate3Expanded(newExpanded ? panel : "");
            break;
          case "update2Panel":
            setUpdate2Expanded(newExpanded ? panel : "");
            break;
          case "update1Panel":
            setUpdate1Expanded(newExpanded ? panel : "");
            break;
        }
      };

    return (
        <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='row'>
            <Grid item md={7} xs={12}>
                <Typography variant='h5' className='Courier-Typography'>Updates</Typography>
                <ExpansionPanel className='Expansion' expanded={update4Expanded === 'update4Panel'} onChange={handleExpansionChange('update4Panel')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Grid container spacing={3} alignItems='flex-start' justify='flex-start'>
                        <Grid item xs={2}>
                            <img src={FlyingIcon} className="Header-Icon"  alt="Flying update"/>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant="h5">4th May 2021</Typography><br />
                        </Grid>
                    </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="body1">
                            This weekend I completed two solo navigation flights totalling two hours of solo time. I planned and executed a solo flight from North Weald to Tiptree via Billericay. 
                            Sunday presented me with small localized showers in the area so I tried my best to avoid them. I eventually had to turn back before Witham due to a wall of rain that I didn't fancy flying into.
                            Monday was more relaxed despite the winds gusting around 20 knots. The winds made for an interesting bumpy route back to the airfield and for landing but no dramas.
                            All in all a good weekend of flying. I will be doing one more solo nav flight to get my solo time to around 6 hours, then it will be onto land aways.
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel className='Expansion' expanded={update3Expanded === 'update3Panel'} onChange={handleExpansionChange('update3Panel')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Grid container spacing={3} alignItems='flex-start' justify='flex-start'>
                        <Grid item xs={2}>
                            <img src={FlyingIcon} className="Header-Icon"  alt="Flying update"/>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant="h5">22nd April 2021</Typography><br />
                        </Grid>
                    </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="body1">
                            We are finally allowed back to flight training after the COVID-19 lockdown here in the UK. I had a great couple of flights with my instructor over the weekend. 
                            We needed to refresh a few things and get get rid of the 4 months of rust build up. A local flight to the east from North Weald with a couple of circuits thrown in. 
                            Still alot to brush up on but I felt good and hopefully be able to get out for a solo nav flight soon.
                            <br /><br />
                            <div className="Article-Large">
                            <iframe title="Flying" width="100%" height="315px" src="https://www.youtube.com/embed/zr3EKZRzXyM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel className='Expansion' expanded={update2Expanded === 'update2Panel'} onChange={handleExpansionChange('update2Panel')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Grid container spacing={3} alignItems='flex-start' justify='flex-start'>
                        <Grid item xs={2}>
                            <img src={FlyingIcon} className="Header-Icon"  alt="Flying update"/>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant="h5">29th December 2020</Typography><br />
                        </Grid>
                    </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="body1">
                            A year to the day since my last update. I've made great progress this year despite delays due to a combination of bad weather and the COVID pandemic. I managed to complete three hours solo in the circuit around summertime, and have since been doing navigation flights. I was just about the go off to do a solo navigation when the tier 4 restrictions came in. I'm now waiting for the green light to get flying again.
                            One upside of more time indoors was that I managed to complete the online navigation exam, which means all ground exams out the way. 
                            Hopefully once the restrictions are lifted I can get back to working towards the cross country solo.
                            In the meantime, heres a couple of videos of solo flights:
                            <br /><br />
                            <div className="Article-Large">
                            <iframe title="Flying" width="100%" height="315px" src="https://www.youtube.com/embed/137PsMFD0Wg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            <iframe title="Flying" width="100%" height="315px" src="https://www.youtube.com/embed/vQZsiQnw6Hg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className='Expansion' expanded={update1Expanded === 'update1Panel'} onChange={handleExpansionChange('update1Panel')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Grid container spacing={3} alignItems='flex-start' justify='flex-start'>
                        <Grid item xs={2}>
                            <img src={FlyingIcon} className="Header-Icon"  alt="Flying update"/>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant="h5">29th December 2019</Typography><br />
                        </Grid>
                    </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="body1">
                            <Typography variant="caption">29th December 2019</Typography><br />
                            Today was my first time flying solo in the circuit! 
                            <br /><br />
                            <div className="Article-Large">
                                <img src={Solo1} alt="Solo flying in G-BNKV" />
                                <img src={Solo2} alt="Solo flying in G-BNKV" />
                            </div>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
            <Grid item md={5} xs={12}>
                <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='column'>
                    <Grid item md={12} xs={12}>
                        <Typography variant='h5' className='Courier-Typography'>Status</Typography>
                        <TableContainer component={Paper} className="Paper Section-Body">
                            <Table size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Total Flying Hours</TableCell>
                                    <TableCell>Solo Flying Hours</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            54
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            5
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Typography variant='h5' className='Courier-Typography'>PPL(A) Exams</Typography>
                        <TableContainer component={Paper} className="Paper Section-Body">
                            <Table size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Exam</TableCell>
                                    <TableCell>Completed</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Air Law
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Done />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Meteorology
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Done />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Aircraft General Knowledge
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Done />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Navigation
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Done />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Human Performance
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Done />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Flight Performance &amp; Planning
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Done />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Operational Procedures
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Done />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            Principles of Flight
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Done />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={12} xs={12}>
                <Typography variant='h5' className='Courier-Typography'>Videos</Typography>
                <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='row'>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/zr3EKZRzXyM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/137PsMFD0Wg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/Nl-KGapB6GM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/WASz-0Tb51c" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/c8WISS9nvzQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/PIVJkKprRkM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/c9Ae9ISOvSg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default FlyingPage;