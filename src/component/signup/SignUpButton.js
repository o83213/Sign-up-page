import classes from './SignUpButton.module.css'
const SignUpButton = (props) => {
  return (
    <button className={classes.btn}>
      {props.children}
      <p>{props.message}</p>
    </button>
  )
}
export default SignUpButton
