import React from 'react';
import {IndexRoute, Route} from 'react-router';
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import {
    App,
    Chat,
    // Home,
    Widgets,
    About,
    Login,
    LoginSuccess,
    Greetings2008,
    Greetings2009,
    Greetings2011,
    Greetings2012,
    Greetings2014,
    Greetings2015,
    Greetings2017,
    Greetings2019,
    NotFound,
  } from 'containers';

export default (store) => {
  const requireLogin = (nextState, replaceState, cb) => {
    function checkAuth() {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replaceState(null, '/');
      }
      cb();
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth);
    } else {
      checkAuth();
    }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Greetings2019}/>

      { /* Routes requiring login */ }
      <Route onEnter={requireLogin}>
        <Route path="chat" component={Chat}/>
        <Route path="loginSuccess" component={LoginSuccess}/>
      </Route>

      { /* Routes */ }
      <Route path="about" component={About}/>
      <Route path="login" component={Login}/>
      <Route path="2008" component={Greetings2008}/>
      <Route path="2009" component={Greetings2009}/>
      <Route path="2011" component={Greetings2011}/>
      <Route path="2012" component={Greetings2012}/>
      <Route path="2014" component={Greetings2014}/>
      <Route path="2015" component={Greetings2015}/>
      <Route path="2017" component={Greetings2017}/>
      <Route path="2019" component={Greetings2019}/>
      <Route path="widgets" component={Widgets}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
