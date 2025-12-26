import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux'; // استيراد Provider
import store from './redux/store';     // استيراد الـ store بتاعنا

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* تغليف التطبيق بالـ Provider */}
      <App />
    </Provider>
  </React.StrictMode>,
);