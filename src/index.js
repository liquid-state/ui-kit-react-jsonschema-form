import React from 'react';
import PropTypes from 'prop-types';
import OriginalForm from 'react-jsonschema-form';
import BaseWidgets from './components/widgets';
import BaseFieldTemplate from './components/FieldTemplate';

import './style.css';

const Form = ({ widgets, FieldTemplate, ...props }) => {
  const allWidgets = { ...BaseWidgets, ...widgets };
  return (
    <OriginalForm
      {...props}
      widgets={allWidgets}
      FieldTemplate={FieldTemplate || BaseFieldTemplate}
      className="ant-form ant-form-horizontal"
    />
  );
};

Form.propTypes = {
  widgets: PropTypes.object,
  FieldTemplate: PropTypes.func,
};

Form.defaultProps = {
  widgets: {},
  FieldTemplate: null,
};

export default Form;
