import React from 'react';
import ReactDOM from 'react-dom';
import {Sample} from './Component/sampleComponent'

ReactDOM.render(
  <React.StrictMode>
    <Sample name="Test Man" age={20} />
  </React.StrictMode>,
  document.getElementById('root')
);