import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker as AntDatePicker } from 'antd';

function DateWidget(props) {
  const {
    onChange,
    registry: {
      widgets: { BaseInput },
    },
  } = props;

  if (navigator.userAgent.includes('Android')) {
    return (
      <AntDatePicker
        {...props}
        onChange={date => props.onChange(date.format('YYYY-MM-DD'))}
        onBlur={props.onBlur && (event => props.onBlur(props.id, event.target.value))}
        onFocus={props.onFocus && (event => props.onFocus(props.id, event.target.value))}
      />
    );
  }

  return (
    <BaseInput
      type="date"
      {...props}
      onChange={value => onChange(value || undefined)}
    />
  );
}

if (process.env.NODE_ENV !== 'production') {
  DateWidget.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    registry: PropTypes.object.isRequired,

    id: PropTypes.string,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  };

  DateWidget.defaultProps = {
    value: '',
    id: undefined,
    onBlur: () => {},
    onFocus: () => {},
  };
}

export default DateWidget;
