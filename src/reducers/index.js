import { combineReducers } from 'redux';
import user from '../containers/UserProfile/reducer';
export default combineReducers({
    user: user
});
