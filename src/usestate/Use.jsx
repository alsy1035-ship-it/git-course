import React ,{ useState } from "react";

export default function update ()
{

let [name,handlename] = useState("guest");
function namehandle()
{handlename("spongbob")} //handle name


let [age,handleage] = useState(0);
function ageinc()
{handleage(  age + 1)} //increase age
function agedec()
{handleage( age -1)} //deccrease age


function test (){}



return( 
<>
<div>
<p>Name:{name}</p> 
<button onClick={namehandle}>submit name</button> 
</div>

<div> 
<p>Age:{age}</p> 
<button onClick={ageinc}>increase age</button>
<button onClick={agedec}>decrease age</button> 
</div>


</>


);



}