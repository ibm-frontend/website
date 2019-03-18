import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import Packages from '../../../package.json';
import GlobalSearch from '../GlobalSearch';
import LeftNav from '../LeftNav';
import favicon32 from '../../content/global/images/favicon.ico';
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  SkipToContent,
  HeaderGlobalBar,
  HeaderGlobalAction,
} from 'carbon-components-react/lib/components/UIShell';
import { WebsiteFooter } from '@carbon/addons-website';

import timestamp from 'raw-loader!../../../build-timestamp';
import '../../styles/index.scss';
import '../../styles/experimental.scss';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.any,
  };

  state = {
    isLeftNavOpen: false,
    isLeftNavFinal: false,
  };

  componentDidMount() {
    this.checkWidth();

    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 200,
      durationMin: 90,
      durationMax: 800,
      easing: 'easeInOutCubic',
      offset: 24
    });
  }

  onToggleBtnClick = (
    clickedPanel,
    finalClickedPanel,
    closePanel,
    finalClosePanel
  ) => {
    if (this.state[clickedPanel]) {
      this.setState({
        [clickedPanel]: false,
      });
      setTimeout(() => {
        this.setState({
          [finalClickedPanel]: true,
        });
      }, 5);
    } else {
      this.setState({
        [finalClickedPanel]: false,
        [finalClosePanel]: true,
      });
      setTimeout(() => {
        this.setState({
          [clickedPanel]: true,
          [closePanel]: false,
        });
      }, 5);
    }
  };

  handleClose = evt => {
    let isTarget = false;
    // `<svg>` in IE11 does not have `.classList`
    if (
      evt.target.classList &&
      evt.target.classList.contains('main-nav-item__heading') &&
      evt.target.classList.contains('main-nav-item__list')
    ) {
      isTarget = true;
    }
    const isSmallerScreen = window.innerWidth < 1056 || screen.width < 1056;
    if (!isTarget && isSmallerScreen) {
      this.setState({
        isLeftNavOpen: false,
      });
    }
  };

  clickToClose = () => {
    this.setState({
      isLeftNavOpen: false,
    });
  };

  checkWidth = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;

      if (width < 1056) {
        this.setState({
          isLeftNavOpen: false,
        });
      }

      document.addEventListener('keydown', evt => {
        if (evt.which === 27 && this.state.isLeftNavOpen) {
          this.setState({
            isLeftNavOpen: false,
          });
        }
      });
    }
  };

  render() {
    const { GATSBY_ENV } = process.env;
    const isInternal = GATSBY_ENV == 'internal';
    const { children } = this.props;
    const version = Packages.dependencies['carbon-components'];
    const reactVersion = Packages.dependencies['carbon-components-react'];
    const currentYear = new Date().getFullYear();
    const lastUpdated = new Intl.DateTimeFormat(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(Number(timestamp)));
    const { isLeftNavOpen } = this.state;

    const is404 = children.key === null;

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                titleInternal
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={
                isInternal
                  ? data.site.siteMetadata.titleInternal
                  : data.site.siteMetadata.title
              }
              meta={[
                {
                  name: 'description',
                  content:
                    'IBM Front-end Development is the home of the FED@IBM program and community.',
                },
                {
                  name: 'keywords',
                  content:
                    'IBM, fed, FED@IBM, front-end development',
                },
              ]}
              link={[
                {
                  rel: 'shortcut icon',
                  type: 'image/png',
                  href: `${favicon32}`,
                },
              ]}>
              <html lang="en" />
            </Helmet>
            <Header aria-label="Header" className="bx--header--website">
              <SkipToContent />
              <HeaderMenuButton
                className="bx--header__action--menu"
                aria-label="Open menu"
                onClick={() =>
                  this.onToggleBtnClick(
                    'isLeftNavOpen',
                    'isLeftNavFinal'
                  )
                }
                isActive={isLeftNavOpen}
              />
              <HeaderName prefix="" to="/" element={Link}>
                <span>IBM</span>&nbsp;Front-end&nbsp;<span>Development</span>
              </HeaderName>
               <HeaderGlobalBar>
                {/* {isInternal ? null : <GlobalSearch />} */}
              </HeaderGlobalBar>
            </Header>

            <LeftNav
              is404Page={is404}
              isLeftNavFinal={this.state.isLeftNavFinal}
              isLeftNavOpen={this.state.isLeftNavOpen}
              location={this.props.location}
              clickToClose={this.clickToClose}
            />

            <div className="container">
              {children}
              <WebsiteFooter
                logoOffset={true}
                linksCol1={[
                  { href: 'https://www.ibm.com/privacy', linkText: 'Privacy' },
                  {
                    href: 'https://www.ibm.com/legal',
                    linkText: 'Terms of Use',
                  },
                  { href: 'https://www.ibm.com', linkText: 'IBM.com' },
                ]}>
                <p>
                  Have questions? <a href="mailto:frontend@us.ibm.com">Email us</a> or open an issue <br />
                  in{' '}
                  <a href="https://github.com/ibm-frontend/program/issues">
                    GitHub.
                  </a>
                </p>
                <p>
                  Last updated {lastUpdated}
                  <br />
                  Copyright © {currentYear} IBM
                </p>
              </WebsiteFooter>
            </div>
          </>
        )}
      />
    );
  }
}

export default Layout;
