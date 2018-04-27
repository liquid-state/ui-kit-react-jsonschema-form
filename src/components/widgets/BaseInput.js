import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

function BaseInput(props) {
  if (!props.id) {
    throw new Error(`no id for props ${JSON.stringify(props)}`);
  }
  const {
    value,
    readonly,
    disabled,
    autofocus,
    onBlur,
    onFocus,
    options,
    schema,
    formContext,
    registry,
    ...inputProps
  } = props;

  inputProps.type = options.inputType || inputProps.type || 'text';
  const onChange = ({ target }) => props.onChange(value === '' ? options.emptyValue : target.value);

  const { rawErrors, ...cleanProps } = inputProps;

  return (
    <Input
      readOnly={readonly}
      disabled={disabled}
      autoFocus={autofocus}
      value={value == null ? '' : value}
      {...cleanProps}
      onChange={onChange}
      onBlur={onBlur && (event => onBlur(inputProps.id, event.target.value))}
      onFocus={onFocus && (event => onFocus(inputProps.id, event.target.value))}
    />
  );
}

BaseInput.defaultProps = {
  type: 'text',
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false,
  placeholder: '',
  value: null,
  onChange: null,
  onBlur: null,
  onFocus: null,
  options: {},
};

if (process.env.NODE_ENV !== 'production') {
  BaseInput.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    type: PropTypes.string,
    options: PropTypes.object,
    schema: PropTypes.object.isRequired,
    formContext: PropTypes.any.isRequired,
    registry: PropTypes.any.isRequired,
  };
}

export default BaseInput;
