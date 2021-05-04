import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
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
import { reviews } from "../../data/reviews.js"

const useStyles = makeStyles(styles);

function QuoteCard(props) {
  const { quote, source, location} = props;
  return (
    <div>
      <Typography>
        "{quote}"
      </Typography>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Typography variant="subtitle" color="primary">
          {location}
        </Typography>
        <Typography variant="subtitle">
          - {source}
        </Typography>
      </Grid>
    </div>
  );
}

export default function ReviewsPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const quoteCards = [];
  for (const [ , event] of reviews.content.entries()) {
    let locationValue;
    if (event.hasOwnProperty('location')) {
      locationValue = event.location;
    }
    quoteCards.push(
      <Grid item xs={12} sm={6} md={4}>
        <QuoteCard
          quote={event.quote}
          source={event.source}
          location={locationValue}
        />
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
              <div className={classes.brandContainer}>
                <div className={classes.brand}>
                  <h1 className={classes.subpageTitle}>Reviews</h1>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.titleContainer}>
          <h2 className={classes.title}>Reviews</h2>
        </div>
        <div className={classes.mainContainer}>
          <Grid container spacing={6}>
            {quoteCards}
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
}
