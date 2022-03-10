import classes from './SignUpButton.module.css'
const SignUpButton = (props) => {
  return (
    <button className={classes.btn}>
      <div className={classes.icon}>{props.children}</div>
      <p>{props.message}</p>
    </button>
  )
}
export default SignUpButton
