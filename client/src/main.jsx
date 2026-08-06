import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { store } from './app/store.js';
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";



createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <Provider store={store}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </Provider>
  </ThemeProvider>
)
