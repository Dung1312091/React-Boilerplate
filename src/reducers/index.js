import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from '../containers/UserProfile/reducer';
export default combineReducers({
  user: user,
  test: () => {
    return {};
  },
  router: routerReducer
});
