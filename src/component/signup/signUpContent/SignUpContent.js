import classes from './SignUpContent.module.css'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { useState } from 'react'
const SignUpContent = (props) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false)
  const toggleVisibilityHandler = () => {
    setPasswordVisibility((prev) => !prev)
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
        />
        <i className={classes.icon} onClick={toggleVisibilityHandler}>
          {passwordVisibility ? <BsEyeSlash /> : <BsEye />}
        </i>
      </div>
    </div>
  )
}
export default SignUpContent
