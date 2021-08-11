import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import App from '../App'

test('render app component', () => {
    const initialisedText = 'This is working'
    const component = render(<App />)
    component.getByText(initialisedText)
})
