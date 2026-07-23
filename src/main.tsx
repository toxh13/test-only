import { createRoot } from 'react-dom/client';
import './data/captured';
import { App } from './App';
import './styles.css';
import './captured.css';
import './desktop.css';
import './desktop-shots.css';

createRoot(document.getElementById('root')!).render(<App />);
