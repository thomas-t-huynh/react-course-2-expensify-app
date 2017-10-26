import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expenses by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        idToRemove: expenses[1].id
    };
    const state = expensesReducer( expenses , action );
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        idToRemove: '-1'
    };
    const state = expensesReducer( expenses , action );
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: 'xyz',
        description: 'drugs',
        note: '',
        amount: 100,
        createdAt: 1000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer( expenses , action );
    expect(state).toEqual([...expenses, expense ]);
});

test('should edit an expense', () => {
    const description = {
        description: 'mug'
    }
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description
        }
    };
    const state = expensesReducer( expenses , action );
    expect(state[1].description).toBe(description);
});

test('should not edit an expense', () => {
    const editExpense = {
        description: 'aint gonna wurk'
    }
    
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'zyx',
        editExpense
    };
    const state = expensesReducer( expenses , action );
    expect(state).toEqual(expenses);
});