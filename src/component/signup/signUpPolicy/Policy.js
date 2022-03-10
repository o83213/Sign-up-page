import classes from './Policy.module.css'
import { BsCheck } from 'react-icons/bs'
import { useState } from 'react'
const Policy = (props) => {
  const [isCheck, setIsCheck] = useState(false)
  const toggleCheckHandler = () => {
    setIsCheck((prev) => !prev)
  }
  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <div
          className={`${classes.icon} ${isCheck && classes.check}`}
          onClick={toggleCheckHandler}
        >
          {isCheck ? <BsCheck /> : ''}
        </div>
      </div>
      <div className={classes.content}>
        <p>
          By creating account, you agree to accept our Privacy Policy, Terms of
          Service and Notification settings.
        </p>
      </div>
    </div>
  )
}
export default Policy
