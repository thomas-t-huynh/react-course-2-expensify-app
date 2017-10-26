import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses';

let addExpenses, history, wrapper;

beforeEach(() => {
    addExpenses = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpenses={addExpenses} history={history} />);
});

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpenses).toHaveBeenLastCalledWith(expenses[2]);
});