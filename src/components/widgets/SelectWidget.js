import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

import { asNumber } from 'react-jsonschema-form/lib/utils';


function processValue({ type, items }, value) {
  if (value === '') {
    return undefined;
  } else if (
    type === 'array' &&
    items &&
    ['number', 'integer'].includes(items.type)
  ) {
    return value.map(asNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (type === 'number') {
    return asNumber(value);
  }
  return value;
}

function SelectWidget(props) {
  const {
    schema,
    id,
    options,
    value,
    required,
    disabled,
    readonly,
    multiple,
    autofocus,
    onChange,
    onBlur,
    onFocus,
    placeholder,
  } = props;
  const { enumOptions, enumDisabled } = options;
  const emptyValue = multiple ? [] : '';
  return (
    <Select
      id={id}
      multiple={multiple}
      value={typeof value === 'undefined' ? emptyValue : value}
      required={required}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      onBlur={onBlur && onBlur(id, value)}
      onFocus={onFocus && onFocus(id, value)}
      onChange={(newValue) => {
        onChange(processValue(schema, newValue));
      }}
    >
      {!multiple && !schema.default && <Select.Option value="">{placeholder}</Select.Option>}
      {enumOptions.map(({ value: itemValue, label }) => {
        const disabledComponent = enumDisabled && enumDisabled.indexOf(itemValue) !== -1;
        return (
          <Select.Option value={itemValue} disabled={disabledComponent}>
            {label}
          </Select.Option>
        );
      })}
    </Select>
  );
}

SelectWidget.defaultProps = {
  autofocus: false,
};

if (process.env.NODE_ENV !== 'production') {
  SelectWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    options: PropTypes.shape({
      enumOptions: PropTypes.array,
    }).isRequired,
    value: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    multiple: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
  };

  SelectWidget.defaultProps = {
    value: '',
    required: false,
    disabled: false,
    readonly: false,
    multiple: false,
    onBlur: null,
    onFocus: null,
    placeholder: '',
  };
}

export default SelectWidget;
