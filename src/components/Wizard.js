import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from '../helpers/Navigation';
import {
  SCREEN_A,
  SCREEN_B,
  SCREEN_C
} from '../constants';

import ScreenA from '../containers/ScreenA';
import ScreenB from '../containers/ScreenB';
import ScreenC from '../containers/ScreenC';

class Wizard extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      ...prevState,
      ...nextProps
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      currentStep: 'SCREEN_A',
      wizardBackEnabled: true,
    };
    this.navigation = new Navigation({
      navigation: this.props.history,
      currentStep: this.state.currentStep,
      browserBackEnabled: !this.state.wizardBackEnabled,
    });
  }

  render() {
    const { currentStep, wizardBackEnabled } = this.state;
    let step = null;
    switch(currentStep) {
      case SCREEN_A:
        step = <ScreenA currentStep={currentStep} navigation={this.navigation} wizardBackEnabled={wizardBackEnabled} />;
        break;

      case SCREEN_B:
        step = <ScreenB currentStep={currentStep} navigation={this.navigation} wizardBackEnabled={wizardBackEnabled} />;
        break;

      case SCREEN_C:
        step = <ScreenC currentStep={currentStep} navigation={this.navigation} wizardBackEnabled={wizardBackEnabled} />;
        break;

    }
    return step;
  }
};

const mapStateToProps = (state) => {
  const { navigation } = state;
  return {
    currentStep: navigation.currentStep,
    wizardBackEnabled: navigation.wizardBackEnabled,
  };
}

export default connect(mapStateToProps)(Wizard);
