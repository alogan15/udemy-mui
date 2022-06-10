import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import logo from '../../assets/logo.svg';
import { margin } from '@mui/system';

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });
  

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
  }

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        height: "3em"
    },
    tabContainer: {
        //marginLeft: "auto"
    }
}));

export default function Header(props) {
    const classes = useStyles()

    return (
        <React.Fragment>
        <ElevationScroll>
        <AppBar color="primary">
            <Toolbar disableGutters>
                <img alt="company logo" src={logo} />  
                <Tabs className={classes.tabContainer}>
                    <Tab label="Home"/>
                    <Tab label="Services"/> 
                    <Tab label="About Us"/>
                    <Tab label="Contact Us"/>  
                </Tabs> 
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        </React.Fragment>
    );
}