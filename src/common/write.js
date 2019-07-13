import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Writer extends Component {
  render() {
    if (this.props.focused) {
      return <div>写文章</div>;
    } else {
      return <Redirect to="/login" />;
    }
  }
}
const mapStateToProps = state => {
  return {
    focused: state.login.focused
  };
};

export default connect(mapStateToProps)(Writer);
