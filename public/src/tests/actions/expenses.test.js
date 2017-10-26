import { addExpenses , editExpense , removeExpense } from '../../actions/expenses';

test(`should set up remove expense action object`, () => {
    const action = removeExpense({ idToRemove: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        idToRemove: '123abc'
    });
});

test ('should setup edit expense action object', () => {
    const action = editExpense( '9271992' ,  { name: 'rent' , amount: 200 }  );
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '9271992',
        updates: {
            name: 'rent',
            amount: 200
        }
    });
});

test('should setup add expense action object with provided values', () => {
   const expenseData = {
       description: 'Rent',
       amount: 2017,
       createdAt: 1000,
       note: 'This was my last dinner'
   };
    const action = addExpenses(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default values', () => {
    const action = addExpenses();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
         expense: { 
            description:'',
            note: '', 
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
    
});