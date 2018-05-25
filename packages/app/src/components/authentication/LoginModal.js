import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import { login } from '../../utils/authentication';
import { actions } from '../../redux/modules/auth';
import { singleSignOn } from '../../utils/singleSignOn';

export const LoginModalComponent = props =>
  props.showing && (
    <Modal isOpen toggle={props.cancelled} size="lg">
      <div className="modal-header">
        <h4 className="modal-title">
          <button
            type="button"
            className="btn btn-link"
            onClick={props.cancelled}
          >
            Cancel
          </button>
          <span>Sign In</span>
          <span />
        </h4>
      </div>
      <form className="login-form-container" onSubmit={props.handleLogin}>
        <ModalBody>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              autoFocus
              className="form-control"
              id="email"
              placeholder="wally@kineticdata.com"
              value={props.email}
              onChange={props.handleEmail}
              ref={props.setEmailEl}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              value={props.password}
              onChange={props.handlePassword}
            />
          </div>
          <span className="text-danger">{props.error || ' '}</span>
          <hr />
          <button
            type="button"
            className="btn btn-link"
            onClick={props.handleSingleSignOn}
          >
            Use Single Sign-on
          </button>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-primary"
            disabled={!props.email || !props.password}
          >
            Sign In
          </button>
        </ModalFooter>
      </form>
    </Modal>
  );

export const mapStateToProps = state => ({
  showing: state.app.auth.modalLogin,
});

const mapDispatchToProps = {
  cancelled: actions.modalLoginCancelled,
  success: actions.modalLoginSuccess,
};

const handleLogin = props => event => {
  event.preventDefault();
  login(props.email, props.password)
    .then(props.success)
    .catch(props.handleAuthError);
};

const handleSingleSignOn = props => event => {
  singleSignOn('https://www.kineticdata.com', { width: 600, height: 400 })
    .then(props.success)
    .catch(props.handleAuthError);
};

export const LoginModal = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('email', 'setEmail', ''),
  withState('password', 'setPassword', ''),
  withState('error', 'setError', ''),
  withHandlers({
    handleEmail: props => event => props.setEmail(event.target.value),
    handlePassword: props => event => props.setPassword(event.target.value),
    handleAuthError: props => error => {
      props.setError(error.response ? error.response.data.error : error);
      props.setPassword('');
    },
  }),
  withHandlers({ handleLogin, handleSingleSignOn }),
  withHandlers(() => {
    let emailEl = null;
    return {
      setEmailEl: () => el => {
        emailEl = el;
      },
      focusEmailEl: () => () => {
        emailEl.focus();
      },
    };
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (this.props.showing && !nextProps.showing) {
        this.props.setEmail('');
        this.props.setPassword('');
        this.props.setError('');
      }
    },
    componentDidUpdate(prevProps) {
      if (this.props.showing && !prevProps.showing) {
        this.props.focusEmailEl();
      }
    },
  }),
)(LoginModalComponent);
