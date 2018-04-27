import React from 'react';
import PropTypes from 'prop-types';

function PasswordWidget(props) {
  const { BaseInput } = props.registry.widgets;
  return <BaseInput type="password" {...props} />;
}

if (process.env.NODE_ENV !== 'production') {
  PasswordWidget.propTypes = {
    registry: PropTypes.object.isRequired,
  };
}

export default PasswordWidget;
