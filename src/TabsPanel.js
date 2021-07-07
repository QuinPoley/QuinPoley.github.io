import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: "#21232b",
      
    },
  }));
  
  export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="sticky" width="100%" style={{ background: '#31333d' }}>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="About" {...a11yProps(0)} />
            <Tab label="AWS Blender Resources" {...a11yProps(1)} />
            <Tab label="Chess" {...a11yProps(2)} />
            <Tab label="Other Projects" {...a11yProps(3)} />
            
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <p>Hello</p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <p>Hello</p>
          <img src='BlenderAWSRepoImage.jpg' alt="Blender Image"/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          Chess
        </TabPanel>
        <TabPanel value={value} index={3}>
          Other Projects
        </TabPanel>
      </div>
    );
  }