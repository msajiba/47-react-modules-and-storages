import React from 'react';
import './User.css';


const User = (props) => {

   const {id, name, email, phone} = props.user;
   
   const addUser = props.addUser;
   const removeFromCart = props.removeFromCart;

    return (

        <div className="user-details">

            <p> <small> {id} </small> </p>
            <h4> {name} </h4>
            <p>{email} </p>
            <p>{ phone} </p>

            <button onClick={()=> addUser(id)}> add user </button>
            <button onClick={()=> removeFromCart(id)}> Remove </button>

        </div>
    );
};

export default User;