import React from 'react';
import { ArrowRight24 } from '@carbon/icons-react';
import { Link } from 'gatsby';

export class HomepageHeader extends React.Component {
  componentDidMount() {
    document.title = 'Front-End Development';
  }

  render() {
    // Banner image
    const bannerImg = require('../../content/homepage/images/homepage_image.jpg');

    <h3 className="homepage--header__title">
      Front-end  <br />
      Development at IBM
    </h3>

    return (
      <div>
        <span className="homepage--dots" />
        <section className="homepage--header">
          <img src={bannerImg} alt="IBM Product Design System banner image" />
        </section>
        <div className="homepage--callout">
          <div className="ibm--grid">
            <div className="ibm--row">
              <div className="ibm--col-md-4  ibm--col-lg-4 ibm--offset-lg-4">
                <h3>
                IBM is where developers can go to work on things that matter.
                </h3>
              </div>
              <div className="ibm--col-lg-8 ibm--col-md-4">
                <h2 className="bx--type-expressive-paragraph-02">At IBM, we have built a community and program of support where developers can grow their career and their skills. We call this community and program FED@IBM or Front-end Development at IBM.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class HomepageFooter extends React.Component {
  render() {
    return (
      <div className="homepage--callout homepage--callout--blue">
        <div className="ibm--grid">
          <div className="ibm--row">
            <div className="ibm--col-md-4 ibm--col-lg-4 ibm--offset-lg-4">
              <h3>
                Wondering how <br />
                to contribute?
              </h3>
            </div>
            <div className="ibm--col-lg-8 ibm--col-md-4">
              <div className="homepage--footer__info">
                <h2 className="bx--type-expressive-paragraph-01">
                  We welcome all feedback, designs, or ideas in order to produce
                  the best possible experience for our users. If you&rsquo;re
                  interested in contributing, check out our contributing
                  guidelines to get started.
                </h2>
                <Link to="/contributing" alt="Start contributing">
                  Start contributing
                  <ArrowRight24 aria-label="Start Contributing" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
