import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import PropTypes from 'prop-types';
import flush from 'styled-jsx/server';

class PageDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    const { muiContext } = this.props;

    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content={muiContext ? muiContext.theme.palette.primary.main : null} />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/assets/icon.png" />
          <link rel="manifest" href="/manifest.json" />
          <style
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: `
              body {
                  font-family: 'Source Sans Pro', sans-serif;
                  margin: 0,
                  padding: 0
              }
            ` }}
          />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

PageDocument.getInitialProps = ctx => {
  let muiContext;
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      muiContext = props.muiContext;
      return <Component {...props} />;
    };

    WrappedComponent.propTypes = {
      muiContext: PropTypes.object.isRequired,
    };

    return WrappedComponent;
  });

  let css;
  // It might be undefined, e.g. after an error.
  if (muiContext) {
    css = muiContext.sheetsRegistry.toString();
  }

  return {
    ...page,
    muiContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: css }}
        />
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default PageDocument;
