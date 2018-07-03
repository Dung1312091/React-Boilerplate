import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../../components/User';
import { login } from './action';
export class UserProfile extends Component {
  render() {
    return (
      <div>
        <User {...this.props} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.user.email,
    loaded: state.user.loaded,
    lang: state.user.lang,
    userName: state.user.userName
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      dispatch(login(user));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
