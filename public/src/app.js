import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import AppRouter , { history } from './routers/AppRouter';
import configureStore from './stores/configureStore';
import getVisibileExpenses from './selectors/expenses';
import expensesReducer from './reducers/expenses';
import filtersReducer from './reducers/filters';
import { startSetExpenses }from './actions/expenses';
import { login , logout } from './actions/auth';
import { setTextFilter , sortByAmount , sortByDate , setStartDate , setEndDate } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from  './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};


ReactDOM.render(<LoadingPage />, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            }
         });
        console.log('log in. UID:', user.uid );
    } else {
        store.dispatch(logout());
        console.log('log out');
        renderApp();
        history.push('/');
    }
});
