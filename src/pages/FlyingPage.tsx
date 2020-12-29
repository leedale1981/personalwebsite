import React, { useState } from 'react';
import { Grid, Typography, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import FlyingIcon from '../images/flying.png';
import { Done } from '@material-ui/icons';
import Solo1 from '../images/solo1.jpg';
import Solo2 from '../images/solo2.jpg';

const FlyingPage: React.FC = () => {
    const [update1Expanded, setUpdate1Expanded] = useState("update1Panel");
    const [statusExpanded, setStatusExpanded] = useState("statusPanel");

    const handleExpansionChange = (panel: string) => (event: any, newExpanded: boolean) => {
        switch (panel) {
          case "update1Panel":
            setUpdate1Expanded(update1Expanded ? panel : "");
            break;
        case "statusPanel":
            setStatusExpanded(statusExpanded ? panel : "");
            break;
        }
      };

    return (
        <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='row'>
            <Grid item md={7} xs={12}>
                <Typography variant='h5' className='Courier-Typography'>Updates</Typography>
                <ExpansionPanel className='Expansion' expanded={update1Expanded === 'update1Panel'} onChange={handleExpansionChange('update1Panel')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Grid container spacing={3} alignItems='flex-start' justify='flex-start'>
                        <Grid item md={3}>
                            <img src={FlyingIcon} className="Header-Icon"  alt="Flying update"/>
                        </Grid>
                    </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="body1">
                            <Typography variant="caption">29th December 2029</Typography><br />
                            A year to the day since my last update. I've made great progress despite delays due to a combination of bad weather and the COVID pandemic. I managed to complete three hours solo in the circuit around summertime, and have been doing navigation flights. I was just about the go off to do a solo navigation when the tier 4 restrictions came in. I'm now waiting for the green light to get flying again.
                            I managed to complete the online navigation exam as well which means all ground exams out the way. 
                            Heres a couple of videos of solo flights:
                            <br /><br />
                            <div className="Article-Large">
                            <iframe width="100%" height="250px" src="https://youtu.be/137PsMFD0Wg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                        </Typography>
                    </ExpansionPanelDetails>
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
                                            50
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            3.15
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
                    <Grid item md={12} xs={12}>
                        <Typography variant='h5' className='Courier-Typography'>Videos</Typography>
                        <Paper className="Paper Section-Body">
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/Nl-KGapB6GM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/WASz-0Tb51c" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/c8WISS9nvzQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/PIVJkKprRkM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            <iframe width="100%" height="250px" src="https://www.youtube.com/embed/c9Ae9ISOvSg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default FlyingPage;