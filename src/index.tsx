import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import Dropdown from './lib';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Dropdown label='choicies' name='choicies' choicies={['option1','option2','option3','option4','option5',]}/>
  </React.StrictMode>
)
