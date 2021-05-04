import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import HomePage from "views/HomePage/HomePage.js";
import ReviewsPage from "views/ReviewsPage/ReviewsPage.js";
import BiographyPage from "views/BiographyPage/BiographyPage.js";
import ContactPage from "views/ContactPage/ContactPage.js";
import InterviewPage from "views/InterviewPage/InterviewPage.js";
import PerformanceActivitiesPage from "views/PerformanceActivitiesPage/PerformanceActivitiesPage.js"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/reviews" component={ReviewsPage} />
      <Route path="/biography" component={BiographyPage} />
      <Route path="/performance-activities" component={PerformanceActivitiesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/interview" component={InterviewPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
