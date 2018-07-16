import { combineReducers } from 'redux';
import WizardReducer from './WizardReducer';

export default combineReducers({
  navigation: WizardReducer
});
