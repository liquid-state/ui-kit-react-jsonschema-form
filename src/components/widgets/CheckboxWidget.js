import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@liquid-state/ui-kit';
import DescriptionField from 'react-jsonschema-form/lib/components/fields/DescriptionField';

function CheckboxWidget(props) {
  const {
    schema,
    id,
    value,
    required,
    disabled,
    readonly,
    label,
    autofocus,
    onChange,
  } = props;
  return (
    <div className={`checkbox ${disabled || readonly ? 'disabled' : ''}`}>
      {schema.description && (
        <DescriptionField description={schema.description} />
      )}
      <label htmlFor={id}>
        <Checkbox
          id={id}
          checked={typeof value === 'undefined' ? false : value}
          required={required}
          disabled={disabled || readonly}
          autoFocus={autofocus}
          onChange={event => onChange(event.target.checked)}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}

CheckboxWidget.defaultProps = {
  autofocus: false,
};

if (process.env.NODE_ENV !== 'production') {
  CheckboxWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
  };

  CheckboxWidget.defaultProps = {
    value: false,
    required: false,
    disabled: false,
    readonly: false,
    label: '',
  };
}

export default CheckboxWidget;
