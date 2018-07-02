import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import UserProfile from './containers/UserProfile';
import Test from './components/Text';
import './App.css';

class App extends Component {
  render() {
    const { location, isAuthenticated, loaded, lang } = this.props;
    return (
      <IntlProvider locale={lang}>
        <Switch>
          <Route exact path="/" component={UserProfile} />
          <Route exact path="/user/profile" component={Test} />
        </Switch>
      </IntlProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.user.email,
    loaded: state.user.loaded,
    lang: state.user.lang
  };
};
export default connect(mapStateToProps)(App);
