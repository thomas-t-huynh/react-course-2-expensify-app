import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
import moment from 'moment';

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage expense={expenses[2]} startEditExpense={startEditExpense} history={history} startRemoveExpense={startRemoveExpense} />);

});

test('should test if EditExpensePage is rendering correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle EditExpense', () => {

    wrapper.find('ExpenseForm').prop('onSubmit')( expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith( expenses[2].id ,expenses[2]);
});

test('should handle removeExpense', () => {

    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith( {idToRemove: expenses[2].id} );

});