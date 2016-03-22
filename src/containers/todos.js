import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ALL, COMPLETED, ACTIVE } from '../constants/filters';
import { addTodo, toggleTodo } from '../actions/index';
import TodosFooter from '../components/todos-footer';
import TodosAdd from '../components/todos-add';
import TodosList from '../components/todos-list';


class Todos extends Component {

  onSubmitForm(event, input) {
    event.preventDefault();

    this.props.addTodo({ title: input.value });
    input.value = '';
  }


  getTodos() {
    switch(this.props.visibilityFilter) {
      case ALL:
      return this.props.todos;

      case ACTIVE:
      return this.props.todos.filter((todo) => !todo.isCompleted);

      case COMPLETED:
      return this.props.todos.filter((todo) => todo.isCompleted);
    }
  }


  render() {
    return (
      <div className="col-xs-6 col-center">
        <TodosAdd onSubmitForm={this.onSubmitForm.bind(this)} />
        <TodosList todos={this.getTodos()} onClickTodo={this.props.toggleTodo}/>
        <TodosFooter />
      </div>
    );
  }

}


export default connect(
  (state) => ({todos: state.todos, visibilityFilter: state.visibilityFilter}),
  {addTodo, toggleTodo}
)(Todos);
