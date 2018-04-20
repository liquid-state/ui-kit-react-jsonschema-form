import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorList(props) {
  const { errors } = props;
  return (
    <div>
      <h3>Errors</h3>
      <ul>
        {errors.map((error, i) => (
            <li key={i}>
              {error.stack}
            </li>
          ))}
      </ul>
    </div>
  );
}

ErrorList.propTypes = {
  errors: PropTypes.array.isRequired,
};
