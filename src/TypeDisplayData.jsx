import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';

const TypeDisplayData = () => {
    const [data, setData] = useState("");
    const [newdata, setNewData] = useState();
    const notify = () => toast("Wow so easy!");

    const userdata = (event) => {
        setData(event.target.value);
    };

    const submitData = (e) => {
        e.preventDefault();
        if (data.trim() === "") {  // Check if the input is empty or contains only spaces
            alert("Please enter some value!");
            return;
        }
        setNewData(data);
        notify();
    };

    return (
        <section>
            <h3>{newdata}</h3>
            <form onSubmit={submitData}>
                <input type="text" placeholder="Enter data here" onChange={userdata} />
                <br /><br />
                <button type="submit">Submit</button>
                <ToastContainer />
            </form>
        </section>
    );
};

export default TypeDisplayData;
