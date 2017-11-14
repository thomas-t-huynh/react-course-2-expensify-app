import { 
            addExpenses ,
            startAddExpenses ,
            editExpense ,
            removeExpense ,
            startSetExpenses ,
            setExpenses ,
            startRemoveExpense ,
            startEditExpense
        } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData ={};
    expenses.forEach(({ id , description , note , amount , createdAt }) => {
        expensesData[id] = { description , note , amount , createdAt };
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

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
    const action = addExpenses(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add default expense to database and store', (done) => {
    const defaultValue = {
          description:'',
          note: '', 
          amount: 0,
          createdAt: 0
    }
    const store = createMockStore({});
    store.dispatch(startAddExpenses({})).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultValue
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
            expect(snapshot.val()).toEqual(defaultValue);
            done();
        });


});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'This one is more mousy',
        createdAt: 1000
    }
    store.dispatch(startAddExpenses(expenseData)).then(()=> {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });

});


test('should set up set expenses action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
    
});

test('should remove expenses from firebase', (done) => {
    const idNum = expenses[0].id;
    const store = createMockStore({});
    store.dispatch(startRemoveExpense({ idToRemove: idNum })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            idToRemove: idNum
        });
        return database.ref(`expenses/${idNum}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    });
});

test ('should edit expenses from firebase', (done) => {
    const id = expenses[2].id;
    const updates = {
        description: 'Updated item',
        amount: 5000,
        note: 'This was once something else',
        createdAt: 5000
    };
    const store = createMockStore({});
    store.dispatch(startEditExpense( id , updates )).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`expenses/${id}`).once('value');
    }).then((snapShot) => {
        expect(snapShot.val()).toEqual(updates);
        done();
    });
});