import Navigation from '../helpers/Navigation';

const defaultState = {
  currentStep: 'SCREEN_A',
  wizardBackEnabled: true,
};

const ProfileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PUSH_STEP':
      return Object.assign({}, state, {
        currentStep: Navigation.currentStep(action.navigation),
        wizardBackEnabled: Navigation.isWizardBackEnabled(action.navigation),
      });

    case 'POP_STEP':
      return Object.assign({}, state, {
        currentStep: Navigation.currentStep(action.navigation),
        wizardBackEnabled: Navigation.isWizardBackEnabled(action.navigation),
      });

    case 'DUMMY_DISPATCH':
      return Object.assign({}, state, {
        currentStep: Navigation.currentStep(action.navigation),
        wizardBackEnabled: Navigation.isWizardBackEnabled(action.navigation),
      });

    default:
      return state;
  }
};

export default ProfileReducer;
