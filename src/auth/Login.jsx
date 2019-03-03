import React from 'react';
import { notify } from 'react-notify-toast';
import { withRouter } from 'react-router-dom';
import Firebase from './firebase';
import useForm from '../useForm';
Login.defaultProps = {
  redirectLink: '/topics'
};
function Login(props) {
  const { values, handleChange, handleSubmit } = useForm(signin);
  const { redirectLink } = props;

  async function signin() {
    const { email, password } = values;
    try {
      await Firebase.login(email, password);
      notify.show('You have been logged in successfully!', 'success');
      props.history.replace(redirectLink);
    } catch (error) {
      notify.show(error.message, 'error');
    }
  }

  return (
    <div className="hero section is-primary is-fullheight-with-navbar flex">
      <div
        className="hero-body flex"
        style={{ 'justify-content': 'space-around', 'flex-wrap': 'wrap', width: '100%' }}
      >
        <div style={{ width: '400px' }}>
          <div className="box">
            <label className="label has-text-centered has-text-weight-semibold is-size-4">
              Log In
            </label>
            <br />

            <form onSubmit={handleSubmit}>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    required
                  />
                </div>
              </div>
              <br />
              <button type="submit" className="button is-block is-info is-fullwidth">
                Login
              </button>
              <br />
            </form>
            <button
              onClick={e => {
                props.history.replace('/signup');
              }}
              className="button is-block is-info is-fullwidth is-outlined"
            >
              Not Signed Up?
            </button>
            <br />

            <a
              onClick={e => {
                props.history.replace('/signup');
              }}
              className="is-size-7"
            >
              Trouble Logging In?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Login);