import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const { TextArea } = Input;

function TextareaWidget(props) {
  const {
    id,
    options,
    placeholder,
    value,
    required,
    disabled,
    readonly,
    autofocus,
    onChange,
    onBlur,
    onFocus,
  } = props;
  const onChangeComponent = ({ target }) =>
    onChange(target.value === '' ? options.emptyValue : target.value);
  return (
    <TextArea
      id={id}
      value={typeof value === 'undefined' ? '' : value}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      readOnly={readonly}
      autoFocus={autofocus}
      rows={options.rows}
      onBlur={onBlur && (event => onBlur(id, event.target.value))}
      onFocus={onFocus && (event => onFocus(id, event.target.value))}
      onChange={onChangeComponent}
    />
  );
}

TextareaWidget.defaultProps = {
  autofocus: false,
  options: {},
};

if (process.env.NODE_ENV !== 'production') {
  TextareaWidget.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.shape({
      rows: PropTypes.number,
    }),
    value: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
  };

  TextareaWidget.defaultProps = {
    placeholder: '',
    value: '',
    required: false,
    disabled: false,
    readonly: false,
    onChange: null,
    onBlur: null,
    onFocus: null,
  };
}

export default TextareaWidget;
