import uuid from 'uuid';

export const addExpenses = (
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

export const removeExpense = ( { idToRemove } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    idToRemove
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});