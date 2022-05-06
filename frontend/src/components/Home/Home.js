import * as React from 'react';
import AppFooter from './modules/views/AppFooter';
import Description from './modules/views/Description';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
// import Option from '../Option';
import Bond from '../Bond/Bond';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Description />
      <Bond />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
