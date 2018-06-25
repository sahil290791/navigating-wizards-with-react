import AppDispatcher from '../dispatchers/AppDispatcher';
import Constants from '../Constants';
let _enableBackButton = true;
let _customNavigation = null;
let _navigation = null;

const NavigationStore = {
  init(initData) {
    const { navigation } = initData;
    _navigation = navigation;
  },

  navigateBack() {
    if (_customNavigation) {
      _customNavigation();
    } else {
      _navigation.goBack();
    }
  },

  enableCustomNavigation(action) {
    _customNavigation = action;
    _enableBackButton = false;
  },

  disableCustomNavigation() {
    _customNavigation = null;
    _enableBackButton = true;
  },

  enableBackButton() {
    _enableBackButton = true;
  },

  disableBackButton() {
    _enableBackButton = false;
  },

  isBackButtonEnabled() {
    return _enableBackButton;
  },
};

export default WizardHandler;
