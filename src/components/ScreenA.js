import React from 'react';
import classnames from 'classnames';

const getScreenName = (path) => {
  return path.split('/')[2].toUpperCase();
};

const nextScreenMapping = {
  A: 'b',
  B: 'c',
  C: 'd'
}

const getQueryStringValue = (key) => {
  return decodeURIComponent(
    window.location.search.replace(new RegExp("^(?:.*[&\\?]" +
      encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&") +
        "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

const ScreenA = (props) => {
  const { history, location } = props;
  const screenName = getScreenName(location.pathname);
  const  jumpedDirectly = getQueryStringValue('jumped_directly') || '0';
  if (screenName == 'C' && jumpedDirectly == '1') {
    setTimeout(function() {
      alert('You have not completed screen B.\nRedirecting you to start of the flow');
      history.replace('/screen/a');
    }, 1000);
  }
  const enabledButtonClass = classnames({
    'btn brdr--rounded': true,
    'btn--green': true,
  });
  return (
    <div className="grd-row">
      <div className="grd bg--off-white p1 center grd-row-col-6--sm grd-row-col-3-6--md">
        <div className="grd-row">
          <h3 className="grd-row-col-6 txt--center">
            Screen {screenName}
          </h3>
        </div>
        <div className="grd-row p2">
          <div className="grd-row-col-3-6">
            <button
              type="button"
              className="btn brdr--rounded"
              onClick={history.goBack}
            >
              Back
            </button>
          </div>
          <div className="grd-row-col-3-6">
            <button
              type="button"
              className={enabledButtonClass}
              onClick={() => history.push(`/screen/${nextScreenMapping[screenName] || 'A'}`)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenA;
