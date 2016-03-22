import React from 'react';
import { Component } from 'react';
import TodosList from '../containers/todos-list';
import TodosForm from '../containers/todos-form';
import TodosFooter from './todos-footer';



export default class App extends Component {
  render() {
    return (
      <div className="col-xs-6 col-center">
        <TodosForm />
        <TodosList />
        <TodosFooter />
      </div>
    );
  }
}
