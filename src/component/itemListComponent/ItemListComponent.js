import React, { useEffect } from 'react';
import {useState} from "react";
import ItemComponent from "../itemComponent/ItemComponent";
import "./ItemListComponent.css"


const ItemListComponent = () => {
    const [users, setUsers] =  useState([]);
    console.log(users);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsers(json));
    }, []);


    return(     
    <div className="cardList">
    { users.map((user) => {
         return(
         <div key = {user.id}>
            <ItemComponent data = {user} />
        </div>
        );
        })};
    </div>
  );
   
};

export default ItemListComponent;
