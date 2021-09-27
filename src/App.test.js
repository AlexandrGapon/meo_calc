import App from './App'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './store'

describe('App', () => {
  it('renders App component', () => {
    const {container} = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    screen.debug()
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getAllByRole('spinbutton').length).toBe(2)
    expect(container.firstChild.firstChild).toBeEmptyDOMElement()  
  })
})
