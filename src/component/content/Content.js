import classes from './Content.module.css'
import Header from '../header/Header'
import SignUpButtons from '../signup/SignUpButtons'
import Gap from '../gap/Gap'
import SignUpForm from '../signup/SignUpForm'
const Content = (props) => {
  return (
    <div className={classes.content}>
      <Header />
      <SignUpButtons />
      <Gap />
      <SignUpForm />
    </div>
  )
}
export default Content
