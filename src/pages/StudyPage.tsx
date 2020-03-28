import React, { useState } from 'react';
import { Grid, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import OuIcon from '../images/ou.png';

const StudyPage: React.FC = () => {

    const [currentStudyExpanded, setCurrentStudyExpanded] = useState('currentStudyPanel');

    const handleExpansionChange = (panel: string) => (event: any, newExpanded: boolean) => {
      switch (panel) {
        case "currentStudyPanel":
            setCurrentStudyExpanded(newExpanded ? panel : "");
            break;
      }
    };

    return (
        <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='row'>
            <Grid item md={7} xs={12}>
                <Typography variant='h5' className='Courier-Typography'>Current Study</Typography>
                <ExpansionPanel className='Expansion' expanded={currentStudyExpanded === 'currentStudyPanel'} onChange={handleExpansionChange('currentStudyPanel')}>
                    <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                    <Grid container spacing={3} alignItems='flex-start' justify='flex-start'>
                        <Grid item md={3}>
                            <img src={OuIcon} className="Header-Icon"  alt="Open University"/>
                        </Grid>
                    </Grid>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className='Expansion-Details'>
                        <Typography variant="body1"  component='p' paragraph={true}>
                            Currently studying with the Open University for the <a href='http://www.open.ac.uk/courses/combined-studies/degrees/open-degree-qd' target="_blank" rel='noreferrer noopener'>BSc (Honours) Open Degree.</a>
                        </Typography>
                        <Typography variant="h6" component='p' paragraph={true}>Current modules</Typography>
                        <Typography variant="body1" component='p' paragraph={true}>
                            <ul>
                                <li><Typography variant="body1"  component='p' paragraph={true}>SM358 - The Quantum World</Typography></li>
                                <li><Typography variant="body1"  component='p' paragraph={true}>TM352 - Web, Mobile and Cloud Technologies</Typography></li>
                            </ul>
                        </Typography>
                        <Typography variant="h6" component='p' paragraph={true}>Completed modules</Typography>
                        <Typography variant="body1" component='p' paragraph={true}>
                            <ul>
                                <li><Typography variant="body1"  component='p' paragraph={true}>M150 - Data, Computing and Information</Typography></li>
                                <li><Typography variant="body1"  component='p' paragraph={true}>T175 - Networked Living: exploring information and communication technoligies</Typography></li>
                                <li><Typography variant="body1"  component='p' paragraph={true}>M255 - Object Oriented Programming with Java</Typography></li>
                                <li><Typography variant="body1"  component='p' paragraph={true}>S104 - Exploring Science</Typography></li>
                                <li><Typography variant="body1"  component='p' paragraph={true}>M260 - Algorithms, Data Structures and Computability</Typography></li>
                                <li><Typography variant="body1"  component='p' paragraph={true}>S217 - Physics: from Classical to Quantum</Typography></li>
                            </ul>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
        </Grid>
    );
}

export default StudyPage;