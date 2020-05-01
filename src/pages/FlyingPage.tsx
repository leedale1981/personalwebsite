import React, { useState } from 'react';
import { Grid, Typography, Paper, IconButton, ExpansionPanel, ExpansionPanelSummary, Hidden, ExpansionPanelDetails, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
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
                            <Typography variant="caption">29th December 2019</Typography><br />
                            Today was my first time solo flying in the circuit at North Weald Airfield! Me and my instructor started the day doing a few circuits and as the weather was good and I was flying good circuits, we did a quick stop and my instructor jumped out and I was left in the cockpit on my own for the first time ever. 
                            I felt more switched on being on my own and somehow everything seemed clearer for the first time. I made my way to the holding point for runway 20. There was a couple of aircraft in front of me which made me a bit nervous but I made my radio calls and waited for a clear runway to make my way to the ORP.
                            After more waiting for landing aircraft I finally lined up and took off. My circuit flying was the best I have ever done as I felt more in control and responsible. The aircraft felt light and ascended to 1200ft in no time. I made one circuit of the airfield and landed back safely on runway 20.
                            Looking forward to more hours in the solo seat.
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
                                            32
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            0.25
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