import * as React from 'react';
import { Paper } from '@material-ui/core';

const SpaceBlasterPage: React.FC = () => {

    return (
        <Paper className="Space-Blaster-Container">
            <iframe src="https://spaceblaster.azurewebsites.net" className="Space-Blaster-Frame" />
        </Paper>
    );
}

export default SpaceBlasterPage;