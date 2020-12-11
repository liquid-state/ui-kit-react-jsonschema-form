/* eslint-disable import/no-unresolved,import/extensions */
import React from 'react';
import { Form } from 'antd';

/* eslint-disable react/prop-types */

const FieldTemplate = (props) => {
  const {
    id, classNames, label, help, required, description, errors, children, displayLabel,
  } = props;
  // object fields display the description themselves
  // for all other fields, we need to display it before children
  const itemDesc = props.schema.type !== 'object' ? description : null;
  return (
    <React.Fragment>
      {
        displayLabel
          ? (
            <Form.Item label={`${label}${required ? '*' : ''}`} id={id} classNames={classNames}>
              {[itemDesc, ...children]}
            </Form.Item>
          )
          : [itemDesc, ...children]
      }
      {errors}
      {help}
    </React.Fragment>
  );
};

export default FieldTemplate;
