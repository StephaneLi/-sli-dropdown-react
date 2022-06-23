# Dropdown menu.
A simple customizable react dropdown in typescript.  
From project 14 OpenClassrooms, react app developer

## Installation
```npm install @stephane1920/ts-dropdown-react```

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