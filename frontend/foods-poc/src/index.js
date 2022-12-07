import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.js';
import { ThemeProvider } from '@material-tailwind/react';

// ========================================
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
