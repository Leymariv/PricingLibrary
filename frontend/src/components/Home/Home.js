import * as React from 'react';
import AppFooter from './modules/views/AppFooter';
import Description from './modules/views/Description';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Description />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
