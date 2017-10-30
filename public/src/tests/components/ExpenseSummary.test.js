import { ExpenseSummary } from '../../components/ExpenseSummary';
import { shallow } from 'enzyme';
import React from 'react';


test('should render 1 number of expenses in ExpenseSummary correctly', () => {
    const wrapper = shallow(<ExpenseSummary  expenseCount={1} expensesTotal={69} />)
    expect(wrapper).toMatchSnapshot();
});

test('should render multiple expenses in ExpenseSummary correctly', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={264529} />)
    expect(wrapper).toMatchSnapshot();
});
