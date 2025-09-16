import Students from "./students/student.jsx"
import pic1 from "./students/funny.png"
import pic2 from "./students/pic2.jpg"
import pic3 from "./students/pic3.jpg"
import pic4 from "./students/pic4.jpg"
function App() {

return(
<>
<Students name="black1" age={69} img ={pic1}/>
<Students name="black2" age={40} img ={pic2}/>
<Students name="black3" age={30} img ={pic3}/>
<Students name="black4" age={5} img ={pic4}/>
</>

)


}

export default App
