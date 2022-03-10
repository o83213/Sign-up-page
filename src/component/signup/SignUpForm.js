import classes from './SignUpForm.module.css'
import SignUpContent from './signUpContent/SignUpContent'
import Policy from './signUpPolicy/Policy'
const SignUpForm = (props) => {
  return (
    <form className={classes.form}>
      <div className={classes.content}>
        <SignUpContent />
      </div>
      <div className={classes.policy}>
        <Policy />
      </div>
      <div className={classes['submmit-button']}>
        <button>Create an Free Account!</button>
      </div>
      <div className={classes.others}>
        <p>Already have an account?</p>
        <button>Log in</button>
      </div>
    </form>
  )
}
export default SignUpForm
