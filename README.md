# Dropdown menu.
A simple customizable react dropdown in typescript.  
From project 14 OpenClassrooms, react app developer

## Installation
```npm install @stephane1920/ts-dropdown-react```  
or  
```yarn add @stephane1920/ts-dropdown-react```

## Usage
```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Dropdown from '@stephane1920/ts-dropdown-react';

const SomeComponent = () => {
  return (
    <div>
      <Dropdown 
        label='choicies'
        name='input-name'
        choicies={['option1','option2','option3','option4','option5',]}
      />
    </div>
  )
};
```

## Props
|Label|Type|Required|Default|
|:----|:----:|:------:|:----:|
|label | string | Yes | N/A |
|name | string | Yes | N/A |
|zIndex | number | No | ```1``` |
|choicies | string[ ] | Yes | ```[]``` |
|error | boolean | No | ```false``` |
|value | string | No | ```''``` |
|textColor | string | No | ```'#70757A'``` |
|focusColor | string | No | ```'#059ECE'``` |
|errorColor | string | No | ```'#EF6C6C'```|
|borderColor | string | No | ```'#DADCE0'``` |
|borderRadius | string | No | ```'5px'```|
|onSelect | callback() | No | N/A |

## License  
ISC