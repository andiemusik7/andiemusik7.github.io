import React from "react";
import { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Typography from '@material-ui/core/Typography';
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/common.js";
import { activities } from "../../data/performanceactivites.js"

const useStyles = makeStyles(styles);

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
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

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function PerformanceActivitiesPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [tabsVariant, setTabsVariant] = React.useState('fullwidth');
  const checkScreenSize = () => {
    const mobileResult = window.innerWidth < 1000;
    setTabsVariant(mobileResult ? "scrollable" : "fullwidth");
  };
  useEffect(() => {
    // Anything in here is fired on component mount.
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
        // Anything in here is fired on component unmount.
        window.removeEventListener('resize', checkScreenSize);
    }
  }, [])

  // Content for 'Overseas Tour' section
  const timelineYears = []
  for (const [, yearGroup] of activities.overseasTour.entries()) {
    const events = [];
    for (const [ , event] of yearGroup.events.entries()) {
      events.push(
        <div className={classes.event}>
          <Typography variant="h6" component="h2">
            {event.title}
          </Typography>
          <Typography>{event.description}</Typography>
        </div>
      )
    }
    timelineYears.push(
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography color="textSecondary">
            {yearGroup.year}
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {events}
        </TimelineContent>
      </TimelineItem>
    )
  }

  // Content for 'Soloist with' section
  const soloistContent = [];
  for (const [key , event] of activities.soloist.entries()) {
    const textAlign = (key % 2 === 0) ? "right" : "left";
    soloistContent.push(
      <Grid item xs={6}>
        <Typography align={textAlign}>
          {event}
        </Typography>
      </Grid>
    )
  }

  // Content for 'Overseas Recitals' section
  const overseasRecitalsContent = [];
  for (const [key , event] of activities.overseasRecitals.entries()) {
    const textAlign = (key % 2 === 0) ? "right" : "left";
    overseasRecitalsContent.push(
      <Grid item xs={6}>
        <Typography variant="h6" component="h2" align={textAlign}>
          {event.firstLine}
        </Typography>
        <Typography color="primary" align={textAlign}>
          {event.secondLine}
        </Typography>
      </Grid>
    )
  }

  // Content for 'Solo Recitals' section
  const soloRecitalsContent = [];
  for (const [key , event] of activities.soloRecitals.entries()) {
    const textAlign = (key % 2 === 0) ? "right" : "left";
    soloRecitalsContent.push(
      <Grid item xs={6}>
        <Typography variant="h6" component="h2" align={textAlign}>
          {event.firstLine}
        </Typography>
        <Typography color="primary" align={textAlign}>
          {event.secondLine}
        </Typography>
      </Grid>
    )
  }

  // Content for 'Media' section
  const mediaWebContent = []; // content for web category
  for (const [ , event] of activities.media.web.entries()) {
    mediaWebContent.push(
      <a href={event.url}>
        <Typography className={classes.contactLink}>
          {event.name}
        </Typography>
      </a>
    )
  }
  const mediaPressContent = []; // content for press category
  for (const [ , event] of activities.media.press.entries()) {
    mediaPressContent.push(
      <a href={event.url}>
        <Typography className={classes.contactLink}>
          {event.name}
        </Typography>
      </a>
    )
  }

  // Content for 'Recoginition' secion
  const recognitionContent = [];
  for (const [ , event] of activities.recognition.entries()) {
    recognitionContent.push(
      <Grid item xs={12} md={6} lg={4}>
        <Typography align="center">
          {event}
        </Typography>
      </Grid>
    )
  }

  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/intro-bg-wide.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
                <h1 className={classes.subpageTitle}>Performance Activities</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.root}>
          <AppBar position="static" color="default">
              <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant={tabsVariant}
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                  centered
              >
                  <Tab label="Overseas Tour" {...a11yProps(0)} />
                  <Tab label="Soloist With" {...a11yProps(1)} />
                  <Tab label="Overseas Recitals" {...a11yProps(2)} />
                  <Tab label="Solo Recitals" {...a11yProps(3)} />
                  <Tab label="Media" {...a11yProps(4)} />
                  <Tab label="Recognition" {...a11yProps(5)} />
              </Tabs>
              {/* Overseas Tour Section */}
              <TabPanel value={value} index={0}>
                <div className={classes.titleContainer}>
                  <h2 className={classes.title}>Overseas Tour</h2>
                </div>
                <Timeline align="alternate">
                  {timelineYears}
                </Timeline>
              </TabPanel>
              {/* Soloist With Section */}
              <TabPanel value={value} index={1}>
                <div className={classes.titleContainer}>
                  <h2 className={classes.title}>Soloist With</h2>
                </div>
                <div className={classes.mainContainer}>
                  <Grid container spacing={6}>
                    {soloistContent}
                  </Grid>
                </div>
              </TabPanel>
              {/* Overseas Recitals Section */}
              <TabPanel value={value} index={2}>
                <div className={classes.titleContainer}>
                  <h2 className={classes.title}>Overseas Recitals</h2>
                  <div className={classes.mainContainer}>
                    <Grid container spacing={6}>
                      {overseasRecitalsContent}
                    </Grid>
                  </div>
                </div>
              </TabPanel>
              {/* Solo Recitals Section */}
              <TabPanel value={value} index={3}>
                <div className={classes.titleContainer}>
                  <h2 className={classes.title}>Solo Recitals</h2>
                </div>
                <div className={classes.mainContainer}>
                  <Grid container spacing={6}>
                    {soloRecitalsContent}
                  </Grid>
                </div>
              </TabPanel>
              {/* Media Section */}
              <TabPanel value={value} index={4}>
                <div className={classes.titleContainer}>
                  <h2 className={classes.title}>Media</h2>
                </div>
                <div className={classes.mainContainer}>
                  <Typography variant="h6" component="h2" color="primary">
                    Television
                  </Typography>
                  <Typography>
                    {activities.media.tv}
                  </Typography>
                  <br></br>
                  <Typography variant="h6" component="h2" color="primary">
                    Radio
                  </Typography>
                  <Typography>
                    {activities.media.radio}
                  </Typography>
                  <br></br>
                  <Typography variant="h6" component="h2" color="primary">
                    Web
                  </Typography>
                  {mediaWebContent}
                  <br></br>
                  <Typography variant="h6" component="h2" color="primary">
                    Press
                  </Typography>
                  {mediaPressContent}
                </div>
              </TabPanel>
              {/* Recognition Section */}
              <TabPanel value={value} index={5}>
                <div className={classes.titleContainer}>
                  <h2 className={classes.title}>Recognition</h2>
                </div>
                <div className={classes.mainContainer}>
                  <Grid container spacing={3}>
                    {recognitionContent}
                  </Grid>
                </div>
              </TabPanel>
          </AppBar>
        </div>
      </div>
      <Footer />
    </div>
  );
}
