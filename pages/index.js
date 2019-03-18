import React from 'react';

class HomePage extends React.Component {
  static async getInitialProps() { return {}; }

  render() {
    return (
      <React.Fragment>
        <h1>Home Page</h1>
      </React.Fragment>
    )
  }
}

export default HomePage;
