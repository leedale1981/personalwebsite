import * as React from 'react';
import DevIcon from "../images/dev.png";
import Image1 from "../images/image1.png";
import Image2 from "../images/image2.png";
import Image3 from "../images/image3.png";
import Image4 from "../images/image4.png";
import Image5 from "../images/image5.png";
import Image6 from "../images/image6.png";
import Image7 from "../images/image7.png";
import Image8 from "../images/image8.png";
import Image9 from "../images/image9.png";
import { Paper, Typography, Chip } from '@material-ui/core';
import { Link } from 'react-router-dom'; 

const DotnetMinimalApis: React.FC = () => {

    return (
        <div>
        <Link to={"/articles"}><Typography variant='h6' className='Courier-Typography'>{`<- Back to articles`}</Typography></Link>
        <Paper className="Article">
            <img src={DevIcon} alt="Dotnet Minimal APIs"/>
            <Typography variant="h4" style={{marginBottom: 20}}>.NET 6 Minimal APIs vs Node JS</Typography>
            <div className="Article-Tags">
                <Chip label="tech" /><Chip label="C#" /><Chip label=".NET" /><Chip label="development" /><Chip label="Node.js" />
            </div>
            <Typography variant="caption" className="Article-Date">30th September 2021</Typography>
            <Typography variant="body1">
            With the release of .NET 6 comes a new way to create APIs; a more concise, less verbose way. 
            </Typography>
            <Typography variant="h6">Top Level Programs</Typography>
            <Typography variant="body1">
            In .NET 5 and C# 9 we were given a new concept called top level programs. Top level programs were designed to minimise the boilerplate code needed for getting an application up and running. For example, in .NET Core 3.1 running dotnet new console would produce this boilerplate code:
            </Typography>
            <img src={Image1} alt="Image1" style={{height: "350px"}} />
            <Typography variant="body1">
            In contrast, running dotnet new console in .NET 5 would create this code.
            </Typography>
            <img src={Image2} alt="Image2" style={{height: "100px"}} />
            <Typography variant="body1">
            As you can see in the second example, there is much less code. This makes your code easier to understand and doesn’t have the unnecessary boilerplate (namespaces, classes etc) around the main functionality, which in this case is just printing the string “Hello World!” To the console.
            </Typography>
            <Typography variant="h6">Global Usings and ImplicitUsings</Typography>
            <Typography variant="body1">
            In C# 10 a new language feature was added that allows us to declare a global using statement using the global keyword as shown below. This means we can declare all our using statements global to our application in one place. We can create a GlobalUsings.cs file and put all our declarations in here away from the .cs files that contain our application code.
            </Typography>
            <img src={Image3} alt="Image3" style={{height: "30px"}} />
            <Typography variant="body1">
            The declared global usings will make the namespaces available throughout our application, without us having to create them in each and every .cs file.
            </Typography>
            <Typography variant="body1">
            In addition to this in .NET 6.0 there is a new project property called ImplicitUsings
            </Typography>
            <img src={Image4} alt="Image4" style={{height: "300px"}} />
            <Typography variant="body1">
            This tells the framework to automatically generate a .cs file in our build folder that includes all the global usings needed for our application to work by using the global keyword described earlier. 
            </Typography>
            <Typography variant="body1">
            Global usings and ImplicitUsings mean we can omit duplicated using statements from every .cs file and massively reduce the amount of boilerplate statements needed. These two new features along with top level programs described earlier enables minimal APIs to work.
            </Typography>
            <Typography variant="h6">Minimal APIs</Typography>
            <Typography variant="body1">
            Minimal APIs can be thought of as APIs without a controller. In the versions of .NET before 6.0, when you created a new web project you would get a project that looked like the following, with classes, namespaces, startup files etc.
            </Typography>
            <img src={Image5} alt="Image5" style={{height: "180px"}} />
            <Typography variant="body1">The program.cs file would look like this:</Typography>
            <img src={Image6} alt="Image6" style={{height: "550px"}} />
            <Typography variant="body1">
            You would have to create a controller class and put your HTTP methods inside this controller then tell your application to map these controllers in your middleware. The templates handled most of this for you, but the code is still there and you still need to understand what your code is doing.
            </Typography>
            <Typography variant="body1">
            Contrast that to .NET 6 were executing the following dotnet new command
            </Typography>
            <pre>
                <code className="csharp">
                dotnet new web -o “DotNetMinApi”
                </code>
            </pre>
            <Typography variant="body1">
            Gives you the following project
            </Typography>
            <img src={Image7} alt="Image7" style={{height: "180px"}} />
            <Typography variant="body1">
            With a program.cs file that looks like this:
            </Typography>
            <img src={Image8} alt="Image8" style={{height: "150px"}} />
            <Typography variant="body1">
            As you can see, the minimal API drastically reduces the amount of boilerplate code needed to get a basic web service up and running. There are no controllers, no middleware, no dependency injection, no namespaces and using statements.
            </Typography>
            <Typography variant="body1">
            The .NET team wanted a way for developers to be able to easily create minimal APIs without being weighed down with classes, dependency injection, namespaces, and large portions of the .NET SDK being imported.
            </Typography>
            <Typography variant="body1">
            This may be somewhat inspired by Node.js which has pretty much taken this tact since its inception.
            </Typography>
            <Typography variant="h6">Node.js</Typography>
            <Typography variant="body1">
            As you can see from this code taken from the getting started page on the Node.js website. There are some similarities to what minimal APIs are trying to achieve in .NET 6.
            </Typography>
            <img src={Image9} alt="Image9" style={{height: "350px"}} />
            <Typography variant="body1">
            In the above code there is no need to create classes, no need to inject dependencies into your IoC container and no need to pull in a large number of namespaces from the SDK to get a basic web service up and running.
            </Typography>
            <Typography variant="body1">
            In the modern world of microservice architecture and serverless computing where services are being more and more decoupled from each other, there is a need to spin up and create small services that serve very specific needs. I think minimal APIs help go some way to achieving that by reducing the friction of generating new .NET applications. It helps keep thing simple and easy to understand.
            </Typography>
            <Typography variant="body1">
            This video from Maria Naggaga (Senior Program Manager .NET as Microsoft) goes more into Microsoft’s thinking behind minimal APIs
            </Typography>
            <iframe title="Flying" width="100%" height="750px" src="https://www.youtube.com/embed/1daODFp6xvs" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </Paper>
        </div>
    );
}

export default DotnetMinimalApis;