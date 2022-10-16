import { Fragment } from "react"
import classes from "./Foods.module.css"

const Foods = (props) => {
    return (
        <Fragment >
            <div className={classes.imageDiv}> 
            <img src={props.foodImg} alt="bruh"/>    
             </div>
        </Fragment>
    )
}

export default Foods;