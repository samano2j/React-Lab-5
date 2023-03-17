//3rd party libraries
import React, { useState, useEffect, useReducer } from 'react'

// local imports
import Field from "./components/Field";
import Button from "./components/Button";
import { reducer, initialState, SET_EMAIL_PASS, SET_PASSWORD_PASS, SET_EMAIL_ERROR, SET_PASSWORD_ERROR } from './reducer'

/**
 *
 *
 * Create a form with common features like validation and hint messages.
 *
 * - Add validation for email and password (https://www.w3schools.com/howto/howto_js_password_validation.asp)
 * - Show a hint message for validation errors
 * - Show a confirmation alert/modal/dialog when the Clear button is pressed
 * - Clear the form when the dialog is confirmed
 * - When validation checks are good, show a confirmation alert/modal/dialog
 * - Manage the state of the form using React Hooks (useState, useEffect, useReducer)
 *
 */

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const clearButton = (e) => {
    setEmailValue('')
    setPasswordValue('')
  }

  const onEmailChange = (e) => {
    setEmailValue(e.target.value)
  } 

  const onPasswordChange = (e) => {
    setPasswordValue(e.target.value)
  }

  const signupButton = (e) => {
    checkEmail()
    checkPassWord()
  }

  useEffect(() => {
    
    if (state.emailPass && state.passwordPass)
      console.log('Sign Up successful!')

  }, [state])

  const checkEmail = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (!emailValue.match(emailRegex)) {
      dispatch({ type: SET_EMAIL_ERROR, payload: {emailError:'Invalid email address'} })
      return
    }

    dispatch({ type: SET_EMAIL_PASS })
  } 

  const checkPassWord = () => {
    const lowerCaseLetters = /[a-z]/g
    const upperCaseLetters = /[A-Z]/g
    const numbers = /[0-9]/g
    const specialCharacters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    const minlength = 8

    if (!passwordValue.match(lowerCaseLetters)) {
      dispatch({ type: SET_PASSWORD_ERROR, payload: {passwordError:'Password requires lowercase letter(s)' } })
      return
    }

    if (!passwordValue.match(upperCaseLetters)) {
      dispatch({ type: SET_PASSWORD_ERROR, payload: {passwordError:'Password requires uppercase letter(s)' } })
      return
    }

    if (!passwordValue.match(numbers)) {
      dispatch({ type: SET_PASSWORD_ERROR, payload: {passwordError:'Password requires number(s)' } })
      return
    }

    if (!passwordValue.match(specialCharacters)) {
      dispatch({ type: SET_PASSWORD_ERROR, payload: {passwordError:'Password requires special character(s)' } })
      return
    }

    if (passwordValue.length < minlength) {
      dispatch({ type: SET_PASSWORD_ERROR, payload: {passwordError:'Password requires minimum length of 8 characters' } })
      return
    }

    dispatch({ type: SET_PASSWORD_PASS })
  }

  return (
    <div className="App">
      <h1>React Lab 5</h1>
      <h1>Login</h1>
      <div className="Container">
        <Field label="Email" onChange={onEmailChange} value={emailValue} error={state.emailError} />
        <Field label="Password" onChange={onPasswordChange} value={passwordValue} error={state.passwordError} />
        <div className="Buttons">
          <Button label="Clear" onClick={clearButton}/>
          <div className="Spacer" />
          <Button label="Sign Up" onClick={signupButton}/>
        </div>
      </div>
    </div>
  );
}

export default App;
