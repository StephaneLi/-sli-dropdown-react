import React from 'react';
import ReactDOM from 'react-dom/client';
import Dropdown from './lib';
import './style.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <div className="demo">
      <Dropdown textColor='#6accc0' label='choicies' name='choicies' choicies={['option1','option2','option3','option4','option5',]}/>
    </div>    
  </React.StrictMode>
)
