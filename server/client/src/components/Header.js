import React from "react";
import { Link } from "react-router-dom";

//react-redux
import { connect } from "react-redux";

//components
import Payments from "./Payments";

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return [
          <li key="1">
            <a href="/auth/google">Login with Google</a>
          </li>,
          <li key="2">
            <a href="/auth/facebook">Login with Facebook</a>
          </li>
        ];
      default:
        return [
          <li key="3" style={{ margin: "0 10px" }}>
            <Payments />
          </li>,
          <li key="4">Credits: {this.props.auth.credits}</li>,
          <li key="5">
            <a href="api/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper indigo lighten-2">
          <Link to={this.props.auth ? "/surveys" : "/"} className="brand-logo">
            Feedbackr
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(mapStateToProps)(Header);
