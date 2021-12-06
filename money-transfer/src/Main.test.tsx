import * as React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'

import  Main, { INPUTS } from './Main'

describe('Test Hooks', () => {

  it('renders components, labels, placeholders correctly', () => {
    const { getByTestId, getByPlaceholderText, getByText, queryByDisplayValue } = render(
      <Main />)

    expect(getByText(INPUTS[0].label)).toBeDefined()
    expect(getByPlaceholderText(INPUTS[0].placeholder)).toBeDefined()
    expect(getByText(INPUTS[1].label)).toBeDefined()
    expect(getByPlaceholderText(INPUTS[1].placeholder)).toBeDefined()
    expect(getByText(INPUTS[2].label)).toBeDefined()
    expect(getByPlaceholderText(INPUTS[2].placeholder)).toBeDefined()
    expect(getByTestId('button')).toBeDefined()
  })
  
  it('changes text input correctly', () => {
    const { getByTestId, queryByDisplayValue } = render(
      <Main />)
    const testText = 'Changed text'
    fireEvent.changeText(getByTestId(INPUTS[0].label), testText)
    expect(queryByDisplayValue(INPUTS[0].placeholder)).toBeNull()
    expect(getByTestId(INPUTS[0].label).props.value).toBe(testText)

  })
  it('waits for Banner', async() => {
    const { getByTestId, getByPlaceholderText, getByText, queryByText } = render(
      <Main />)
    fireEvent.changeText(getByTestId(INPUTS[0].label), 'Changed text')
    fireEvent.changeText(getByTestId(INPUTS[1].label), 'abc@gmail.com')
    fireEvent.changeText(getByTestId(INPUTS[2].label), '123')

    expect(queryByText('Transactions')).toBeNull()
    fireEvent.press(getByTestId('button'));   
    const bannerText = getByText('The money has been sent'); 
    await waitFor(() => getByText('The money has been sent'), { timeout: 1000 })
    //banner appears
    expect(bannerText.props.children).toBe('The money has been sent');    
    // transaction list rendered
    expect(getByText('Transactions')).toBeDefined()
    expect(getByText('£123.00')).toBeDefined()
    
    // inputs reset
    expect(getByTestId(INPUTS[1].label).props.value).toBe(undefined)
    expect(getByTestId(INPUTS[1].label).props.value).toBe(undefined)
    expect(getByTestId(INPUTS[1].label).props.value).toBe(undefined)
    expect(getByPlaceholderText(INPUTS[2].placeholder)).toBeDefined()

  })
})