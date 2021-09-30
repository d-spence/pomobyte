import React from 'react';
import ReactDOM from 'react-dom';
import AppContextProvider from './contexts/AppContext';
import TimerContextProvider from './contexts/TimerContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <TimerContextProvider>
        <App />
      </TimerContextProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
