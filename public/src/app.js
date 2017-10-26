import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './stores/configureStore';
import getVisibileExpenses from './selectors/expenses';
import expensesReducer from './reducers/expenses';
import filtersReducer from './reducers/filters';
import { addExpenses , removeExpense , editExpense }from './actions/expenses';
import { setTextFilter , sortByAmount , sortByDate , setStartDate , setEndDate } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

// store.dispatch(addExpenses( {description: 'water bill' , amount: 100 , createdAt: 1000 } ));

// store.dispatch(addExpenses( {description: 'Gas bill' , amount: 200 , createdAt: -2000 } ));

// store.dispatch(addExpenses( { description: 'Rent' , amount : 109000 } ) );

// store.dispatch(setTextFilter( 'bill' ));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
