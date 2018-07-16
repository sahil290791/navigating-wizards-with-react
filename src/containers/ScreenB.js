import { connect } from 'react-redux';
import Screen from '../components/Screen';
import { SCREEN_C } from '../constants';

const mapDispatchToProps = (dispatch, ownProps) => ({
  pushStep: (options) => ownProps.navigation.navigate(SCREEN_C, options),
  popStep: (options) => ownProps.navigation.goBack(options),
  dispatch,
});

export default connect(null, mapDispatchToProps)(Screen);
