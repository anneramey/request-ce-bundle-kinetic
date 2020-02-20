import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/css/font-awesome.css';
import 'typeface-open-sans/index.css';
import './assets/styles/master.scss';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { matchPath } from 'react-router-dom';
import { compose, lifecycle, withHandlers, withProps } from 'recompose';
import { Utils } from 'common';
import { LoginModal } from './components/authentication/LoginModal';
import { Header } from './components/header/Header';
import { actions } from './redux/modules/app';
import { actions as alertsActions } from './redux/modules/alerts';
import { actions as layoutActions } from './redux/modules/layout';
import ServicesApp from 'services';
import QueueApp from 'queue';
import TechBarApp from 'tech-bar';
import DiscussionsApp from 'discussions';
import SettingsApp from 'settings';
import CommentaryApp from 'commentary';
// TODO Remove ScaffoldApp
import ScaffoldApp from 'scaffold';
import { AppProvider } from './AppProvider';

// Mapping of Bundle Package kapp attribute values to App Components
const BUNDLE_PACKAGE_PROVIDERS = {
  services: ServicesApp,
  queue: QueueApp,
  'tech-bar': TechBarApp,
  scaffold: ScaffoldApp,
  commentary: CommentaryApp,
};

const getAppProvider = (kapp, pathname) => {
  if (kapp) {
    return (
      BUNDLE_PACKAGE_PROVIDERS[
        Utils.getAttributeValue(kapp, 'Bundle Package', kapp.slug)
      ] || AppProvider
    );
  } else if (matchPath(pathname, { path: SettingsApp.location })) {
    return SettingsApp;
  } else if (matchPath(pathname, { path: DiscussionsApp.location })) {
    return DiscussionsApp;
  } else if (matchPath(pathname, { path: ScaffoldApp.location })) {
    return ScaffoldApp;
  } else {
    return AppProvider;
  }
};

export const AppComponent = props =>
  !props.loading && (
    <Fragment>
      <LoginModal />
      <props.AppProvider
        appState={{
          ...props.app.toObject(),
          location: `${
            props.kappSlug !== null
              ? `/kapps/${props.kappSlug}`
              : props.AppProvider.location || '/'
          }`,
          actions: {
            refreshApp: props.refreshApp,
          },
          layoutSize: props.layoutSize,
          bundleName: 'request-ce-bundle-kinetic',
        }}
        render={({ main, sidebar, header }) => (
          <div className="app-wrapper">
            {!props.headerHidden && (
              <div className="app-header">
                <Header
                  hasSidebar={sidebar && !props.sidebarHidden}
                  toggleSidebarOpen={props.toggleSidebarOpen}
                />
              </div>
            )}
            <div
              className={`app-body ${
                sidebar
                  ? props.sidebarOpen
                    ? 'open-sidebar'
                    : 'closed-sidebar'
                  : ''
              }`}
            >
              {sidebar && (
                <div className="app-sidebar-container">{sidebar}</div>
              )}
              <div
                className="app-main-container"
                onClick={
                  sidebar && props.sidebarOpen && props.layoutSize === 'small'
                    ? props.toggleSidebarOpen
                    : undefined
                }
              >
                {main}
              </div>
            </div>
          </div>
        )}
      />
    </Fragment>
  );

export const mapStateToProps = state => ({
  loading: state.app.loading,
  kapps: state.app.kapps,
  sidebarOpen: state.layout.sidebarOpen,
  suppressedSidebarOpen: state.layout.suppressedSidebarOpen,
  layoutSize: state.layout.size,
  kappSlug: state.app.kappSlug,
  kapp: state.app.kapp,
  pathname: state.router.location.pathname,
  locale: state.app.locale,
  profile: state.app.profile,
  space: state.app.space,
  locales: state.app.locales,
  timezones: state.app.timezones,
  version: state.app.coreVersion,
  app: state.app,
});

export const mapDispatchToProps = {
  loadApp: actions.fetchApp,
  fetchAlertsRequest: alertsActions.fetchAlertsRequest,
  setSidebarOpen: layoutActions.setSidebarOpen,
  setSuppressedSidebarOpen: layoutActions.setSuppressedSidebarOpen,
};

export const App = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withProps(props => {
    const AppProvider = getAppProvider(props.kapp, props.pathname);
    const shouldSuppressSidebar =
      AppProvider.shouldSuppressSidebar &&
      AppProvider.shouldSuppressSidebar(props.pathname, props.kappSlug);
    const sidebarOpen = shouldSuppressSidebar
      ? props.suppressedSidebarOpen
      : props.sidebarOpen;
    const headerHidden =
      AppProvider.shouldHideHeader &&
      AppProvider.shouldHideHeader(props.pathname, props.kappSlug);
    const sidebarHidden =
      AppProvider.shouldHideSidebar &&
      AppProvider.shouldHideSidebar(props.pathname, props.kappSlug);
    return {
      AppProvider,
      shouldSuppressSidebar,
      sidebarOpen,
      headerHidden,
      sidebarHidden,
    };
  }),
  withHandlers({
    toggleSidebarOpen: props => () =>
      props.shouldSuppressSidebar
        ? props.setSuppressedSidebarOpen(!props.sidebarOpen)
        : props.setSidebarOpen(!props.sidebarOpen),
    refreshApp: props => () => props.loadApp(),
  }),
  lifecycle({
    componentDidMount() {
      this.props.loadApp(true);
      this.props.fetchAlertsRequest();
    },
  }),
)(AppComponent);
