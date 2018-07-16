import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { pushStep, popStep, dummyDispatch } from '../actions';

const Screen = (props) => {
  const { currentStep, dispatch, wizardBackEnabled } = props;
  const enabledButtonClass = classnames({
    'btn brdr--rounded': true,
     'btn--green': !!props.pushStep,
     'btn--gray': !props.pushStep,
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
        <div className='grd-row'>
          <h3 className='grd-row-col-6 txt--center'>{ currentStep }</h3>
        </div>
        <div className={screenA}>
          <p className='grd-row-col-6 txt--center'>On first screen pressing back exits the wizard</p>
        </div>
        <div className={hide}>
          <div className='grd-row-col-6 p2'>
            <p className>Disabling wizard back enables <strong>Browser's</strong> back</p>
            <button
              className={wizardBackToggleClass}
              onClick={() => {
                wizardBackEnabled ?
                props.navigation.disableWizardBack() :
                props.navigation.enableWizardBack();
                dispatch(dummyDispatch(props.navigation));
              }}>{
                wizardBackEnabled ? `Disable Wizard back` :
                `Enable wizard back`
              }</button>
          </div>
        </div>
        <div className='grd-row p2'>
          <div className='grd-row-col-3-6'>
            <button
              className='btn brdr--rounded'
              onClick={() => {
                if (props.popStep) {
                  props.popStep({
                    cb: () => dispatch(popStep(props.navigation))
                  })
                }
              }}>Back</button>
          </div>
          <div className='grd-row-col-3-6'>
            <button
              className={enabledButtonClass}
              disabled={!props.pushStep}
              onClick={() => {
                props.pushStep({
                  cb: () => dispatch(pushStep(props.navigation))
                })
              }}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
