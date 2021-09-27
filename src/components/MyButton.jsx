import React from 'react'
import cl from '../styles/MyButton.module.css'

const MyButton = ({ children, handleClick, disabled, ...props }) => {
    return (
        <button
            className={cl.btn}
            disabled={disabled}
            onClick={handleClick}
            {...props}
        >
            {children}
        </button>
    )
}

export default MyButton