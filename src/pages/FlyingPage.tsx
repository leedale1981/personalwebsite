import React, { useState } from 'react';
import { Grid, Typography, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import FlyingIcon from '../images/flying.png';
import QxcRoute from '../images/qxcroute.jpg';
import { Done } from '@material-ui/icons';
import Solo1 from '../images/solo1.jpg';
import Solo2 from '../images/solo2.jpg';
import PplPass1 from '../images/pplpass1.jpg';
import PplPass2 from '../images/pplpass2.jpg';

const FlyingPage: React.FC = () => {
    const [update6Expanded, setUpdate6Expanded] = useState("update6Panel");
    const [update5Expanded, setUpdate5Expanded] = useState("");
    const [update4Expanded, setUpdate4Expanded] = useState("");
    const [update3Expanded, setUpdate3Expanded] = useState("");
    const [update2Expanded, setUpdate2Expanded] = useState("");
    const [update1Expanded, setUpdate1Expanded] = useState("");

    const handleExpansionChange = (panel: string) => (event: any, newExpanded: boolean) => {
        switch (panel) {
          case "update6Panel":
            setUpdate6Expanded(newExpanded ? panel : "");
            break;
          case "update5Panel":
            setUpdate5Expanded(newExpanded ? panel : "");
            break;
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
                <Typography variant='h5' className='Courier-Typography'>Videos</Typography>
                <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='row'>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/u24qLREvo9A" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/o9onO_AYY5g" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/zr3EKZRzXyM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/137PsMFD0Wg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/Nl-KGapB6GM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/WASz-0Tb51c" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/c8WISS9nvzQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/PIVJkKprRkM" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                    <Grid item md={6} xs={6}><iframe title="Flying" width="100%" height="250px" src="https://www.youtube.com/embed/c9Ae9ISOvSg" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                </Grid>
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
                                    <TableCell>PIC Flying Hours</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            89
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            20
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
                
            </Grid>
        </Grid>
    );
}

export default FlyingPage;