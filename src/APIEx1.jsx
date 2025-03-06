import { useState, useEffect } from "react";
import "./App.css";

const APIEx1 = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        const userDetails = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const response1 = await response.json();
            setUser(response1);
        };
        userDetails();
    }, []);

    return (
        <div className="container">
            {user.map((item) => (
                <div className="user-card" key={item.id}>
                    <h1>{item.id}</h1>
                    <h1>{item.name}</h1>
                    <h1>{item.email}</h1>
                </div>
            ))}
        </div>
    );
};

export default APIEx1;
