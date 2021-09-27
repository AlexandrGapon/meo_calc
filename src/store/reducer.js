const SET_RESULTS = 'SET_RESULTS'
const SET_IS_POPUP = 'SET_IS_POPUP'
const SET_IS_ERROR = 'SET_IS_ERROR'

const initialState = {
    results: [],
    isPopup: false,
    isError: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULTS:
            return {
                ...state,
                results: [...state.results, action.payload]
            }
        case SET_IS_POPUP:
            return {
                ...state,
                isPopup: action.payload
            }
        case SET_IS_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        default:
            return state
    }
}

export const setResults = (result) => ({ type: SET_RESULTS, payload: result })
export const setIsPopup = (bool) => ({ type: SET_IS_POPUP, payload: bool })
export const setIsError = (bool) => ({ type: SET_IS_ERROR, payload: bool })