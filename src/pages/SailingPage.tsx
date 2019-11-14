import * as React from 'react';
import { Grid, Typography, Paper, IconButton } from '@material-ui/core';

const SailingPage: React.FC = () => {

    return (
        <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='row'>
            <Grid item md={7} xs={12}>
                <Typography variant='h4' className='Courier-Typography'>Come back for content soon...</Typography>
            </Grid>
        </Grid>
    );
}

export default SailingPage;