import styles from "./student.module.css"
import PropTypes from "prop-types";

function students (probs)
{


return(


<div className={styles.card}>
    <div className={styles.inner}>
        <div className={styles.front}>
            <p> name: {probs.name} <br /> age: {probs.age} </p>
            <img src={probs.img} alt="" />
        </div >
        <div className={styles.back}>



        </div>
    </div>

</div>










);

}

students.PropTypes = 
{
name : PropTypes.string,
age : PropTypes.number


};

export default students;