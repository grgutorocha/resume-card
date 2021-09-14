import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from 'src/pages/Dashboard';

import { constants } from 'src/utils/constants';

const { ROUTE } = constants;

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path={ROUTE.DASHBOARD} component={Dashboard} />
      <Redirect from={ROUTE.HOME} to={ROUTE.DASHBOARD} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
