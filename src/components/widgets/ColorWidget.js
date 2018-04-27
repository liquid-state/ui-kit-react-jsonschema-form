import React from 'react';
import PropTypes from 'prop-types';

function ColorWidget(props) {
  const {
    disabled,
    readonly,
    registry: {
      widgets: { BaseInput },
    },
  } = props;
  return <BaseInput type="color" {...props} disabled={disabled || readonly} />;
}

if (process.env.NODE_ENV !== 'production') {
  ColorWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    registry: PropTypes.object.isRequired,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
  };

  ColorWidget.defaultProps = {
    disabled: false,
    readonly: false,
  };
}

export default ColorWidget;
