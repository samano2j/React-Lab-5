export const SET_EMAIL_PASS = 'SET_EMAIL_PASS'
export const SET_PASSWORD_PASS = 'SET_PASSWORD_PASS'
export const SET_EMAIL_ERROR = 'SET_EMAIL_ERROR'
export const SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR'

export const initialState = {
    emailError: '',
    passwordError: '',
    emailPass: false,
    passwordPass: false
}

export function reducer(state, action) {

    switch (action.type) {
        case SET_EMAIL_PASS: 
            return {
                ...state,
                emailError:'',
                emailPass: true
            }

        case SET_PASSWORD_PASS: 
            return {
                ...state,
                passwordError:'',
                passwordPass: true
            }   

        case SET_EMAIL_ERROR: 
            return {
                ...state,
                emailError: action.payload.emailError,
                emailPass: false
            }

        case SET_PASSWORD_ERROR: 
            return {
                ...state,
                passwordError: action.payload.passwordError,
                passwordPass: false
            }

        default: 
            return state

    }

}