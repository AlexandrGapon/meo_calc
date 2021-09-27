import React from 'react'
import { useDispatch } from 'react-redux'
import { setIsPopup } from '../store/reducer'
import cl from '../styles/Popup.module.css'

const Popup = ({ sum }) => {
    const dispatch = useDispatch()

    return (
        <div className={cl.popup__container}>
            <div className={cl.popup}>
                <button className={cl.popup__button} onClick={() => dispatch(setIsPopup(false))}>
                    X
                </button>
                <span className={cl.popup__text}>
                    Сумма, равная<br /><span className={`${cl.popup__text} ${cl.popup__text_large}`}>{sum}</span><br />добавлена в список результатов
                </span>
            </div>
        </div>
    )
}

export default Popup
