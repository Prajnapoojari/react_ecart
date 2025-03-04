import {useState} from 'react';
import { ToastContainer, toast } from 'react-toastify';


const TypeDisplayData=()=>
{
    const[data,setData]=useState("")
    const[newdata, setNewData]=useState()
    const notify = () => toast("Wow so easy!");

   const userdata=(event)=>{
       setData(event.target.value)
       }

   const submitData=(e)=>{
       e.preventDefault()
       setNewData(data)
       notify()
       }

return(
    <section>
        <h3>{newdata}</h3>
        
        <form onSubmit={submitData}>
       <input type="text" placeholder="Enter data here" onChange={userdata}/>
       <br/> <br/>
       <button onClick={submitData}>Submit</button>
       <ToastContainer />
       </form>
        </section>
    )
}
 export default TypeDisplayData;