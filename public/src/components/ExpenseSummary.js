import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/Expenses-total';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

export const ExpenseSummary = ({ expenseCount , expensesTotal , totalExpenses }) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;    
    const formattedExpensesTotal = numeral (expensesTotal / 100 ).format('$0,0.00');
    return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
                    <h3 className="page-header__sub-title">Total number of expenses:<span>{totalExpenses}</span></h3>
                    <div className="page-header__actions">
                        <Link to="/create" className="button">Add Expense</Link>
                    </div>
                </div>
            </div>
        );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses , state.filters);
    
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses),
        totalExpenses: state.expenses.length

    };
};

export default connect(mapStateToProps)(ExpenseSummary);