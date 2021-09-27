import React, { useState } from 'react'
import cl from '../styles/UserInput.module.css'

const UserInput = ({ values, setValues }) => {
    const [inputValue, setInputValue] = useState('')

    const handleBlur = (e) => {
        if (!inputValue.length) {
            return
        }
        setValues([...values, +inputValue])
    }

    const handleFocus = (e) => {
        let index = values.indexOf(+inputValue)
        if (index > -1) {
            values.splice(index, 1)
        }
    }

    return (
        <div className={cl.input__container}>
            <input
                type='number'
                className={cl.input}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
            <label>Введите число</label>
        </div>
    )
}

export default UserInput