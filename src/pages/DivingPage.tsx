import * as React from 'react';
import { Grid, Typography, Paper, IconButton, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Done, ExpandMore } from '@material-ui/icons';
import { useState } from 'react';
import DivingIcon from '../images/mask.png';

const DivingPage: React.FC = () => {
    const [update1Expanded, setUpdate1Expanded] = useState("update1Panel");

    const handleExpansionChange = (panel: string) => (event: any, newExpanded: boolean) => {
        switch (panel) {
          case "update1Panel":
            setUpdate1Expanded(newExpanded ? panel : "");
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
                        <Grid item xs={2}>
                            <img src={DivingIcon} className="Header-Icon"  alt="Flying update"/>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant="h5">27th August 2021</Typography><br />
                        </Grid>
                    </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography variant="body1">
                            This pass weekend we took a trip up North to the Farne Islands and got to do some diving with the seals.
                        <br />
                        <br />
                        <iframe title="SealDiving" width="100%" height="550px" src="https://www.youtube.com/embed/ZRmh3qBzzoU" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
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
                                    <TableCell>Dive Count</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            38
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Typography variant='h5' className='Courier-Typography'>Qualifications</Typography>
                        <TableContainer component={Paper} className="Paper Section-Body">
                            <Table size="small" aria-label="a dense table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Exam</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            PADI Open Water
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Done />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            PADI Advanced Open Water
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Done />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            PADI Rescure Diver
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
        </Grid>
    );
}

export default DivingPage;