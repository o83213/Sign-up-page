import SignUpButton from './SignUpButton'
import { BsGoogle } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import classes from './SignUpButtons.module.css'
const SignUpButtons = (props) => {
  return (
    <div className={classes.container}>
      <SignUpButton message="Sign up with google">
        <div className={classes.icon}>
          <BsGoogle />
        </div>
      </SignUpButton>
      <SignUpButton message="Sign up with facebook">
        <div className={classes.icon}>
          <FaFacebookF />
        </div>
      </SignUpButton>
    </div>
  )
}
export default SignUpButtons
