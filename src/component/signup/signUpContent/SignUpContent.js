import classes from './SignUpContent.module.css'
const SignUpContent = (props) => {
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
          type="password"
          placeholder="Password"
          className={classes.input}
        />
      </div>
    </div>
  )
}
export default SignUpContent
