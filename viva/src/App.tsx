import React from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';

import ListOfCustomer from './components/customer/List'
import CreateEditCustomer from './components/customer/CreateEdit';
import NavBar from './components/layout/Navbar';
import Home from './components/Home';

class App extends React.Component<RouteComponentProps<any>> {
  public render() {
    return (
      <div>
        <NavBar />
        <br />
        <div className="container">
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/customers'} exact component={ListOfCustomer} />
            <Route path={'/customers/create'} exact component={CreateEditCustomer} />
            <Route path={'/customers/edit/:customerId'} exact component={CreateEditCustomer} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);