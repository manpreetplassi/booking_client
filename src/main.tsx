import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  </BrowserRouter>
)
