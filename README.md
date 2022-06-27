# Dropdown menu.
![made-with-node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![made-with-react](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=FFFFFF) ![made-with-sass](	https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) 
![GitHub repo size](https://img.shields.io/github/repo-size/StephaneLi/lib_typescript-dropdown-react)
![GitHub jest](https://img.shields.io/badge/coverage-100%25-yellow)  

A simple customizable react dropdown in typescript.  
From project 14 OpenClassrooms, react app developer  
  
[Projet 14 Openclassroms](https://github.com/StephaneLi/StephaneLieumont_14_03062022)  
[Demo](https://stephaneli.github.io/lib_typescript-dropdown-react/)

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
        choicies={['option1','option2','option3','option4','option5']}
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
|choicies | string[ ] | Yes | N/A |
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