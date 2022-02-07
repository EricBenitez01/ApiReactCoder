import React, { useEffect } from 'react';
import {useState} from "react";
import axios from "axios";
import ItemComponent from "../itemComponent/ItemComponent";
import "./ItemListComponent.css"
import Spinner from '../Spinner';

const ItemListComponent = () => {
    const [users, setUsers] =  useState([]);
    const [spinner, setSpinner] = useState(true)
    useEffect( () => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data));
        setTimeout( () => {
            setSpinner(false);
        }, 3000 );
    }, []);


    return(     
        <div className="cardList">
        {spinner ? <Spinner />
        : users.map((user) => {
            return (
              <div key={user.id}>
                <ItemComponent data={user} />
              </div>
            );
          })
        }
      </div>
  );
   
};

export default ItemListComponent;
