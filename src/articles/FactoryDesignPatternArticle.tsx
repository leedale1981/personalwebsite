import * as React from 'react';
import FdpIcon from "../images/factorydesignpattern.png";
import { Paper, Typography, Chip } from '@material-ui/core';

const FactoryDesignPatternArticle: React.FC = () => {

    return (
        <Paper className="Article">
            <img src={FdpIcon} />
            <Typography variant="h4" style={{marginBottom: 20}}>How to use the Factory Design Pattern with C#
            </Typography>
            <div className="Article-Tags">
                <Chip label="tech" /><Chip label="c#" /><Chip label="programming" /><Chip label="software development" /><Chip label=".net core" />
            </div>
            <Typography variant="caption" className="Article-Date">27th November 2019</Typography>
            <Typography variant="body1">
                The factory method is a design pattern that can be used in your .NET projects to support dependency injection and therefore testable classes while also keeping your components decoupled from external dependencies.
            </Typography>
            <Typography variant="body1">
                You can dive deeper into the uses of the design pattern at the <a href="https://en.wikipedia.org/wiki/Factory_method_pattern">Wikipedia article</a>. The video below shows a simple example of creating a testable class with an external dependency that can be mocked. It then shows how to create a factory class to hide the external dependency from a client component.
            </Typography>
            <iframe width="100%" height="720" src="https://www.youtube.com/embed/hrXvJz2YnEM?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=1&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com"><div><small><a href="https://youtubeembedcode.com/de/">youtubeembedcode.com/de/</a></small></div><div><small><a href="http://add-link-exchange.com">get more info</a></small></div><div><small><a href="https://youtubeembedcode.com/es/">youtubeembedcode es</a></small></div><div><small><a href="http://add-link-exchange.com">get more info</a></small></div><div><small><a href="https://youtubeembedcode.com/nl/">youtubeembedcode.com/nl/</a></small></div><div><small><a href="http://add-link-exchange.com">this site</a></small></div></iframe>
        </Paper>
    );
}

export default FactoryDesignPatternArticle;