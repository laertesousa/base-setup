import ReactGA from 'react-ga';
import getConfig from 'next/config';
const config = getConfig() || {};
let isInitialized = false;

export const initGA = () => {
  const { ANALYTICS_TRACKING_ID } = config.publicRuntimeConfig;
  if (ANALYTICS_TRACKING_ID) {
    ReactGA.initialize(ANALYTICS_TRACKING_ID);
    isInitialized = true;
  }
};

export const logPageView = () => {
  if (!isInitialized) return;
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};

export const logEvent = (category = '', action = '') => {
  if (!isInitialized) return;
  if (category && action) {
    ReactGA.event({ category, action });
  }
};

export const logException = (description = '', fatal = false) => {
  if (!isInitialized) return;
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

export default {
  init: initGA,
  logPageView,
  logEvent,
  logException,
};