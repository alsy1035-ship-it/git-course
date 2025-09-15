import styles from "./student.module.css"
import pic from "./funny.png"

function students (probs)
{


return(

<div className={styles.card}>
<p className={styles.text}>
Name: {probs.name}
<br />
Age: {probs.age}
</p>
<img src={pic} alt="" />

</div>

);

}

export default students;