import * as React from 'react';
import CloudIcon from "../images/cloud.png";
import { Paper, Typography, Chip } from '@material-ui/core';
import { Link } from 'react-router-dom';

const FactoryDesignPatternArticle: React.FC = () => {

    return (
        <div>
        <Link to={"/articles"}><Typography variant='h6' className='Courier-Typography'>{`<- Back to articles`}</Typography></Link>
        <Paper className="Article">
            <img src={CloudIcon} alt="Cloud" />
            <Typography variant="h4" style={{marginBottom: 20}}>How to deploy a Web App and Load Balancer to Kubernetes on GKE
            </Typography>
            <div className="Article-Tags">
                <Chip label="tech" /><Chip label="c#" /><Chip label="cloud" /><Chip label="kubernetes" /><Chip label="gke" /><Chip label="microservices" /><Chip label="google" /><Chip label="containers" />
            </div>
            <Typography variant="caption" className="Article-Date">27th November 2019</Typography>
            <Typography variant="body1">
                This video walks through creating a Kubernetes cluster on Google Cloud Platform GKE. It shows hows to deploy a YAML deployment file using the gcloud SDK and deploy a load balancer service type to connect to a web server running in a container.
            </Typography>
            <Typography variant="body1">
                <a href="https://github.com/leedale1981/gcp-sdk-cli-references" target="_blank" rel="noopener noreferrer">Link to GitHub project</a>
            </Typography>
            <iframe title="How to deploy a Web App and Load Balancer to Kubernetes on GKE" width="100%" height="720" src="https://www.youtube.com/embed/DqW5FbOhSWQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </Paper>
        </div>
    );
}

export default FactoryDesignPatternArticle;