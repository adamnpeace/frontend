import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Topics from './Topics/Topics';
import Signup from './Auth/Signup/Signup';
import Login from './Auth/Login/Login';
import Forgot from './Auth/Forgot/Forgot';
import Labs from './Labs/Labs';

const NotFound = () => (
  <section className="hero is-primary is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container">
        <Link to="/">
          <h1 className="is-family-secondary" style={{ 'font-size': '80pt' }}>
            404.
          </h1>
        </Link>
      </div>
    </div>
  </section>
);

const LabLoader = ({ match: { params } }) => {
  const { id } = params;
  return <Labs id={id} />;
};

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/topics" component={Topics} />
    <Route path="/labs/:id" render={props => <LabLoader {...props} />} />
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/forgot" component={Forgot} />
    <Route component={NotFound} />
  </Switch>
);
export default Router;
