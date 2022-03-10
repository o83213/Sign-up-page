import classes from './Policy.module.css'
const Policy = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <div className={classes.icon}></div>
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
