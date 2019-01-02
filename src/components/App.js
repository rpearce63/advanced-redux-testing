import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "actions";

import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

export class App extends Component {
  renderButton() {
    return (
      <button onClick={() => this.props.changeAuth(!this.props.auth)}>
        {this.props.auth ? "Sign Out" : "Sign In"}
      </button>
    );
  }
  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Post a comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/posts" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};
export default connect(
  mapStateToProps,
  actions
)(App);
