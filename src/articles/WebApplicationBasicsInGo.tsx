import * as React from 'react';
import DevIcon from "../images/dev.png";
import Connections from "../images/GoHttpConnections.jpg";
import Handler from "../images/handlers.png";
import HandlerFunc from "../images/handlers_func.png";
import GoRoutines from "../images/goroutines.png";
import { Paper, Typography, Chip } from '@material-ui/core';
import { Link } from 'react-router-dom'; 

const WebApplicationBasicsInGo: React.FC = () => {

    return (
        <div>
        <Link to={"/articles"}><Typography variant='h6' className='Courier-Typography'>{`<- Back to articles`}</Typography></Link>
        <Paper className="Article">
            <img src={DevIcon} alt="Dotnet Templates"/>
            <Typography variant="h4" style={{marginBottom: 20}}>Web Application Basics in Go.</Typography>
            <div className="Article-Tags">
                <Chip label="tech" /><Chip label="go" /><Chip label="golang" /><Chip label="development" />
            </div>
            <Typography variant="caption" className="Article-Date">25th September 2021</Typography>
            <Typography variant="body1">
                Go has some great support for easily building web applications utilising the supplied <a href='https://pkg.go.dev/net/http'>http package</a>. There are however some concepts to grasp before fully understanding how Go handles web requests which you should probably know before creating your own applications.
            </Typography>
            <Typography variant="body1">
            The first thing to understand is how Go handles incoming HTTP requests. There are two main concepts to understand here:
            </Typography>
            <Typography variant="h6">ServeMux</Typography>
            <Typography variant="body1">
            What is ServeMux? It sounds like a complicated name but it really boils down to how Go handles input and output in the form of HTTP requests and responses.
            </Typography>
            <Typography variant="body1">
            The Mux part of ServeMux stands for multiplexer. A multiplexer is really just a device that takes multiple inputs signals, does some processing and generates an output signal. This is analogous to a web server that takes multiple input requests (GET /users, POST /users etc) does some processing, for example gets some data from a database and generates an output in the form of a response (JSON, HTML etc).
            </Typography>
            <Typography variant="body1">
            The next concept to grasp is how Go handles connections:
            </Typography>
            <Typography variant="h6">Handling connections</Typography>
            <Typography variant="body1">
            The server listens on a specific port, say port 80. By default the DefaultServeMux within the http package will handle all the connections and messages going back and forward. DefaultServeMux will create Goroutines to handle each connection which allows the server to be highly concurrent and performant.
            </Typography>
            <img src={Connections} alt="HTTP Connections" style={{height: "635px"}} />
            <Typography variant="h6">What are goroutines then?</Typography>
            <Typography variant="body1">
            Essentially you can think of goroutines as analogous to threads inside the operating system. They are Go’s way of handling asynchronous processing and concurrency.
            </Typography>
            <img src={GoRoutines} alt="Goroutines" style={{height: "200px"}} />
            <Typography variant="body1">
            The go keyword here tells go to execute the doSomething function as a goroutine concurrently with the calling code.
            </Typography>
            <Typography variant="h6">Creating a basic web service</Typography>
            <Typography variant="body1">
            So now we understand the basic concepts above we can go ahead and create an actual web service.
            </Typography>
            <Typography variant="body1">
            There are two main functions from the http package that we need to work with.
            </Typography>
            <Typography variant="body1">
            The first is the http.Handle function.
            </Typography>
            <Typography variant="body1">
            The Handle function allows us to define a handler interface and attach a function to that interface then tell Go to execute that function when a specific web requests is made. An example below defines the myHander interface which the ServeHTTP function attaches to. When we tell Go handle the request /custom we pass the function call to Handle with our interface definition populated.
            </Typography>
            <img src={Handler} alt="Handler" style={{height: "500px"}} />
            <Typography variant="body1">
            There is a less verbose way of achiving the same thing using the HandleFunc method in the Go http package.
            </Typography>
            <Typography variant="body1">
            Instead of having to define our own handler interface we can use the built in handler interface func(ResponseWriter, *Request) and then pass our implantation of that interface to HandleFunc as shown below
            </Typography>
            <img src={HandlerFunc} alt="HandlerFunc" style={{height: "350px"}} />
            <Typography variant="body1">
            And that’s it! A very basic overview of creating a simple web service in Go using the http package.
            </Typography>
        </Paper>
        </div>
    );
}

export default WebApplicationBasicsInGo;