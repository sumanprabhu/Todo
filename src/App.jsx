import { Provider } from 'react-redux'
import './App.css'
import { store } from './app/store'
import TodoPage from './components/TodoPage'

function App() {
  return (
    <>
      <Provider store={store}>
        <TodoPage />
      </Provider>
    </>
  )
}

export default App
