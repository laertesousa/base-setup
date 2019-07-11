import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head'
import { MuiThemeProvider } from '@material-ui/core/styles';
import JssProvider from 'react-jss/lib/JssProvider';

import getMuiContext from 'helpers/getMuiContext';

import Footer from 'components/Footer';
import NavBar from 'components/NavBar';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  constructor() {
    super();
    this.muiContext = getMuiContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register(`/sw.js`).then(registration => {
          console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, err => {
          console.log('ServiceWorker registration failed: ', err);
        });
      });
    }
  }

  render () {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Base Setup</title>
        </Head>
        <JssProvider
          registry={this.muiContext.sheetsRegistry}
          generateClassName={this.muiContext.generateClassName}
        >
          <MuiThemeProvider
            theme={this.muiContext.theme}
            sheetsManager={this.muiContext.sheetsManager}
          >
            <NavBar />
            <Component muiContext={this.muiContext} {...pageProps} />
            <Footer />
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}
