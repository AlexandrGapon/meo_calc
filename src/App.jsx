import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import MyButton from './components/MyButton'
import Popup from './components/Popup'
import UserInput from './components/UserInput'
import { setIsError, setIsPopup, setResults } from './store/reducer'
import './styles/App.css'

function App() {
  const [values, setValues] = useState([])
  const [sum, setSum] = useState(null)
  const dispatch = useDispatch()
  const { isPopup, results, isError } = useSelector(state => state.app)

  const handleClick = (e) => {
    if (values.length !== 2) {
      dispatch(setIsError(true))
      return
    }
    dispatch(setIsError(false))
    setSum(values.reduce((a, b) => a + b))
    dispatch(setResults(values.reduce((a, b) => a + b)))
    dispatch(setIsPopup(true))
  }

  return (
    <div className="app">
      {
        isPopup &&
        <Popup sum={sum} />
      }
      <div className='result'>
        {
          !!results.length &&
          results.join(', ')
        }
      </div>
      <div className='inputs__container'>
        <UserInput setValues={setValues} values={values} />
        <UserInput setValues={setValues} values={values} />
      </div>
      <MyButton disabled={isPopup} handleClick={handleClick}>
        Выполнить
      </MyButton>
      {
        isError &&
        <span className='error'>Одно или несколько значений не указаны,<br />либо указаны не верно.</span>
      }
    </div>
  )
}

export default App