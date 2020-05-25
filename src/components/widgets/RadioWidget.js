import React from "react";
import PropTypes from "prop-types";
import { Radio } from "@liquid-state/ui-kit";

function RadioWidget(props) {
  const {
    options,
    value,
    required,
    disabled,
    readonly,
    autofocus,
    onChange,
  } = props;
  // Generating a unique field name to identify this set of radio buttons
  const name = Math.random().toString();
  const { enumOptions, inline } = options;
  // checked={checked} has been moved above name={name}, As mentioned in #349;
  // this is a temporary fix for radio button rendering bug in React, facebook/react#7630.
  return (
    <Radio.Group defaultValue={value}>
      {enumOptions.map((option, i) => {
        const checked = option.value === value;
        const disabledCls = disabled || readonly ? "disabled" : "";
        const radio = (
          <span>
            <Radio
              checked={checked}
              name={name}
              required={required}
              value={option.value}
              disabled={disabled || readonly}
              autoFocus={autofocus && i === 0}
              onChange={() => onChange(option.value)}
            />
            <span>{option.label}</span>
          </span>
        );

        return inline ? (
          <div className={`radio-inline ${disabledCls}`}>{radio}</div>
        ) : (
          <div className={`radio ${disabledCls}`}>
            <div>{radio}</div>
          </div>
        );
      })}
    </Radio.Group>
  );
}

RadioWidget.defaultProps = {
  autofocus: false,
};

if (process.env.NODE_ENV !== "production") {
  RadioWidget.propTypes = {
    options: PropTypes.shape({
      enumOptions: PropTypes.array,
      inline: PropTypes.bool,
    }).isRequired,
    value: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
  };

  RadioWidget.defaultProps = {
    value: false,
    required: false,
    disabled: false,
    readonly: false,
  };
}
export default RadioWidget;
