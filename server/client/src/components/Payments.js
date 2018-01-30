import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends React.Component {
  handleToken = token => {
    this.props.handleToken(token);
  };
  render() {
    return (
      <StripeCheckout
        token={this.handleToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        name="Feedbackr"
        description="Get Feedback, Easy"
        amount={500}
      >
        <button className="btn deep-orange lighten-2">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
