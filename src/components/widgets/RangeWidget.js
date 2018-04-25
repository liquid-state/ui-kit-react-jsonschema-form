import React from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'antd';

import { rangeSpec } from '../../utils';

function RangeWidget(props) {
  const {
    schema,
    value,
    registry: {
      widgets: { BaseInput },
    },
  } = props;
  return (
    <div className="field-range-wrapper">
      <Slider {...props} {...rangeSpec(schema)} />
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  RangeWidget.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  };
}

export default RangeWidget;
