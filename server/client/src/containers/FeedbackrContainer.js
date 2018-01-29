import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//react-redux
import { connect } from "react-redux";
import * as actions from "../actions";

//components
import Header from "../components/Header";
import Landing from "../components/Landing";
import Dashboard from "../components/Dashboard";
import SurveyNew from "../components/SurveyNew";

class FeedbackrContainer extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(FeedbackrContainer);
