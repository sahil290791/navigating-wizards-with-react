import { connect } from 'react-redux';
import Screen from '../components/Screen';
import { SCREEN_B } from '../constants';

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    pushStep: (options) => ownProps.navigation.push(SCREEN_B, options),
    popStep: (options) => ownProps.navigation.pop(options),
    dispatch,
  };
};

export default connect(null, mapDispatchToProps)(Screen);
