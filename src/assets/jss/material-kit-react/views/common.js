import { container } from "assets/jss/material-kit-react.js";
import {
  primaryColor
} from "assets/jss/material-kit-react.js";


const commonStyle = {
  container,
  brandContainer: {
    display: "flex",
    justifyContent: "start",
  },
  brand: {
    color: "#FFFFFF",
    maxWidth:"fit-content",
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    marginBottom: "0",
  },
  subpageTitle: {
    fontSize: "4.0rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative",
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.7)",
    color: "#FFFFFF",
    padding: "10px"
  },
  titleContainer: {
    padding: "10px",
    textAlign: "center"
  },
  subtitle: {
    fontSize: "2rem",
    marginTop: "0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  mainContainer: {
    padding: "0px 48px 48px"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },
  event: {
    padding: "10px"
  },
  root: {
    flexGrow: 1,
    display: "flex",
  },
  tabs: {
    borderRight: "1px solid",
  },
  contactContainer: {
    display: "flex",
    alignItems: "flex-start",
  },
  contactIcon: {
    paddingRight: "32px",
  },
  contactLink: {
    color: primaryColor,
    "&:hover": {
      color: primaryColor,
      textDecoration: "underline"
    }
  }
};

export default commonStyle;
