import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from '../src/layout';
import Head from 'next/head';
// import '../styles/globals.css'

export default function MyApp (props) {
  const { Component, pageProps } = props 

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, []);

  return(
    <>
        <Head>
          {/* PWA primary color */}
          {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
            <title>Brynn Kerin / Wellness Advocate</title>
            <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
        </Head>
      <Layout />
        <Component {...pageProps} />
      
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

