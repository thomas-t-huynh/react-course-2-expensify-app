import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ( { id , description , amount , createdAt } ) => (

    <div>
        <div> 
            <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
            <p>{amount} - {createdAt}</p>
            
        </div>
    </div>
);


export default ExpenseListItem;

