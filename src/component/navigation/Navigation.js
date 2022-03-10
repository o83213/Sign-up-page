import classes from './Navigation.module.css'
import { BsArrowLeft } from 'react-icons/bs'
const Navigation = (props) => {
  return (
    <div className={classes.navigation}>
      <button>
        <BsArrowLeft />
        Back
      </button>
    </div>
  )
}
export default Navigation
