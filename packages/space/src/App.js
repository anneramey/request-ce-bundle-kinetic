import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { compose, lifecycle, withHandlers } from 'recompose';
import { Route, Switch, Redirect } from 'react-router-dom';
import { push } from 'connected-react-router';
import { Utils, Loading, ErrorNotFound } from 'common';
import { actions } from './redux/modules/spaceApp';
import { actions as setupActions } from './redux/modules/settingsSetup';
import * as selectors from 'app/src/redux/selectors';
import { Sidebar } from './components/Sidebar';
import { Sidebar as SettingsSidebar } from './components/settings/Sidebar';
import { About } from './components/about/About';
import { AlertForm } from './components/alerts/AlertForm';
import { Alerts } from './components/alerts/Alerts';
import { Settings } from './components/settings/Settings';
import { Discussion } from './components/discussion/Discussion';
import { Home } from './components/home/Home';
import { Notifications } from './components/notifications/Notifications';
import { ViewProfile } from './components/profile/ViewProfile';
import { TeamContainer } from './components/teams/TeamContainer';
import { TeamsContainer } from './components/teams/TeamsContainer';
import { IsolatedForm } from './components/shared/IsolatedForm';
import { FormList } from './components/default_kapp/FormList';
import { Wizard } from './components/settings/setup/Wizard';
import './assets/styles/master.scss';

export const AppComponent = props => {
  if (props.loading) {
    return <Loading text="App is loading ..." />;
  }
  return props.render({
    sidebar: !props.isGuest &&
      !props.setupRequired && (
        <Switch>
          <Route
            path="/settings"
            render={() => (
              <SettingsSidebar settingsBackPath={props.settingsBackPath} />
            )}
          />
          <Route
            render={() => (
              <Sidebar
                kapps={props.kapps}
                teams={props.teams}
                isSpaceAdmin={props.isSpaceAdmin}
                openSettings={props.openSettings}
              />
            )}
          />
        </Switch>
      ),
    main: (
      <Fragment>
        <Notifications />
        <main className="package-layout package-layout--space">
          {props.setupRequired ? (
            <Wizard />
          ) : (
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/alerts" exact component={Alerts} />
              <Route path="/alerts/:id" exact component={AlertForm} />
              <Route path="/discussions/:id" exact component={Discussion} />
              <Route path="/profile/:username" exact component={ViewProfile} />
              <Route path="/settings" component={Settings} />
              <Route path="/teams" exact component={TeamsContainer} />
              <Route path="/teams/:slug" exact component={TeamContainer} />
              <Route path="/kapps/:kappSlug" exact component={FormList} />
              <Route
                path="/kapps/:kappSlug/forms/:formSlug"
                exact
                component={IsolatedForm}
              />
              <Route
                path="/kapps/:kappSlug/submissions/:id"
                exact
                component={IsolatedForm}
              />
              <Route
                path="/kapps/:kappSlug/forms/:formSlug/submissions/:id"
                exact
                component={IsolatedForm}
              />
              <Route
                path="/datastore/forms/:slug/submissions/:id"
                render={({ match }) => (
                  <Redirect
                    to={`/settings/datastore/${match.params.slug}/${
                      match.params.id
                    }`}
                  />
                )}
              />
              <Route
                path="/datastore/forms/:slug"
                render={({ match }) => (
                  <Redirect
                    to={`/settings/datastore/${match.params.slug}/new`}
                  />
                )}
              />
              <Route
                path="/reset-password"
                render={() => <Redirect to="/" />}
              />
              <Route component={ErrorNotFound} />
            </Switch>
          )}
        </main>
      </Fragment>
    ),
  });
};

export const mapStateToProps = state => ({
  loading: state.space.spaceApp.appLoading,
  setupRequired: state.space.settingsSetup.setupRequired,
  kapps: state.app.kapps
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter(kapp => kapp.slug !== 'admin'),
  teams: Utils.getTeams(state.app.profile).sort((a, b) =>
    a.name.localeCompare(b.name),
  ),
  isSpaceAdmin: state.app.profile.spaceAdmin,
  isGuest: selectors.selectIsGuest(state),
  pathname: state.router.location.pathname,
  settingsBackPath: state.space.spaceApp.settingsBackPath || '/',
});
const mapDispatchToProps = {
  fetchSettings: actions.fetchAppSettings,
  setSettingsBackPath: actions.setSettingsBackPath,
  validateSetup: setupActions.validateSetup,
};

export const App = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withHandlers({
    openSettings: props => () => props.setSettingsBackPath(props.pathname),
  }),
  lifecycle({
    componentWillMount() {
      this.props.fetchSettings();
      this.props.validateSetup();
    },
  }),
)(AppComponent);
