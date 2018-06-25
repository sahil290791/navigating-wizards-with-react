import React, { Component } from 'react';

import {
  USER_DETAILS_SCREEN,
  SOCIAL_DETAILS_CAPTURE_SCREEN,
  HOBBIES_SCREEN,
  COLLEGE_DETAILS_SCREEN,
} from '../../constants';
import UserDetailsScreen from './UserDetailsScreen';

class ProfileWizard extends Component {
  state = {
    step: USER_DETAILS_SCREEN,
  }

  render() {
    const { step } = this.state;
    let currentStep = null;
    switch(step) {
      case USER_DETAILS_SCREEN:
        currentStep = <UserDetailsScreen />;
        break;

      case SOCIAL_DETAILS_CAPTURE_SCREEN:
        currentStep = (
          <div>
            <div>
              <strong>Hey!!</strong>
            </div>
          </div>
        );
        break;

      case HOBBIES_SCREEN:
        currentStep = (
          <div>
            <div>
              <strong>Hey!!</strong>
            </div>
          </div>
        );
        break;

      case COLLEGE_DETAILS_SCREEN:
        currentStep = (
          <div>
            <div>
              <strong>Hey!!</strong>
            </div>
          </div>
        );
        break;

    }
    return currentStep;
  }
};

export default ProfileWizard;
