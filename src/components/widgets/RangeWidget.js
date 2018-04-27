import React from 'react';
import PropTypes from 'prop-types';
import { Slider } from 'antd';

import { rangeSpec } from 'react-jsonschema-form/lib/utils';

function RangeWidget(props) {
  const {
    schema,
  } = props;
  return (
    <div className="field-range-wrapper">
      <Slider {...props} {...rangeSpec(schema)} />
    </div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  RangeWidget.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    schema: PropTypes.object.isRequired,
    registry: PropTypes.object.isRequired,
  };
}

export default RangeWidget;
