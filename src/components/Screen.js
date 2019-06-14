import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { push, pop, dummyDispatch } from '../actions';
import Header from './Header';
import Footer from './Footer';

const navigationToggleText = (wizardBackEnabled) => {
  return wizardBackEnabled ? `Disable Wizard back` :
  `Enable wizard back`;
};

const wizardBackButtonInfoText = (wizardBackEnabled) => {
  return wizardBackEnabled ? (
    <p className>Disabling wizard back<strong> mimics </strong>Browser's back</p>
  ) : (
    <p className>Enabling wizard's back<strong> gives the control to </strong>our navigation layer</p>
  );
};

const Screen = (props) => {
  const { currentStep, dispatch, wizardBackEnabled, navigation, popStep, pushStep } = props;
  const enabledButtonClass = classnames({
    'btn brdr--rounded': true,
    'btn--green': !!pushStep,
    'btn--gray': !pushStep,
  });

  const wizardBackToggleClass = classnames({
    'btn brdr--rounded': true,
     'btn--red': wizardBackEnabled,
     'btn--blue': !wizardBackEnabled,
  });

  const screenA  = classnames({
    'hide': currentStep !== 'SCREEN_A',
    'grd-row': true,
  });

  const hide = classnames({
    'hide': currentStep === 'SCREEN_A',
    'grd-row': true,
  });

  return (
    <div className='grd-row'>
      <div className='grd bg--off-white p1 center grd-row-col-6--sm grd-row-col-3-6--md'>
        <Header
          title={currentStep}
          onClick={() => {
            if (popStep) {
              popStep({
                cb: () => dispatch(pop(navigation))
              })
            }
          }}
        />
        <div className={screenA}>
          <p className='grd-row-col-6 txt--center'>On first screen pressing back exits the wizard</p>
        </div>
        <div className={hide}>
          <div className='grd-row-col-6 p2'>
            {wizardBackButtonInfoText(wizardBackEnabled)}
            <button
              className={wizardBackToggleClass}
              onClick={() => {
                wizardBackEnabled ?
                props.navigation.disableWizardBack() :
                props.navigation.enableWizardBack();
                dispatch(dummyDispatch(navigation));
              }}>{navigationToggleText(wizardBackEnabled)}</button>
          </div>
        </div>
        <div className='grd-row p2'>
          <Footer
            label="Next"
            enabledButtonClass={enabledButtonClass}
            disabled={!props.pushStep}
            onClick={() => {
              props.pushStep({
                cb: () => dispatch(push(props.navigation))
              })
            }}
          />
        </div>
      </div>
    </div>
  );
};

Screen.propTypes = {
  currentStep: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  wizardBackEnabled: PropTypes.bool.isRequired,
};

export default Screen;
