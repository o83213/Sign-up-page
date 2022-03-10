import classes from './SignUpContent.module.css'
import { BsEye, BsEyeSlash, BsCheckCircleFill } from 'react-icons/bs'
import { useState } from 'react'
const SignUpContent = (props) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [hasTyped, setHasTyped] = useState(false)
  const [firstCheck, setFirstCheck] = useState(false)
  const [secondCheck, setSecondCheck] = useState(false)
  const toggleVisibilityHandler = () => {
    setPasswordVisibility((prev) => !prev)
  }
  const checkInputIsValid = (event) => {
    const value = event.target.value
    const firstValidaty = value.length >= 8
    const secondValidaty = /[a-zA-Z]/.test(value)
    console.log(firstValidaty)
    console.log(secondValidaty)
    setFirstCheck(firstValidaty)
    setSecondCheck(secondValidaty)
    setIsValid(firstValidaty && firstValidaty)
  }
  return (
    <div>
      <div className={`${classes.grid} ${classes.flex}`}>
        <input
          type="text"
          placeholder="First Name"
          className={classes.input1}
        />
        <input type="text" placeholder="Last Name" className={classes.input1} />
      </div>
      <div className={classes.grid}>
        <input type="email" placeholder="E-mail" className={classes.input} />
      </div>
      <div className={classes.grid}>
        <input
          type={`${passwordVisibility ? 'text' : 'password'}`}
          placeholder="Password"
          className={classes.input}
          onChange={checkInputIsValid}
          onFocus={() => {
            setHasTyped(true)
          }}
          onBlur={() => {
            setHasTyped(false)
          }}
        />
        <i className={classes.icon} onClick={toggleVisibilityHandler}>
          {passwordVisibility ? <BsEyeSlash /> : <BsEye />}
        </i>
      </div>
      {hasTyped && !isValid && (
        <div className={classes.validaty}>
          <div className={classes.validatyContent}>
            <i className={firstCheck && classes.iconPass}>
              <BsCheckCircleFill />
            </i>
            <p className={firstCheck && classes.pass}>8 characters min</p>
          </div>
          <div className={classes.validatyContent}>
            <i className={secondCheck && classes.iconPass}>
              <BsCheckCircleFill />
            </i>
            <p className={secondCheck && classes.pass}>one number</p>
          </div>
        </div>
      )}
    </div>
  )
}
export default SignUpContent
