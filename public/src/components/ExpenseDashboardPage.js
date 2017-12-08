import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';
import Header from './Header';

const ExpenseDashboardPage = () => (
    <div>
        <Header />

        <ExpenseSummary />

        
        
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;