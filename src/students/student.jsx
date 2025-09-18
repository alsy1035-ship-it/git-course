import styles from "./student.module.css";



function Students (props)
{


return(


<div className={styles.card}>
    <div className={styles.inner}>
        <div className={styles.front}>
            <p> name: {props.name} <br /> age: {props.age} </p>
            <img src={props.img} alt="" />
        </div >
        <div className={styles.back}>
         card description
        </div>
    </div>

</div>

);

}


export default Students;