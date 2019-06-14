import { connect } from 'react-redux';
import Screen from '../components/Screen';
import { SCREEN_B } from '../constants';

const mapDispatchToProps = (dispatch, ownProps) => ({
  pushStep: options => ownProps.navigation.navigate(SCREEN_B, options),
  popStep: options => ownProps.navigation.goBack(options),
  dispatch,
});

export default connect(null, mapDispatchToProps)(Screen);
