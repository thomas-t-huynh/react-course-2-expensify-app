import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpenses } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    
    onSubmit = ( expense ) => {
        this.props.startAddExpenses(expense);
        this.props.history.push('/dashboard');
    };

    render() {
       return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Add expense</h1>
                    </div>
                </div>
                    <div className="content-container">
                        <ExpenseForm
                            onSubmit={this.onSubmit}
                        />
                    </div>    
            </div>
       );
    };
};

const mapDispatchToProps = (dispatch) => ({ startAddExpenses: (expense) => dispatch(startAddExpenses(expense)) });
        

export default connect(undefined , mapDispatchToProps)(AddExpensePage);
