import { createStore } from 'redux';

// action generators - functions that return action objects



const incrementCount = ({ incrementBy = 1 } = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
        type: 'DECREMENT',
        decrementBy
})

const resetCount = () => ({
        type: 'RESET',

})

const setCount = ({ amount }) => ({
        type: 'SET',
        amount
})

// const setCount = ({ setAmount = 10} = {}) => {
//         type: 'SET',
//         count: setAmount

// }

// Reducers
//1. reducers are pure functions. 
// - output determined by input. Local scoping.
//2. Never change state or action.

const countReducer = (state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            };
        case 'SET': 
            return {
                count: action.amount
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};


const store = createStore (countReducer);
//call const unsubscribe to unsubscribe.

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());


store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ amount: 100 }));

// store.dispatch({
//     type: 'SET',
//     amount: 101
// });