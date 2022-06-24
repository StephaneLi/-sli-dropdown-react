import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from 'lib';


describe('Component: Dropdown', () => {
  test('render dropdown', () => {
    render(<Dropdown label='' name='' choicies={[]} />)
    const component = screen.getByTestId('container')
  
    expect(component).toBeInTheDocument()
  })

  test('render dropdown with customs props', () => { 
    render (
      <Dropdown 
        label='test' 
        name='nametest' 
        choicies={['test-option1', 'test-option2']}
        zIndex={99}
        errorMessage="errortest"
        error={true}
        textColor='#000000'
        focusColor='#000001'
        errorColor='#000002'
        borderColor='#000003'
      />
    )

    const component = screen.getByTestId('container')
    const errorMessage = screen.getByText('errortest')
    const option1 = screen.getByText('test-option1')
    const option2 = screen.getByText('test-option2')
      
    expect(component).toBeInTheDocument()
    expect(errorMessage).toBeInTheDocument()
    expect(option1).toBeInTheDocument()
    expect(option2).toBeInTheDocument()

    expect(component.style.cssText).toContain('#000000')
    expect(component.style.cssText).toContain('#000001')
    expect(component.style.cssText).toContain('#000002')
    expect(component.style.cssText).toContain('#000003')    
  })
  
  test('click on dropdown should deployed options', () => {
    render(
      <Dropdown 
        label='test'
        name='test'
        choicies={[]}
      />
    );

    const dropdown = screen.getByTestId('dropdown')
    const handleClickComponent = jest.fn();
    dropdown.addEventListener('click', handleClickComponent)
  
    fireEvent.click(dropdown)
 
    expect(dropdown).toBeInTheDocument()
    expect(handleClickComponent).toHaveBeenCalled()
  })

  test('click on option shoud update input value with callback', () => {
    const handleCallback = jest.fn();

    render(
      <Dropdown 
        label='test'
        name='test'
        choicies={['option1']}
        onSelect={handleCallback}
      />
    )

    const option = screen.getByText('option1')
    const handleClickOption = jest.fn();    
    option.addEventListener('click', handleClickOption)
  
    fireEvent.click(option)
 
    expect(option).toBeInTheDocument()
    expect(handleClickOption).toHaveBeenCalled()
    expect(handleCallback).toHaveBeenCalled()
  })

  test('click on option shoud update input value without callback', () => {
    render(
      <Dropdown 
        label='test'
        name='test'
        choicies={['option1']}
      />
    )

    const option = screen.getByText('option1')
    const handleClickOption = jest.fn();    
    option.addEventListener('click', handleClickOption)
  
    fireEvent.click(option)
 
    expect(option).toBeInTheDocument()
    expect(handleClickOption).toHaveBeenCalled()
  })

  test('unfocus input shoud hide options', () => {
   let result = ''

    render(
      <Dropdown 
        label='test'
        name='test'
        choicies={['option1']}
        onSelect={(value: string) => { result = value}}
      />
    )

    const input = screen.getByTestId('input')
    const option = screen.getByText('option1')

    fireEvent.click(option)
    fireEvent.focusIn(input)
    fireEvent.focusOut(input)
 
    expect(input).toBeInTheDocument()
    expect(result).toBe('option1')
  })
})