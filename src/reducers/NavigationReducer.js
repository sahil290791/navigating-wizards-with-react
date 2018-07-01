import Navigation from '../helpers/Navigation';

const defaultState = {
  currentStep: 'SCREEN_A',
  wizardBackEnabled: true,
};

const ProfileReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PUSH_STEP': {
      return Object.assign({}, state, {
        currentStep: Navigation.currentStep(),
        wizardBackEnabled: Navigation.isWizardBackEnabled(),
      });
      break;
    }

    case 'POP_STEP':
      return Object.assign({}, state, {
        currentStep: Navigation.currentStep(),
        wizardBackEnabled: Navigation.isWizardBackEnabled(),
      });

    default:
      return Object.assign({}, state, {
        currentStep: Navigation.currentStep(),
        wizardBackEnabled: Navigation.isWizardBackEnabled(),
      });
  }
};

export default ProfileReducer
