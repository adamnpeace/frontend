import React from 'react';
import logo from '../img/logos/text_white.svg';
import ucl from '../img/ucl_grey.svg';
import ms from '../img/ms_grey.svg';

import { tagline } from '../Constants';
import SignupWindow from '../auth/SignupWindow';
import { wrap } from 'module';

import { useGlobalState } from '../state';

function Home() {
  const [isAuthenticated, setIsAuthenticated] = useGlobalState('auth');
  return (
    <div>
      <section class="hero is-primary is-fullheight-with-navbar">
        <div
          class="hero-body flex"
          style={{ 'justify-content': 'space-around', 'flex-wrap': 'wrap', width: '100%' }}
        >
          <div class="level-item has-text-centered">
            <div style={{ maxWidth: '95vw' }}>
              <img src={logo} alt="" />
              <h2 class="subtitle focus">{tagline}</h2>
            </div>
          </div>
          {!isAuthenticated && (
            <div style={{ width: '400px' }}>
              <SignupWindow />
            </div>
          )}
        </div>
      </section>
      <br />
      <section class="section">
        <div class="columns">
          <div class="column has-text-centered">
            <i className="fab fa-accessible-icon fa-3x" />
            <p class="title">Accessibility</p>
            Accessibility is paramount with our development process. mlAcademy is WCAG 2.0 compliant
            so that nobody is left out.
          </div>
          <div class="column has-text-centered">
            <i className="fas fa-university fa-3x" />
            <p class="title">Educational</p>
            <p>
              Designed to enable simple, composable, and reusable refactoring scripts that can
              provide ongoing utility rather than throwing away after each use.
            </p>
          </div>
          <div class="column has-text-centered">
            <i className="fas fa-edit fa-3x" />
            <p class="title">Flexible</p>
            <p>
              New topics and lessons can be added with ease as markdown files through our content
              management system.
            </p>
          </div>
        </div>
      </section>
      <br />
      <section class="section has-background-light">
        <div className="container">
          <div class="columns">
            <div class="column has-text-centered">
              <a href="https://microsoft.com">
                <img src={ms} alt="Microsoft" style={{ height: '40px' }} />
              </a>
            </div>
            <div class="column has-text-centered" />
            <div class="column has-text-centered">
              <a href="https://docs.mlacademy.cf" class="button is-primary is-outlined">
                How did we make it?
              </a>
            </div>
            <div class="column has-text-centered" />
            <div class="column has-text-centered">
              <a href="https://ucl.ac.uk">
                <img src={ucl} alt="UCL" style={{ height: '40px' }} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
