import * as React from 'react';
import Maintanance from "../images/maintenance.png";
import Costs from "../images/softwarecosts.jpg";
import MkDir from "../images/mkdir.png";
import Mount from "../images/mount.png";
import VolumeCreate from "../images/volumecreate.png";
import { Paper, Typography, Chip } from '@material-ui/core';
import { Link } from 'react-router-dom';

const LehmansLaws: React.FC = () => {

    return (
        <div>
        <Link to={"/articles"}><Typography variant='h6' className='Courier-Typography'>{`<- Back to articles`}</Typography></Link>
        <Paper className="Article">
            <img src={Maintanance} alt="Maintenance" />
            <Typography variant="h4" style={{marginBottom: 20}}>Software Evolution – Lehman’s Laws.
            </Typography>
            <div className="Article-Tags">
                <Chip label="tech" /><Chip label="software" /><Chip label="design" /><Chip label="sre" /><Chip label="agile" /><Chip label="software engineering" />
            </div>
            <Typography variant="caption" className="Article-Date">18th February 2021</Typography>
            <Typography variant="body1"></Typography>
            <Typography variant="h6">What is software evolution?</Typography>
            <Typography variant="body1">
            Every piece of software needs to change at some point, if only because it no longer stops working on a particular operating system and needs to be updated. In reality however a change is needed most likely because user requirements change, or a bug has been found. Software evolution is all about maintaining the ability to react to, and predict changes in the environment a piece of software is being executed in. Sometimes change is planned but a lot of the time it is unplanned.
            </Typography>
            <Typography variant="body1">
            The need for software evolution can be different depending on the environment the software is running in. For example, Microsoft puts a big emphasis on backwards compatibility when releasing new versions of their operating system. This means that software built many years ago can still run happily on the latest version. Contrast that with Apple for instance where backwards compatibility in the new releases of their OS is not a priority, meaning software targeting an Apple OS may need to be re-written or at least updated for every release.
            </Typography>
            <Typography variant="body1">
            Depending on your perspective the need for change can be a good or bad thing. Having to rewrite a system to work on a new release of an operating system can be seen as a good thing if that re-write leads to architectural improvements and code refactoring to make the next maintenance phase more cost effective. However, some companies may see this as a bad thing if the cost of maintenance is not factored in to their budgets as an investment in their assets.
            </Typography>
            <Typography variant="body1">
            Maintaining software is by far the most expensive cost of software ownership, the cost of maintaining software outweighs the cost of design and even development stages. Software is seen by most companies as a critical business asset. From Somerville, 2001, Software Engineering:
            </Typography>
            <Typography variant="body1">
                <q>Software change is very important because organisations are now completely dependent on their software systems and have invested millions of dollars in these systems. Their systems are critical business assets and they must invest in system change to maintain the value of these assets</q>
            </Typography>
            <img src={Costs} alt="Software Costs" style={{height: "335px"}} />
            <Typography variant="caption">Figure 1- From Sommervillle 2001 - Software Maintenance vs Development costs</Typography>
            <Typography variant="body1"></Typography>
            <Typography variant="h6">Isn’t this just maintenance and bug fixing?</Typography>
            <Typography variant="body1">
            Software maintenance in the traditional software development lifecycle (SDLC) is relegated to the last phase of the lifecycle and doesn’t really capture the importance of the need for change throughout a software lifespan. Software evolution is a move towards predicting the need for a change in software and factoring in the maintenance of software to the whole development approach. 
            </Typography>
            <Typography variant="body1">
            Software evolution is more about understanding the need for change and thinking about how a piece of software can adapt to its changing environment.
            </Typography>
            <Typography variant="body1">
            This way of thinking is nowadays encapsulated by the <a href="https://en.wikipedia.org/wiki/Agile_software_development">Agile</a> and <a href="https://en.wikipedia.org/wiki/Site_reliability_engineering">Site Reliability Engineering</a> mindsets. These mindsets put software evolution at the forefront of systems development and attempt to build systems that are resilient and adaptable to change. They understand that changes in software are enviable.
            </Typography>
            <Typography variant="h6">Lehman’s Laws</Typography>
            <Typography variant="body1">
            <a href="https://en.wikipedia.org/wiki/Manny_Lehman_(computer_scientist)">Mier ‘Manny’ Lehman</a> worked for IBM in the 60’s and 70’s and he observed that systems can fall into two categories. S-type programs that can be devised from a rigorous step-wise, mathematical approach that is defined up front and E-type programs that are more evolutionary and whose requirements change in reaction to its changing environment. He said that E-type systems are more common in the real world where software must react to real world conditions.
            </Typography>
            <Typography variant="body1">
            Lehman devised eight laws that describe e-type systems, which I have summarised below:
            </Typography>
            <Typography variant="body1">
                <ul>
                    <li>Continuing change – If a piece of software doesn’t change and adapt to it’s environment then it will become progressively less useful over time.</li>
                    <li>Increasing complexity – As a program changes it becomes more complex.</li>
                    <li>Self-regulation – Program evolution is self-regulating</li>
                    <li>Organisational stability – The amount of work that goes into a release is approximately the same over time.</li>
                    <li>Conservation of familiarity – The change in each release approximately remains constant.</li>
                    <li>Continuing growth – In response to increasing user requirements the functionality of the software will also increase over time.</li>
                    <li>Declining quality – The quality of a system will decline over time unless effort is expended to maintain that quality.</li>
                    <li>Feedback system – a software system is a multi-level feedback system.</li>
                </ul>
            </Typography>
            <Typography variant="body1">
            You can read about these laws more in depth from the link in the references below.
            </Typography>
            <Typography variant="h6">Conclusion</Typography>
            <Typography variant="body1">
            The overarching theme of software evolution is to understand that software is going to change regardless of how well designed it was up front. There is no escaping the ever-changing demand of user requirements, hardware changes or obscure defects that are found. 
            </Typography>
            <Typography variant="body1">
            Embracing the need for change using newer design methodologies from <a href="https://en.wikipedia.org/wiki/Agile_software_development">Agile</a> principles to <a href="https://en.wikipedia.org/wiki/Site_reliability_engineering">reliability engineering</a> is crucial to maintain software usability and maintainability over the lifespan of the software.
            </Typography>
            <Typography variant="h6">References</Typography>
            <Typography variant="body1">
            Wikipedia (2021) Lehman's laws of software evolution [Online] Available at <a href="https://en.wikipedia.org/wiki/Lehman%27s_laws_of_software_evolution">https://en.wikipedia.org/wiki/Lehman%27s_laws_of_software_evolution</a>
            </Typography>
            <Typography variant="body1">
            Michael W. Godfrey, Daniel M. German (2013) On the evolution of Lehman's Laws [Online] Available at <a href="https://onlinelibrary-wiley-com.libezproxy.open.ac.uk/doi/full/10.1002/smr.1636">https://onlinelibrary-wiley-com.libezproxy.open.ac.uk/doi/full/10.1002/smr.1636</a>
            </Typography>
            <Typography variant="body1">
            Somerville, I 2001, <a href="https://www.amazon.co.uk/Software-Engineering-Ian-Sommerville/dp/9332582696/ref=sr_1_7?crid=1RXLDZCDRSQL&dchild=1&keywords=sommerville+software+engineering&qid=1613642832&sprefix=somerville+software%2Caps%2C144&sr=8-7">Software Engineering</a>
            </Typography>
        </Paper>
        </div>
    );
}

export default LehmansLaws;