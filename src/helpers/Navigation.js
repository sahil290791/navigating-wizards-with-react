const Navigation = {
  init(initData) {
    const { navigation, currentStep = null, browserBackEnabled = false } = initData;
    this._navigation = navigation;
    this._browserBackEnabled = browserBackEnabled;
    if (currentStep) {
      this._steps = [currentStep];
    } else {
      this._steps = [];
    }
    this._currentStep = currentStep;
  },

  push(step, { skipStep = false, cb = null }) {
    this.changeStep(step);
    if (!skipStep) {
      this._steps.push(step);
      if (cb) {
        cb();
      }
    }
  },

  pop({ cb = null }) {
    if (this._browserBackEnabled) {
      this._navigation.goBack();
    } else {
      this._steps.pop();
      const index = this._steps.length - 1;
      if (index > -1) {
        this.changeStep(this._steps[index]);
        if (cb) {
          cb();
        }
      } else {
        // browser back
        this._navigation.goBack();
      }
    }
  },

  changeStep(step) {
    this._currentStep = step;
  },

  currentStep() {
    return this._currentStep;
  },

  enableWizardBack(action) {
    this._browserBackEnabled = false;
  },

  disableWizardBack() {
    // exits wizard if user presses back
    this._browserBackEnabled = true;
  },

  isWizardBackEnabled() {
    return !this._browserBackEnabled;
  }
};

export default Navigation;
