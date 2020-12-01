/* eslint-disable import/no-unresolved, import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import OriginalForm from 'react-jsonschema-form';
import BaseWidgets from './components/widgets';
import BaseFields from './components/fields';
import BaseFieldTemplate from './components/FieldTemplate';

const Form = ({
  fields, widgets, FieldTemplate, ...props
}) => {
  const allFields = { ...BaseFields, ...fields };
  const allWidgets = { ...BaseWidgets, ...widgets };
  return (
    <OriginalForm
      {...props}
      fields={allFields}
      widgets={allWidgets}
      FieldTemplate={FieldTemplate || BaseFieldTemplate}
      className="ant-form ant-form-horizontal"
    />
  );
};

Form.propTypes = {
  fields: PropTypes.object,
  widgets: PropTypes.object,
  FieldTemplate: PropTypes.func,
};

Form.defaultProps = {
  fields: {},
  widgets: {},
  FieldTemplate: null,
};

export default Form;
