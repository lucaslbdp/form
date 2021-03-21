import Login from '../pages/Login';
import Menu from '../pages/Menu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Routes() {
  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
    </BrowserRouter>

  );
}

export default Routes;
