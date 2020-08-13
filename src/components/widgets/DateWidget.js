import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { DatePicker as AntDatePicker } from 'antd';

function DateWidget(props) {
  const {
    onChange,
    registry: {
      widgets: { BaseInput },
    },
  } = props;

  const setReadOnly = useCallback((open) => {
    if (!open) return;

    setTimeout(() => {
      const d = document.querySelector('.ant-calendar-picker-container input');
      d.setAttribute('readonly', true);
    }, 10);
  });

  if (navigator.userAgent.includes('Android')) {
    return (
      <AntDatePicker
        {...props}
        value={moment(props.value)}
        onChange={date => props.onChange(date.format('YYYY-MM-DD'))}
        onBlur={props.onBlur && (event => props.onBlur(props.id, event.target.value))}
        onFocus={props.onFocus && (event => props.onFocus(props.id, event.target.value))}
        onOpenChange={setReadOnly}
      />
    );
  }

  return <BaseInput type="date" {...props} onChange={value => onChange(value || undefined)} />;
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
    value: undefined,
    id: undefined,
    onBlur: () => {},
    onFocus: () => {},
  };
}

export default DateWidget;
