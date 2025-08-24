import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/global.css';
import './styles/normalize.css';
import './styles/variable.css';

import App from './app/App.tsx';

const root = document.getElementById('root');

if (root !== null) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  throw new Error('Cannot find root element');
}
