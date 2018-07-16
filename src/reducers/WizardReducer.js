const defaultState = {
  currentStep: 'SCREEN_A',
  wizardBackEnabled: true,
};

const WizardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'PUSH_STEP':
      return Object.assign({}, state, {
        currentStep: action.navigation.currentStep,
        wizardBackEnabled: action.navigation.isWizardBackEnabled(),
      });

    case 'POP_STEP':
      return Object.assign({}, state, {
        currentStep: action.navigation.currentStep,
        wizardBackEnabled: action.navigation.isWizardBackEnabled(),
      });

    case 'DUMMY_DISPATCH':
      return Object.assign({}, state, {
        currentStep: action.navigation.currentStep,
        wizardBackEnabled: action.navigation.isWizardBackEnabled(),
      });

    default:
      return state;
  }
};

export default WizardReducer;
