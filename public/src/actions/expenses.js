import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpenses = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpenses = (expenseData = {}) => {
    return (dispatch , getState ) => {
        const uid = getState().auth.uid;
        const {
          description ='',
          note = '', 
          amount = 0,
          createdAt = 0
        } = expenseData;

        const expense = { description , note , amount , createdAt };

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpenses({
                id: ref.key,
                ...expense
            }));
        })
    };
};

export const removeExpense = ( { idToRemove } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    idToRemove
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id , updates) => {
    return (dispatch , getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense( id , updates));
        });
    };
};

// SET_EXPENSES

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

// export const startSetExpenses;

export const startSetExpenses = () => {
    return (dispatch , getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((cSnapShot) => {
                expenses.push({
                    id: cSnapShot.key,
                    ...cSnapShot.val()
                });
            });
            
            dispatch(setExpenses(expenses));
        });
    };
};

export const startRemoveExpense = ( { idToRemove } ) => {
    return  (dispatch , getState) => {
    const uid = getState().auth.uid;
       return database.ref(`users/${uid}/expenses/${idToRemove}`).remove().then(() => {
            dispatch(removeExpense({idToRemove}));
       });   
       
    };
};