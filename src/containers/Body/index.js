import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import UserProfile from '../../containers/UserProfile';
import Test from '../../components/Text';
import DashBoard from '../DashBoard';
class Body extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/a" component={UserProfile} />
        <Route exact path="/" component={DashBoard} />
      </Switch>
    );
  }
}
export default Body;
