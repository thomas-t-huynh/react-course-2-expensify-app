import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD, REMOVE, EDIT, SET_TEXT, SORT_BY_DATE, SORT_BY_AMOUNT, SET_START_DATE, SET_END_DATE
// one reducer for each root property.


//Expenses Reducer 

const addExpenses = (
     {
          description ='',
          note = '', 
          amount = 0,
          createdAt = 0
         } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ( { idToRemove } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    idToRemove
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT',
    text
});

const sortByAmount = ( amount = 'amount' ) => ({
    type: 'SET_SORT_AMOUNT',
    amount
});

const sortByDate = ( date = 'date' ) => ({
    type: 'SET_SORT_DATE',
    date
});

const setStartDate = ( date ) => ({
    type: 'SET_START_DATE',
    date
});

const setEndDate = ( date ) => ({
    type: 'SET_END_DATE',
    date
});
    


const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case  'ADD_EXPENSE' :
            return [
                ... state, action.expense
            ];
        case 'REMOVE_EXPENSE' :
            return state.filter(( { id } ) => 
                 id !== action.idToRemove
            );
        case 'EDIT_EXPENSE' :
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                    }
                })
            
        default: 
            return state;
    }
};

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
       case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            };
       case 'SET_SORT_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_SORT_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        default: 
            return state;
    }
}

const getVisibileExpenses = (expenses, { text , sortBy , startDate , endDate }) => {
    return expenses.filter(( expense ) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort(( a , b ) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// Store creation

const store = createStore(
    combineReducers({ 
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibileExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseTwo = store.dispatch(addExpenses( { description: 'Coffee', amount: 200, createdAt: -2000 } ));


const expenseOne = store.dispatch(addExpenses( { description: 'Rent', amount: 100, createdAt: -1000 } ));


// store.dispatch(removeExpense( { idToRemove: expenseOne.expense.id }));

// store.dispatch(editExpense(  expenseTwo.expense.id , { amount: 300 }));

// store.dispatch(setTextFilter( 'Re' ));

// store.dispatch(setTextFilter(  ));

store.dispatch(sortByAmount());

// store.dispatch(sortByDate( ));

// store.dispatch(setStartDate( 0 ));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate( 1250 ));

const demoState = {
    expense: [{
        id: 'abc',
        description: 'Apartment monthly rent',
        note: 'For month of september',
        amount: 673000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}
