import { connect } from 'react-redux';
import Screen from '../components/Screen';

const mapDispatchToProps = (dispatch, ownProps) => ({
  popStep: (options) => ownProps.navigation.pop(options),
  dispatch,
});

export default connect(null, mapDispatchToProps)(Screen);
