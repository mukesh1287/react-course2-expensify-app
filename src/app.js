import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './stores/configure-store'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    console.log(getVisibleExpenses(state.expenses, state.filters));
});

store.dispatch(addExpense({
    description: 'Phone Bill',
    notes: 'Phone Bill',
    amount: 500,
    createdAt: 1000
}));

store.dispatch(addExpense({
    description: 'Water Bill',
    notes: 'Water Bill',
    amount: 1500,
    createdAt: 100
}));

store.dispatch(addExpense({
    description: 'Rent',
    notes: 'Rent',
    amount: 100,
    createdAt: 3000
}));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>);

ReactDOM.render(jsx, document.getElementById('app'));