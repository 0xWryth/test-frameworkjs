import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as AppComponent from './with-components/App';
import * as AppHooks from './with-hooks/App';

const withHooks = false;

ReactDOM.render(
  <React.StrictMode>
    {withHooks ? <AppHooks.default /> : <AppComponent.default />}
  </React.StrictMode>,
  document.getElementById('app')
);
