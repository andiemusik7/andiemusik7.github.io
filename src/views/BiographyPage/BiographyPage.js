import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/common.js";
import { biography } from "../../data/biography.js"

const useStyles = makeStyles(styles);

export default function BiographyPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const performanceBioBody =[];
  for (const [ , event] of biography.performance.entries()) {
    performanceBioBody.push(
      <Typography>
        {event}
        <br /><br />
      </Typography>
    )
  }

  const academicBioBody = [];
  for (const [ , event] of biography.academic.entries()) {
    academicBioBody.push(
      <Typography>
        {event}
        <br /><br />
      </Typography>
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
              <div className={classes.brandContainer}>
                <div className={classes.brand}>
                  <h1 className={classes.subpageTitle}>Biography</h1>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        
        {/* Performance Activities */}
        <div className={classes.titleContainer}>
          <h2 className={classes.title}>Performance Biography</h2>
        </div>
        <div className={classes.mainContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img
                src={require("assets/img/performance.jpg")}
                alt="Hao Huang"
                width="100%"
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              {performanceBioBody}
            </Grid>
          </Grid>
        </div>

        {/* Academic Biography */}
        <div className={classes.titleContainer}>
          <h2 className={classes.title}>Academic Biography</h2>
        </div>
        <div className={classes.mainContainer}>
          <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <img
              src={require("assets/img/academic.jpg")}
              alt="Hao Huang"
              width="100%"
              className={classes.imgRoundedCircle + " " + classes.imgFluid}
            />
          </Grid>
          <Grid item xs={12} md={6}>
              {academicBioBody}
          </Grid>
        </Grid>
        </div>
      </div>
    <Footer />
  </div>);
}
