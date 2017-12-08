import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ( { id , description , note , createdAt } ) => (

    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">{moment(createdAt).format( 'MMMM Do, YYYY h:mm:ss a')}</span>
            <h3 className="list-item__data">{note}</h3>
        </div>
        
        
    </Link> 
);


export default ExpenseListItem;

