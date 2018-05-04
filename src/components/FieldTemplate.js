import React from 'react';
import { Form } from 'antd';

/* eslint-disable react/prop-types */

const FieldTemplate = (props) => {
  const {
    id, classNames, label, help, required, description, errors, children, displayLabel,
  } = props;
  return (
    <React.Fragment>
      {description}
      {
        displayLabel
          ? (
            <Form.Item label={`${label}${required ? '*' : ''}`} id={id} classNames={classNames}>
              {children}
            </Form.Item>
          )
          : children
      }
      {errors}
      {help}
    </React.Fragment>
  );
};

export default FieldTemplate;
