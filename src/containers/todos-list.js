import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ALL, ACTIVE, COMPLETED } from '../constants/filters';
import TodosItem from './todos-item';


class TodosList extends Component {

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
      <ul className="list-group">
        {
          this.getTodos().map((todo) => {
            return <TodosItem key={todo.id} {...todo} />;
          })
        }
      </ul>
    );
  }

};


export default connect(
  (state) => ({todos: state.todos, visibilityFilter: state.visibilityFilter})
)(TodosList);
