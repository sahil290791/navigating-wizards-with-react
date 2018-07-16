class Navigation {
  static currentStep(navigation) {
    const index = navigation._steps.length - 1;
    return navigation._steps[index];
  }

  static isEmpty(navigation) {
    return navigation._steps.length < 2;
  }

  constructor(data) {
    const { navigation, currentStep = null, browserBackEnabled = false } = data;
    this._navigation = navigation;
    this._browserBackEnabled = browserBackEnabled;
    if (currentStep) {
      this._steps = [currentStep];
    } else {
      // initialize with a currentStep
      this._steps = [];
    }
    this._currentStep = currentStep;
  }

  navigate(step, { skipStep = false, cb = null }) {
    this.changeStep(step);
    if (!skipStep) {
      this._steps.push(step);
    }
    if (cb) {
      cb();
    }
  }

  goBack({ cb = null }) {
    if (this._browserBackEnabled || Navigation.isEmpty(this)) {
      this._navigation.goBack();
    } else {
      this._steps.pop();
      this.changeStep(Navigation.currentStep(this));
    }
    if (cb) {
      cb();
    }
  }

  changeStep(step) {
    this._currentStep = step;
  }

  enableWizardBack(action) {
    this._browserBackEnabled = false;
  }

  disableWizardBack() {
    // exits wizard if user presses back
    this._browserBackEnabled = true;
  }

  isWizardBackEnabled() {
    return !this._browserBackEnabled;
  }

  get currentStep() {
    return this._currentStep;
  }
};

export default Navigation;
