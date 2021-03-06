import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import MuiAppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class AppBar extends Component {
  static propTypes = {
    isLogin: PropTypes.bool,
    handleOpen: PropTypes.func,
  };
  renderLoginButton = () => {
    if (this.props.isLogin) {
      return null;
    }
    return (
      <FlatButton
        label="Login"
        containerElement={<Link to="/login" />}
      />
    );
  };
  render() {
    const { handleOpen } = this.props;
    return (
      <MuiAppBar
        title="清離子黑客松"
        iconElementRight={this.renderLoginButton()}
        onLeftIconButtonTouchTap={handleOpen}
      />
    );
  }
}

export default AppBar;

