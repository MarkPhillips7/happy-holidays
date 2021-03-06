import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavBrand, Nav, NavItem, CollapsibleNav } from 'react-bootstrap';
import DocumentMeta from 'react-document-meta';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { pushState } from 'redux-router';
import connectData from 'helpers/connectData';
import config from '../../config';

function fetchData(getState, dispatch) {
  const promises = [];
  if (!isInfoLoaded(getState())) {
    promises.push(dispatch(loadInfo()));
  }
  if (!isAuthLoaded(getState())) {
    promises.push(dispatch(loadAuth()));
  }
  return Promise.all(promises);
}

@connectData(fetchData)
@connect(
  state => ({user: state.auth.user}),
  {logout, pushState})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState(null, '/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState(null, '/');
    }
  }

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  }

  render() {
    const {user} = this.props;
    const styles = require('./App.scss');
    return (
      <div className={styles.app}>
        <DocumentMeta {...config.app}/>
        <Navbar fixedTop toggleNavKey={0}>
            <NavBrand>
              <IndexLink to="/" activeStyle={{color: 'green'}}>
                <div className={styles.brand}/>
                <span>{config.app.title}</span>
              </IndexLink>
            </NavBrand>

            <CollapsibleNav eventKey={0}>
              <Nav navbar>
                <LinkContainer to="/2019">
                  <NavItem eventKey={1}>2019</NavItem>
                </LinkContainer>
                <LinkContainer to="/2017">
                  <NavItem eventKey={2}>2017</NavItem>
                </LinkContainer>
                <LinkContainer to="/2015">
                  <NavItem eventKey={3}>2015</NavItem>
                </LinkContainer>
                <LinkContainer to="/2014">
                  <NavItem eventKey={4}>2014</NavItem>
                </LinkContainer>
                <LinkContainer to="/2012">
                  <NavItem eventKey={5}>2012</NavItem>
                </LinkContainer>
                <LinkContainer to="/2011">
                  <NavItem eventKey={6}>2011</NavItem>
                </LinkContainer>
                <LinkContainer to="/2009">
                  <NavItem eventKey={7}>2009</NavItem>
                </LinkContainer>
                <LinkContainer to="/2008">
                  <NavItem eventKey={7}>2008</NavItem>
                </LinkContainer>
              </Nav>
              {user &&
              <p className={styles.loggedInMessage + ' navbar-text'}>Logged in as <strong>{user.name}</strong>.</p>}
            </CollapsibleNav>
          </Navbar>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
