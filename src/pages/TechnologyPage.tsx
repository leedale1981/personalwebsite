import * as React from 'react';
import { Grid, Typography, Paper, IconButton } from '@material-ui/core';

const TechnologyPage: React.FC = () => {

    return (
        <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='row'>
            <Grid item md={7} xs={12}>
                <Typography variant='h4' className='Courier-Typography'>Recent Projects</Typography>
                <Paper className='Paper'>
                    <Typography variant='h6'>Dunnhumby</Typography>
                    <Typography variant='body1'>
                        
                    </Typography>
                </Paper>
            </Grid>
            <Grid item md={5} xs={12}>
                <Grid container spacing={5} alignItems='flex-start' justify='flex-start' direction='column'>
                    <Grid item md={12} xs={12}>
                        <Typography variant='h4' className='Courier-Typography'>Articles</Typography>
                        <Paper className='Paper'>
                        <Typography variant='h6'>Some article</Typography>
                        <Typography variant='body1'>
                            I have been a software developer for twenty years now and have worked thirteen of those years as a freelance developer specializing in building enterprise web applications. The main technology stack is based around Microsoft .NET (Including .NET Core & ASP.NET MVC/WebAPI), JavaScript, TypeScript, React and Node. I have extensive knowledge of cloud technologies and architectures mainly on the Microsoft Azure platform and recently with Google’s Cloud Platform.
                        </Typography>
                        </Paper>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Typography variant='h4' className='Courier-Typography'>Recommendations</Typography>
                        <Paper className='Paper'>
                        <Typography variant='h6'>Some project</Typography>
                        <Typography variant='body1'>
                            I have been a software developer for twenty years now and have worked thirteen of those years as a freelance developer specializing in building enterprise web applications. The main technology stack is based around Microsoft .NET (Including .NET Core & ASP.NET MVC/WebAPI), JavaScript, TypeScript, React and Node. I have extensive knowledge of cloud technologies and architectures mainly on the Microsoft Azure platform and recently with Google’s Cloud Platform.
                        </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default TechnologyPage;