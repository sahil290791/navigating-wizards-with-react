import { connect } from 'react-redux';
import Screen from '../components/Screen';

const mapDispatchToProps = (dispatch, ownProps) => ({
  popStep: (options) => ownProps.navigation.goBack(options),
  dispatch,
});

export default connect(null, mapDispatchToProps)(Screen);
