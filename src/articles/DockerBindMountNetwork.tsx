import * as React from 'react';
import Docker from "../images/docker2.png";
import ComposeFile from "../images/figure1.png";
import MkDir from "../images/mkdir.png";
import Mount from "../images/mount.png";
import VolumeCreate from "../images/volumecreate.png";
import { Paper, Typography, Chip } from '@material-ui/core';
import { Link } from 'react-router-dom';

const DockerBindMountNetwork: React.FC = () => {

    return (
        <div>
        <Link to={"/articles"}><Typography variant='h6' className='Courier-Typography'>{`<- Back to articles`}</Typography></Link>
        <Paper className="Article">
            <img src={Docker} alt="Docker" />
            <Typography variant="h4" style={{marginBottom: 20}}>How to bind to a Windows Share using CIFS in Docker
            </Typography>
            <div className="Article-Tags">
                <Chip label="tech" /><Chip label="docker" /><Chip label="containers" /><Chip label="linux" />
            </div>
            <Typography variant="caption" className="Article-Date">15th February 2021</Typography>
            <Typography variant="body1">
                Docker is great for building stateless, ephemeral services but sometimes these services need to access data outside the container. This could be for storing log files, writing to a database or simply (as in my case recently) just to read and write files to a share. 
            </Typography>
            <Typography variant="body1">
                The complication in my case was that the file share in question was sitting on a Windows machine on a network. Docker has good support for binding to folders on the host machine using volumes <a href="https://docs.docker.com/storage/volumes/">https://docs.docker.com/storage/volumes/</a>
            </Typography>

            <Typography variant="h6">Bind mounts</Typography>
            <Typography variant="body1">
            Docker has the concept of a bind mount which allows you to bind a folder on the host machine to a folder inside the container itself.
            </Typography>
            <Typography variant="body1">
            You can view the documentation for bind mounts here <a href="https://docs.docker.com/storage/bind-mounts/ ">https://docs.docker.com/storage/bind-mounts/</a>
            </Typography>
            <Typography variant="body1">
            The syntax inside a docker-compose file to achieve a bind mount is show here.
            </Typography>
            <img src={ComposeFile} alt="Docker Compose" style={{height: "235px"}} />
            <Typography variant="body1">
            The source attribute specifies a folder on the host machine and the target attribute specifies a folder inside the container.
            </Typography>
            <Typography variant="body1">
            Once this bind mount is created anything inside the source folder will appear inside the target folder.
            </Typography>
            <Typography variant="body1">
            The idea is that when the container disappears or is scaled to another node the external data is maintained.
            </Typography>
            <Typography variant="body1">
            This is all well a good and pretty standard stuff.
            </Typography>
            <Typography variant="h6">CIFS</Typography>
            <Typography variant="body1">
            However, what if you wanted to source folder to be a Windows network share? For example, \\MYSERVER\SomeShare. Creating a bind mount to a network share won’t work.
            </Typography>
            <Typography variant="body1">
            Enter CIFS <a href="https://cifs.com/#:~:text=Common%20Internet%20File%20System%20(CIFS,files%20on%20the%20remote%20server.">https://cifs.com/#:~:text=Common%20Internet%20File%20System%20(CIFS,files%20on%20the%20remote%20server.</a>
            </Typography>
            <Typography variant="body1">
            From cifs.com:
            </Typography>
            <Typography variant="body1">
            <q>
            Common Internet File System (CIFS) is a network filesystem protocol used for providing shared access to files and printers between machines on the network. A CIFS client application can read, write, edit and even remove files on the remote server
            </q>
            </Typography>
            <Typography variant="body1">
            To bind to a Windows file share we need to mount the file share using CIFS on the host machine.
            To do this we first need a folder to mount to so we create one inside /mnt on the host machine
            </Typography>
            <img src={MkDir} alt="mkdir" style={{height: "40px"}} />
            <Typography variant="body1">
            Now we have a folder to mount to we can run the mount command to mount our source folder to the network share.
            </Typography>
            <img src={Mount} alt="mount" style={{height: "35px"}} />
            <Typography variant="body1">
                As you can see, we specify our share name and our source folder on the host machine.
            </Typography>
            <Typography variant="body1">
            We should now be able to see the folders and files
            </Typography>
            <Typography variant="body1">
            Now when we run our container our bind mount will connect to the source folder on our host machine which is mounted to the network share. You can now access the files on the network share via the /app/target folder inside the container.
            </Typography>
            <Typography variant="body1">
            One thing to note is that the mount will go away if the host machine is restarted so you might want to make sure the mount is created on each boot of the host machine via /etc/fstab
            <br /><br />
            <a href="https://en.wikipedia.org/wiki/Fstab">https://en.wikipedia.org/wiki/Fstab</a>
            </Typography>
            <Typography variant="h6">Docker Volume Create</Typography>
            <Typography variant="body1">
            Docker does have support for creating volumes using CIFS using the Docker create command. There is also support inside the compose file to do this. I couldn’t personally get this to work using a Windows network share and I found the method above by first mounting the network share to a folder on the host machine before creating a bind mount was the only way to get it to work.  
            </Typography>
            <img src={VolumeCreate} alt="volume create" style={{height: "35px"}} />
            <Typography variant="body1"></Typography>
        </Paper>
        </div>
    );
}

export default DockerBindMountNetwork;