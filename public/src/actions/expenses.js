import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpenses = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpenses = (expenseData = {}) => {
    return (dispatch) => {
        const {
          description ='',
          note = '', 
          amount = 0,
          createdAt = 0
        } = expenseData;

        const expense = { description , note , amount , createdAt };

        return database.ref('expenses').push(expense).then((ref) => {
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