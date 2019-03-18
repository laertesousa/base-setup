import React from 'react';
import Head from 'next/head';

import HomePageView from 'views/HomePage';

class HomePage extends React.Component {
  static async getInitialProps() { return {}; }

  render() {
    return (
      <React.Fragment>
        <Head>
          <title>Home</title>
        </Head>
        <HomePageView />
      </React.Fragment>
    )
  }
}

export default HomePage;
