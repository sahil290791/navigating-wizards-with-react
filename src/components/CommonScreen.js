import React from 'react';
import classnames from 'classnames';

import Footer from './Footer';
import Header from './Header';

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
        <Header
          title={`Screen ${screenName}`}
          onClick={history.goBack}
        />
        <div className="grd-row p2">
          <Footer
            label="Next"
            enabledButtonClass={enabledButtonClass}
            onClick={() => history.push(`/screen/${nextScreenMapping[screenName] || 'A'}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default ScreenA;
