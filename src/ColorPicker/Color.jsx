
import Styles from "./Color.module.css";
import React , {useState} from "react"


export default function ()
{

const  [color , setcolor]  = useState("#FFFFFF"); 

function handlecolor(event)
{
  setcolor(event.target.value)  
}

return(

<div className={Styles.container}>

<h2>Choose color</h2>

<div className={Styles.colorDisplay} style={{backgroundColor: color, "--glow-color": color}}>
    <p>Selected Color: {color}
       

    </p>
</div>

<p>Select a color</p>

<input type="color" value={color} onChange={handlecolor} />

</div>

)


}