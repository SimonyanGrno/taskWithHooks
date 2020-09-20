import React from 'react';
import { Spinner } from 'react-bootstrap';

import './style.css';

export default function(props) {
  return (
    <Spinner className="spinnerClass" {...props}>
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}
