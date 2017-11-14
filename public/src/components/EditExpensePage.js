import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense , startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

   onSubmit = ( expense ) => {
        this.props.startEditExpense(this.props.expense.id , expense);
        this.props.history.push('/dashboard');
   };

   onRemove = () => {
       this.props.startRemoveExpense( {idToRemove: this.props.expense.id} );
       this.props.history.push('/dashboard');
   };
   
   render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense} 
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>Remove</button>
            </div>
        );
    };
};

const mapStateToProps = (state , props) => {
    return {
        expense: state.expenses.find((expense) =>  expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch , props) => ({ 
    startEditExpense: (id, updates) => dispatch(startEditExpense(id , updates)),
    startRemoveExpense: (idToRemove) => dispatch(startRemoveExpense(idToRemove))
});



export default connect(mapStateToProps , mapDispatchToProps)(EditExpensePage);