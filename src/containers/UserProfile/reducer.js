import {LOGIN_SUCCESS} from '../../constants/actionTypes';
const initialState = {
    isAuthenticated: true,
    loaded: true,
    lang: 'en',
    userName: 'Dung'
}
const user = (state = initialState, action) => {
  switch (action.type) {
      case LOGIN_SUCCESS:
      console.log('reducer run');
        return {
            ...state,
            userName:action.payload
        }
  
      default:
          return state;
  }
}
export default user