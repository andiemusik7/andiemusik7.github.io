import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/common.js";
import { contact } from "../../data/contact.js"
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ContactPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

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
                  <h1 className={classes.subpageTitle}>Contact</h1>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.titleContainer}>
          <h2 className={classes.title}>Contact</h2>
        </div>
        <div className={classes.mainContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <img
                src={require("assets/img/contact.jpg")}
                alt="Hao Huang"
                width="100%"
                className={classes.imgRoundedCircle + " " + classes.imgFluid}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid
                  container
                  direction="column"
                  justify="flex-start"
                  alignItems="flex-start"
              >
                <div>
                  <Typography variant="h4" component="h2">
                    Hao Huang
                  </Typography>
                </div>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                    <Icon className={classes.contactIcon}>email</Icon>
                    <h6>
                      <a href={"mailto:" + contact.email} className={classes.contactLink}>
                        {contact.email}
                      </a>
                    </h6>
                </Grid>
                  <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                  >
                    <Icon className={classes.contactIcon}>phone</Icon>
                    <h6>
                      <a href={"tel:" + contact.tel} className={classes.contactLink}>
                        {contact.tel}
                      </a>
                    </h6>
                  </Grid>
                  <Grid
                      container
                      direction="row"
                      justify="flex-start"
                      alignItems="center"
                  >
                    <Icon className={classes.contactIcon}>print</Icon>
                    <h6>
                        {contact.fax}
                    </h6>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
}
