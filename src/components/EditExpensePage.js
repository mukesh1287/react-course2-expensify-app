import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            <ExpenseForm expense={props.expense} onSubmit={(expense) => {
                console.log(expense);
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push("/");
            }} />
            <button onClick={() => {
                console.log(props.expense.id);
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push("/");
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};
export default connect(mapStateToProps)(EditExpensePage);