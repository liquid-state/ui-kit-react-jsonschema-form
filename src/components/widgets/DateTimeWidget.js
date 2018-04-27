import React from 'react';
import PropTypes from 'prop-types';
import { pad } from 'react-jsonschema-form/lib/utils';

export function utcToLocal(jsonDate) {
  if (!jsonDate) {
    return '';
  }
  const date = new Date(jsonDate);

  const yyyy = pad(date.getFullYear(), 4);
  const MM = pad(date.getMonth() + 1, 2);
  const dd = pad(date.getDate(), 2);
  const hh = pad(date.getHours(), 2);
  const mm = pad(date.getMinutes(), 2);
  const ss = pad(date.getSeconds(), 2);
  const SSS = pad(date.getMilliseconds(), 3);

  return `${yyyy}-${MM}-${dd}T${hh}:${mm}:${ss}.${SSS}`;
}

export function localToUTC(dateString) {
  if (dateString) {
    return new Date(dateString).toJSON();
  }
  return false;
}

function DateTimeWidget(props) {
  const {
    value,
    onChange,
    registry: {
      widgets: { BaseInput },
    },
  } = props;
  return (
    <BaseInput
      type="datetime-local"
      {...props}
      value={utcToLocal(value)}
      onChange={timeValue => onChange(localToUTC(timeValue))}
    />
  );
}

if (process.env.NODE_ENV !== 'production') {
  DateTimeWidget.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    registry: PropTypes.object.isRequired,
  };

  DateTimeWidget.defaultProps = {
    value: '',
  };
}

export default DateTimeWidget;
