import React, { useState } from "react";
import { Grid, Typography, Avatar, Icon, Hidden, Button, Menu, MenuItem, Divider } from "@material-ui/core";
import MeLogo from "../images/me.jpg";
import AviationIcon from "../images/propeller.png";
import TechIcon from "../images/macbook.png";
import ScienceIcon from "../images/science.png";
import ScubaIcon from "../images/mask.png";
import BoatIcon from "../images/boat.png";
import { Instagram, LinkedIn, Twitter, GitHub, Dehaze } from '@material-ui/icons';
import { Link } from "react-router-dom";
import "../App.css";

const Header: React.FC = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event: any) => {
    setMenuExpanded(!menuExpanded);
    setAnchorEl(event.currentTarget);
  };

  return (
    <Grid container spacing={0} alignItems='center' justify='center' direction='row'>
      <Hidden smDown>
        <Grid item md={3} lg={2} style={{marginBottom: 30}}>
          <Link to={"/"}><Avatar alt="Lee Dale" src={MeLogo} className='Me-Avatar' /></Link>
        </Grid>
      </Hidden>
      <Grid item md={3} lg={2} sm={4} alignContent='flex-start' alignItems='flex-start' style={{marginBottom: 30}}>
        <Typography variant='h4' className='Courier-Typography'>Lee Dale</Typography>
        <Grid container spacing={0} direction='row'>
          <Grid item md={2}>
            <a href="https://www.instagram.com/its.a.dales.life/" target="_blank" rel='noreferrer noopener' className="Social-Links"><Instagram /></a>
          </Grid>
          <Grid item md={2}>
            <a href="https://www.linkedin.com/in/leedale/" target="_blank" rel='noreferrer noopener' className="Social-Links"><LinkedIn /></a>
          </Grid>
          <Grid item md={2}>
            <a href="https://twitter.com/cloudshark4" target="_blank" rel='noreferrer noopener' className="Social-Links"><Twitter /></a>
          </Grid>
          <Grid item md={2}>
            <a href="https://github.com/leedale1981" target="_blank" rel='noreferrer noopener' className="Social-Links"><GitHub /></a>
          </Grid>
        </Grid>
      </Grid>
      <Hidden smUp>
        <Grid item sm={1}>
          <Button aria-controls="Nav-Menu" aria-haspopup="true" onClick={handleMenuClick}>
            <Dehaze />
          </Button>
          <Menu
            id="Nav-Menu"
            keepMounted
            open={menuExpanded}
            onClose={() => setMenuExpanded(false)}
            anchorEl={anchorEl}
          >
            <MenuItem onClick={() => setMenuExpanded(false)}>
              <Link to={"/"}>
                <Typography variant='h6' className='Courier-Typography'>Home</Typography>
              </Link>
            </MenuItem>
              <MenuItem onClick={() => setMenuExpanded(false)}>
              <Link to={"/technology"}>
                <Typography variant='h6' className='Courier-Typography'>Technology</Typography>
              </Link>
            </MenuItem>
              <MenuItem onClick={() => setMenuExpanded(false)}>
              <Link to={"/flying"}>
                <Typography variant='h6' className='Courier-Typography'>Flying</Typography>
              </Link>
            </MenuItem>
              <MenuItem onClick={() => setMenuExpanded(false)}>
              <Link to={"/Sailing"}>
                <Typography variant='h6' className='Courier-Typography'>Sailing</Typography>
              </Link>
            </MenuItem> 
            <MenuItem onClick={() => setMenuExpanded(false)}>
              <Link to={"/diving"}>
                <Typography variant='h6' className='Courier-Typography'>Diving</Typography>
              </Link>
            </MenuItem>
          </Menu>
        </Grid>
      </Hidden>
      <Hidden xsDown>
        <Grid item md={12} lg={8}>
          <Grid container spacing={0} direction='row'>
            <Grid item md={3} sm={6} xs={6}>
              <Link to={"/technology"}>
                <Icon>
                  <img src={TechIcon} className='Nav-Button' alt='Technology' />
                  <Typography variant='h6' className='Courier-Typography'>Technology</Typography>
                </Icon>
              </Link>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <Link to={"/flying"}>
                <Icon>
                  <img src={AviationIcon} className='Nav-Button' alt='flying' />
                  <Typography variant='h6' className='Courier-Typography'>Flying</Typography>
                </Icon>
              </Link>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <Link to={"/sailing"}>
                <Icon>
                  <img src={BoatIcon} className='Nav-Button' alt='sailing' />
                  <Typography variant='h6' className='Courier-Typography'>Sailing</Typography>
                </Icon>
              </Link>
            </Grid>
            <Grid item md={3} sm={6} xs={6}>
              <Link to={"/diving"}>
                <Icon>
                  <img src={ScubaIcon} className='Nav-Button' alt='diving' />
                  <Typography variant='h6' className='Courier-Typography'>Diving</Typography>
                </Icon>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </Grid>
  );
}

export default Header;
