import * as React from 'react';
import AlIcon from "../images/alexa.png";
import { Paper, Typography, Chip } from '@material-ui/core';

const MyFirstAlexaSkill: React.FC = () => {
    
    return (
        <Paper className="Article">
            <img src={AlIcon} />
            <Typography variant="h4" style={{marginBottom: 20}}>My first Alexa Skill with Node & Typescript.
            </Typography>
            <div className="Article-Tags">
                <Chip label="tech" /><Chip label="typescript" /><Chip label="node" /><Chip label="sofware development" /><Chip label="alexa" />
            </div>
            <Typography variant="caption" className="Article-Date">20th April 2017</Typography>
            <Typography variant="body1">
            So I bought an Amazon Echo just before Christmas and I really found it useful for a lot of things like playing music, asking about the weather and general internet lookups for information. Straight away I hooked it up to my Nest thermostat which meant I could control my heating from around the house with voice commands. My next move was to buy a Hive hub and connect up some plugs and wireless bulbs which allowed me to control lamps and lights throughout the house. I extended the usefulness by adding another two Amazon Dots and placed them strategically around the house. I really liked the ability to control things with voice commands and I found Alexa to be on the whole really easy to use.
            </Typography>
            <Typography variant="body1">
            Being a developer I had to take a peek at the SDK that allows you to build custom skills and publish them to the Skills marketplace. I decided I would jump in and give building a skill a try as a hobby project. I needed an idea for a skill first and as it happens I also run a company called Aerial Focus Technology which does aerial photography with drones. One of the things you must do before flying a drone is to check the weather at the location you are supposed to be flying, making sure that it's safe to put a drone up in the air. A quick check on the marketplace showed me that there wasn't already a skill out there to do this so I thought it was a good enough idea to develop a skill and jumped into the SDK to work out what I needed to do.
            </Typography>
            <Typography variant="h6">Web Service</Typography>
            <Typography variant="body1">
            I ended up opting for using Node.js with Express and Typescript for the back end web service. I could have gone with a .NET WebAPI project but I like to expand my skills and use technologies that I won't necessarily use in my day job (saying that I'm using TypeScript pretty much on every project I do now).
            </Typography>
            <Typography variant="body1">
            It was really easy to get a web service up and running pretty quickly and I only needed one endpoint that Alexa can call to get the response that will be spoken back to the user.
            </Typography>
            <Typography variant="h6">Documentation</Typography>
            <Typography variant="body1">
            Visit the custom skills documentation and make sure you understand what is expected of your skill in regards to parsing the correct JSON being sent in the request from Alexa and returning the response JSON.
            </Typography>
            <Typography variant="body1">
            The understanding custom skills page should be your starting point. And you will want to refer to the JSON interface which outlines the correct request and response schemas.
            </Typography>
            <Typography variant="h6">Passing certification.</Typography>
            <Typography variant="body1">
            Before submitting your skill for certification you should make sure you test it against the submission checklist to make sure your skills covers all aspects of the requirements.
            </Typography>
            <Typography variant="body1">
            There are a number of things to note.
                <ul>
                    <li>Your skill must validate the incoming URL and certificate to check the call is coming from Amazon. I used the very helpful project alexa-verifier-middleware NPM package which you can tell your Node Express router to use and will handle all the validation for you. It builds on top of the alexa-verifier project on GitHub.Heres the code to plug in the verifier.
                    </li>
                    <li>You must check the Application id passed in the request is the same application id assigned to your skill. You must also check that a valid intent name has been used.
                    </li>
                </ul>
            </Typography>
        </Paper>
    );
}

export default MyFirstAlexaSkill;