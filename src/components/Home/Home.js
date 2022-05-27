import React, { useEffect, useState } from 'react';
import User from '../User/User';
import  {  addDb, removeDb } from '../Utlities/fakedb';

const Home = () => {
    
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then (res => res.json())
        .then (data => setUsers(data))
    },[])

        const addUser = (id) => {
            addDb(id);
        }

        const removeFromCart = (id) => {
                removeDb(id)
        }

    return (
        <div>
            <h1> This is home component </h1>
            <h4> Total user : {users.length} </h4>
            {
                users.map(user => <User 
                    key={user.id}
                    user={user}
                    addUser={addUser}
                    removeFromCart={removeFromCart}
                    > </User> )
            }

        </div>
    );
};

export default Home;