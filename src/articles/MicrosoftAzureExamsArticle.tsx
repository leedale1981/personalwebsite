import * as React from 'react';
import AzIcon from "../images/azureicon.png";
import AzFundIcon from '../images/azure-fundamentals.png';
import AzDevIcon from '../images/azure-developer-associate-600x600.png';
import Az900Page from '../images/AZ900page.png';
import Az900Course from '../images/az900course.png';
import Az900Learn from '../images/mslearn.png';
import Az203Page from '../images/AZ203page.png';
import { Paper, Typography, Chip } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MicrosoftAzureExamsArticle: React.FC = () => {

    return (
        <div>
        <Link to={"/articles"}><Typography variant='h6' className='Courier-Typography'>{`<- Back to articles`}</Typography></Link>
        <Paper className="Article">
            <img src={AzIcon} alt="Microsoft Azure"/>
            <Typography variant="h4" style={{marginBottom: 20}}>How I studied and passed two Microsoft Azure Exams in a month.
            </Typography>
            <div className="Article-Tags">
                <Chip label="tech" /><Chip label="certification" /><Chip label="programming" /><Chip label="cloud" /><Chip label="azure" />
            </div>
            <Typography variant="caption" className="Article-Date">30th April 2020</Typography>
            <div style={{padding: 20}}>
                <img src={AzDevIcon} alt="Azure Developer Associate"/>
                <img src={AzFundIcon} alt="Azure Fundamentals"/>
            </div>
            <Typography variant="body1">
                I have not taken any Microsoft exams for a while mainly due to other commitments like trying to finish a degree part time with the Open University. However, I thought while we are all quarantined at home during this COVID-19 pandemic there was no better time to get myself certified and go back to cover the basics a little.
            </Typography>
            <Typography variant="body1">
                I decided to focus on cloud, security and networking as well as enterprise and software architecture certifications, mainly because I’m interested in Cloud Architecture and I’m finding now days that my job as a software developer depends more and more on knowledge of cloud services and how to design and implement software solutions using these services.
            </Typography>
            <Typography variant="body1">
                I decided to start with Microsoft Azure exams mainly because I work mostly on Azure and mainly because I have done Microsoft Exams before and I kind of know the format. 
            </Typography>
            <Typography variant="body1">
                I also decided to start with the very basics by taking exam AZ-900. This is the entry level Azure Fundamentals exam that covers a broad range of topics at a higher level. It was a good start to ease myself in.
            </Typography>
            <Typography variant="h6">
                AZ-900 Azure Fundamentals
            </Typography>
            <div className="Article-Large">
                <img src={Az900Page} alt="AZ-900 Exam Page" />
            </div>
            <Typography variant="body1">
                The first thing I did was purchase <a href="https://www.udemy.com/course/az900-azure/" target="_blank" rel="noopener noreferrer">Scott Duffy’s course on Udemy</a>. I did a bit of research on Azure courses and found that Scott’s courses had good reviews.
            </Typography>
            <div className="Article-Large">
                <img src={Az900Course} alt="AZ-900 Udemy Course"/>
            </div>
            <Typography variant="body1">
                I also found the <a href="https://docs.microsoft.com/en-us/learn/" target="_blank" rel="noopener noreferrer">Microsoft Learn site</a> extremely useful and studied all the content in the  <a href="https://docs.microsoft.com/en-gb/learn/paths/azure-fundamentals/" target="_blank" rel="noopener noreferrer">Fundamentals learning path.</a>  
            </Typography>
            <div className="Article-Large">
                <img src={Az900Learn} alt="AZ-900 Microsoft Learn Page"/>
            </div>
            <Typography variant="body1">
                The content is fairly light on this course and I got through all this content and passed the exam in a couple of days.
            </Typography>
            <Typography variant="h6">
                AZ-203 Azure Developer Associate
            </Typography>
            <div className="Article-Large">
                <img src={Az203Page} alt="AZ-203 Exam Page"/>
            </div>
            <Typography variant="body1">
                The next exam I targeted was the AZ-203 Azure Developer Associate exam. As I am a developer this seemed the most logical exam to tackle next.
            </Typography>
            <Typography variant="body1">
                The content for this is much heavier than AZ-900 and goes into a lot more depth on the different services Azure provides for deploying, monitoring and configuring solutions.
            </Typography>
            <Typography variant="body1">
                I purchased <a href="https://www.udemy.com/course/70532-azure/" target="_blank" rel="noopener noreferrer" >Scott’s course on Udemy for AZ-203.</a> This time it took me a lot longer to get through the content. Probably about a week to get through it all as I was supplementing Scott’s videos with Microsoft learn modules.
            </Typography>
            <Typography variant="body1">
                I would not bother going through all the MS Learn modules the page above suggests for AZ-203 as there are loads. What I would do is specifically target the modules that you come across in Scott’s course and the Skills outline.
            </Typography>
            <Typography variant="body1">
                As this is a developer exam, you need to practice writing code. So I <a href="https://github.com/leedale1981/azure-sdk-cli-references" target="_blank" rel="noopener noreferrer">created a small project on GitHub</a> where I could practice using the SDK, CLI and PowerShell code needed to pass the exam. 
            </Typography>
            <Typography variant="body1">
            Once I felt comfortable I had covered enough of the course content, I took some practice exams to see what knowledge I was missing. I spent a couple of days just going back through Microsoft Documentation and filling in the gaps where I felt I was weak.
            </Typography>
            <Typography variant="body1">
            After roughly two weeks I took the exam.
            </Typography>
            <Typography variant="body1">
            My next focus is on the Google Cloud platform and taking the Associate Cloud Engineer exam.
            </Typography>
        </Paper>
        </div>
    );
}

export default MicrosoftAzureExamsArticle;