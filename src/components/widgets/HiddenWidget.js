import React from 'react';
import PropTypes from 'prop-types';

function HiddenWidget({ id, value, registry }) {
  const { BaseInput } = registry.widgets;
  return (
    <BaseInput
      htmlType="hidden"
      id={id}
      value={typeof value === 'undefined' ? '' : value}
    />
  );
}

if (process.env.NODE_ENV !== 'production') {
  HiddenWidget.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]).isRequired,
    registry: PropTypes.object.isRequired,
  };
}

export default HiddenWidget;
