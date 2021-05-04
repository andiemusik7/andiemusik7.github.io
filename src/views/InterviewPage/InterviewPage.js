import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
import { interview } from "../../data/interview.js"

const useStyles = makeStyles(styles);

const interviewContent =[];
  for (const [ , event] of interview.content.entries()) {
    interviewContent.push(
    <div>
      <Typography variant="h6" component="h2">
        {event.question}
      </Typography>
      <Typography>
        {event.response}
      </Typography>
      <br></br>
    </div>
  )
}

export default function ReviewsPage(props) {
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
                  <h1 className={classes.subpageTitle}>Interview</h1>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.titleContainer}>
          <h2 className={classes.title}>Transcript</h2>
        </div>
        <div className={classes.mainContainer}>
          <p>
              {interview.details}
              (
              <a href={interview.source}>
                  Original interview
              </a>
              )
          </p>
          <br></br>
          {interviewContent}
      </div>
      </div>
      <Footer />
    </div>
  );
}
