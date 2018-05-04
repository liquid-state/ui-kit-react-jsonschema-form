import React from 'react';
import PropTypes from 'prop-types';
import OriginalForm from 'react-jsonschema-form';
import BaseWidgets from './components/widgets';

const Form = ({ widgets, ...props }) => {
  const allWidgets = { ...BaseWidgets, ...widgets };
  return <OriginalForm {...props} widgets={allWidgets} />;
};

Form.propTypes = {
  widgets: PropTypes.object,
};

Form.defaultProps = {
  widgets: {},
};

export default Form;
