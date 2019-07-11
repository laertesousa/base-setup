import React from 'react';
import PropTypes from 'prop-types';

import MuiTextField from '@material-ui/core/TextField';
import MuiInputAdornment from '@material-ui/core/InputAdornment/InputAdornment';

const TextField = ({ renderStartIcon, renderEndIcon, error, ...props }) => {
  const dynamicProps = props;
  if (error) {
    dynamicProps.error = true;
    dynamicProps.helperText = <b>{error}</b>;
  }
  const { InputProps = {} } = dynamicProps;
  if (renderStartIcon) {
    InputProps.startAdornment = (
      <MuiInputAdornment position="start">{renderStartIcon()}</MuiInputAdornment>
    );
  }
  if (renderEndIcon) {
    InputProps.endAdornment = (
      <MuiInputAdornment position="end">{renderEndIcon()}</MuiInputAdornment>
    );
  }
  dynamicProps.InputProps = InputProps;

  return <MuiTextField fullWidth {...dynamicProps} />;
};

TextField.propTypes = {
  error: PropTypes.string,
  margin: PropTypes.string,
  placeholder: PropTypes.string,
  renderStartIcon: PropTypes.func,
  renderEndIcon: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.string,
};

TextField.defaultProps = {
  error: null,
  margin: 'normal',
  placeholder: '',
  renderStartIcon: null,
  renderEndIcon: null,
  type: 'text',
  value: '',
  variant: 'outlined',
};

export default TextField;
