import {useState} from 'react';
import MapEmpArray from './MapEmpArray.jsx';
const Shortcircuit=()=>{
    const [user,setUser]=useState(true)
    return(
        <div>{user&&<MapEmpArray/>}</div>
        )
    }
export default Shortcircuit;