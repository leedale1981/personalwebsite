import * as React from 'react';
import DevIcon from "../images/dev.png";
import DotnetNewIcon from "../images/dotnetnew.png";
import Folders1Icon from "../images/folders1.png";
import Folders2Icon from "../images/folders2.png";
import TemplateJsonIcon from "../images/templatejson.png";
import TemplateProjectFileIcon from "../images/templatesprojectfile.png";
import { Paper, Typography, Chip } from '@material-ui/core';
import { Link } from 'react-router-dom'; 

const CreatingOpinionatedDotnetTemplates: React.FC = () => {

    return (
        <div>
        <Link to={"/articles"}><Typography variant='h6' className='Courier-Typography'>{`<- Back to articles`}</Typography></Link>
        <Paper className="Article">
            <img src={DevIcon} alt="Dotnet Templates"/>
            <Typography variant="h4" style={{marginBottom: 20}}>Creating Opinionated .NET Templates for your Organisation.
            </Typography>
            <div className="Article-Tags">
                <Chip label="tech" /><Chip label="dotnet" /><Chip label="microsoft" /><Chip label="development" /><Chip label=".NET" />
            </div>
            <Typography variant="caption" className="Article-Date">2nd July 2021</Typography>
            <Typography variant="body1">
                When designing and building your application with a microservice approach you will find that you will be continually creating the same projects over and over with the same configuration and folder structure. When you add in Docker files, DevOps pipelines and other technologies you may have chosen it makes sense to try and standardise on your approach and this is where dotnet templates can be useful.
            </Typography>
            <Typography variant="h6">
                Being Opinionated
            </Typography>
            <Typography variant="body1">
                The benefit of templates comes when you encapsulate the use of technologies that your organisation wants to standardise on and avoid being too generic. For instance, in my organisation, we have decided to use Azure DevOps Pipelines for CI/CD and Docker for containerizing our applications. It makes sense to build templates that simplify the use and setup of these things for each new service. That way you know that when a developer creates a new service using the dotnet new command their project is structured in a standardised way from the start and boilerplate code and configuration is already done for them. Reducing friction when creating new services.
            </Typography>
            <Typography variant="h6">
            What is a dotnet new template?
            </Typography>
            <Typography variant="body1">
                When using the dotnet new command to create projects you can select from a list of installed templates. There are the standard templates that ship with the dotnet SDK, but you can also create your own templates.
            </Typography>
            <Typography variant="body1">
                Running <code> dotnet new </code>with no arguments will display a list of installed templates.
            </Typography>
            <img src={DotnetNewIcon} alt="Dotnet new" style={{height: "935px"}} />
            <Typography variant="body1"></Typography>
            <Typography variant="h6">
            How can I install my own templates?
            </Typography>
            <Typography variant="body1">
            Once you have created a set of templates you can package these up into a nuget package and store that nuget package in your private nuget feed so that anyone in your organisation can install the templates for their own use. 
            </Typography>
            <Typography variant="h6">Creating a template project</Typography>
            <Typography variant="body1">
            The first thing you must do is create the correct folder structure for your templates and create a project file.
            </Typography>
            <Typography variant="body1">I am going to create templates for three different .NET project types
                <ul>
                    <li>Web API projects</li>
                    <li>Class Library projects</li>
                    <li>Executable projects (.exe)</li>
                </ul>
            </Typography>
            <Typography variant="body1">
            As you can see here is my folder structure:
            </Typography>
            <img src={Folders1Icon} alt="Folders" style={{height: "235px"}} />
            <Typography variant="body1">
            The Deployment folder houses the Azure DevOps pipeline that will package and deploy the nuget package to my private nuget feed hosted in Azure DevOps.
            </Typography>
            <Typography variant="body1">
            The Templates.csproj files looks like this:
            </Typography>
            <img src={TemplateJsonIcon} alt="Template json" style={{height: "335px"}} />
            <Typography variant="body1">
            This will include the content located in each of the template folders. In each of the template folders you will create the project structure that you want to be created when you create a new project from that template. For example, the Web API project structure will look like the following:
            </Typography>
            <img src={Folders2Icon} alt="Folders" style={{height: "435px"}} />
            <Typography variant="body1">
            As you can see the files and folders inside the ApiTemplate folder are just the same as a standard .NET Web API project structure with the exception of the .template.config folder.
            </Typography>
            <Typography variant="body1">
            The .template.config folder is a special folder with a template.json file inside it. The template system will look for this file in this folder to get the metadata for the template itself. The template.json file contains the following:
            </Typography>
            <img src={TemplateProjectFileIcon} alt="Template project file" style={{height: "635px"}} />
            <Typography variant="body1">
            Most of this file is self explanatory but a couple of things to note. 
            <ol>
                <li>The value of the identity field is used when installing the template using <code>dotnet new -i</code> </li>
                <li>The value of the name and shortName fields is displayed when running dotnet new to list the installed templates. The shortName is what you will use when running dotnet new for example. <code> dotnet net my-webapi -o “My.Web.Api” </code> will create a project based on your WebApi template.</li>
            </ol>
            </Typography>
            <Typography variant="h6">Packaging and deploying the template</Typography>
            <Typography variant="body1">
            Once you have created your project templates you can package all the templates up into a nuget file using the <code>dotnet pack</code> command which looks at the Templates.csproj find the files to include in the package.
            </Typography>
            <Typography variant="body1">
            Once you have a .nupkg file you can deploy this to your private nuget feed.
            </Typography>
            <Typography variant="h6">Installing the template</Typography>
            <Typography variant="body1">
            Once you have your nuget package sitting in your feed. Anyone can then install the package to their system by running the <code>dotnet new -i "NUGET_PACKAGE_D"</code> command.
            </Typography>
            <Typography variant="body1">
            The package ID will be the identity property located in the template.json file. In this case My.Templates.Api
            </Typography>
            <Typography variant="h6">GitHub repo</Typography>
            <Typography variant="body1">
            You can download the code for the three templates at the <a href="https://github.com/leedale1981/dotnet-docker-devops-templates" target="_blank" rel="noopener noreferrer">GitHub repo</a>. These are opinionated templates that setup projects for use with Azure DevOps by including pre-configured pipeline .yaml files, Docker by including a Dockerfile and .NET 5.0. All of which can be changed for your own use.
            </Typography>
            <Typography variant="h6">Documentation</Typography>
            <Typography variant="body1">
                The official Microsoft documentation for dotnet templates can be found at <a href="https://docs.microsoft.com/en-us/dotnet/core/tools/custom-templates" target="_blank" rel="noopener noreferrer">https://docs.microsoft.com/en-us/dotnet/core/tools/custom-templates</a> 
            </Typography>
        </Paper>
        </div>
    );
}

export default CreatingOpinionatedDotnetTemplates;