import classes from './Modal.module.css'
import Navigation from './navigation/Navigation'
import Content from './content/Content'
const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <Navigation />
      <Content />
    </div>
  )
}

export default Modal
