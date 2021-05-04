import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import Carousel from "react-slick";

import styles from "assets/jss/material-kit-react/views/common.js";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

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
                  <h1 className={classes.title}>Hao Huang</h1>
                  <h3 className={classes.subtitle}>
                    黄俊豪
                  </h3>
                </div>
              </div>
              <Button
                color="primary"
                className={classes.navLink}
                component={ Link } to="/biography"
                size="lg"
              >
                Learn More
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      
      <Carousel {...settings}>
        <div>
          <img src={require("assets/img/slide-1.jpg")} className="slick-image" alt="Hao Huang" />
          <div className="slick-caption">
            <Button
              color="outlinedTransparent"
              className={classes.navLink}
              component={ Link } to="/biography"
              size="lg"
            >
              Biography
            </Button>
          </div>
        </div>
        <div>
          <img src={require("assets/img/slide-2.jpg")} className="slick-image" alt="Hao Huang" />
          <div className="slick-caption">
            <Button
              color="outlinedTransparent"
              className={classes.navLink}
              component={ Link } to="/performance-activities"
              size="lg"
            >
              Performance Activities
            </Button>
          </div>
        </div>
        <div>
          <img src={require("assets/img/slide-3.jpg")} className="slick-image" alt="Hao Huang" />
          <div className="slick-caption">
            <Button
              color="outlinedTransparent"
              className={classes.navLink}
              component={ Link } to="/reviews"
              size="lg"
            >
              Reviews
            </Button>
          </div>
        </div>
        <div>
          <img src={require("assets/img/slide-4.jpg")} className="slick-image" alt="Hao Huang" />
          <div className="slick-caption">
            <Button
              color="outlinedTransparent"
              className={classes.navLink}
              component={ Link } to="/interview"
              size="lg"
            >
              Interview
            </Button>
          </div>
        </div>
        <div>
          <img src={require("assets/img/slide-5.jpg")} className="slick-image" alt="Hao Huang" />
          <div className="slick-caption">
            <Button
              color="outlinedTransparent"
              className={classes.navLink}
              component={ Link } to="/contact"
              size="lg"
            >
              Contact
            </Button>
          </div>
        </div>
      </Carousel>
      <Footer />
    </div>
  );
}
