import React, { useState }  from 'react';
import { Grid, Typography, Paper, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import Dinghy3 from '../images/Dinghy3.jpg';
import Dinghy5 from '../images/Dinghy5.jpg';
import Dinghy1 from '../images/Dinghy1.jpg';
import Dinghy2 from '../images/Dinghy2.jpg';
import Dinghy6 from '../images/Dinghy6.jpg';
import CompCrew1 from '../images/compcrew1.jpg';
import CompCrew2 from '../images/compcrew2.jpg';
import CompCrew3 from '../images/compcrew3.jpg';
import CompCrew4 from '../images/compcrew4.jpg';    
import { Done } from '@material-ui/icons';

const SailingPage: React.FC = () => {

    const [update3Expanded, setUpdate3Expanded] = useState("update3Panel");
    const [update2Expanded, setUpdate2Expanded] = useState("update2Panel");
    const [update1Expanded, setUpdate1Expanded] = useState("update1Panel");

    const handleExpansionChange = (panel: string) => (event: any, newExpanded: boolean) => {
        switch (panel) {
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
                <ExpansionPanel className='Expansion' expanded={update3Expanded === 'update3Panel'} onChange={handleExpansionChange('update3Panel')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Grid container spacing={3} alignItems='flex-start' justify='flex-start'>
                        <Grid item xs={10}>
                            <Typography variant="h5">23rd September 2020</Typography><br />
                        </Grid>
                    </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="body1">
                            We spent a week sailing around the islands of Croatia completing our Competent crew course with Seafarer Sailing.
                            <br /><br />
                            <div className="Article-Large">
                                <img src={CompCrew2} alt="Competent crew certificate" />
                                <img src={CompCrew1} alt="Competent crew" />
                                <img src={CompCrew3} alt="Competent crew" />
                                <img src={CompCrew4} alt="Competent crew" />
                            </div>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className='Expansion' expanded={update2Expanded === 'update2Panel'} onChange={handleExpansionChange('update2Panel')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Grid container spacing={3} alignItems='flex-start' justify='flex-start'>
                        <Grid item xs={10}>
                            <Typography variant="h5">24th November 2019</Typography><br />
                        </Grid>
                    </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="body1">
                            We completed our RYA level 2 dinghy sailing course this weekend. Thanks to Grandwaters outdoor education centre for accomodating us again. 
                            <br /><br />
                            <div className="Article-Large">
                                <img src={Dinghy3} alt="RYA Basic skills certificate" />
                                <img src={Dinghy5} alt="RYA Basic skills" />
                            </div>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel className='Expansion' expanded={update1Expanded === 'update1Panel'} onChange={handleExpansionChange('update1Panel')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Grid container spacing={3} alignItems='flex-start' justify='flex-start'>
                        <Grid item xs={10}>
                            <Typography variant="h5">29th October 2019</Typography><br />
                        </Grid>
                    </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="body1">
                            We completed our RYA level 1 dinghy sailing course this weekend. Thanks to Grandwaters outdoor education centre. 
                            <br /><br />
                            <div className="Article-Large">
                                <img src={Dinghy6} alt="RYA start sailing  certificate" />
                                <img src={Dinghy2} alt="RYA  start sailing" />
                                <img src={Dinghy1} alt="RYA  start sailing" />
                            </div>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
            <Grid item md={5} xs={12}>
                <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='column'>
                    <Grid item md={12} xs={12}>
                        <Typography variant='h5' className='Courier-Typography'>Qualifications</Typography>
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
                                            RYA Start Sailing Level 1 (Dinghy)
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Done />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            RYA Basic Skills Level 2 (Dinghy)
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Done />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            RYA Competent Crew
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Done />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            RYA Essential Navigation + Seamanship
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Done />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            RYA Day Skipper Theory
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            RYA Day Skipper Practical
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            RYA Coastal Skipper Theory
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            RYA Costal Skipper Practical
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            RYA Yachtmaster
                                        </TableCell>
                                        <TableCell component="th" scope="row">
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
                    <Grid item md={6} xs={6}><iframe width="100%" height="315px" src="https://www.youtube.com/embed/RRgmCbP2JFw" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SailingPage;