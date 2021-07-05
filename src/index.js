import { render } from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './constants/reset.css';

render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);