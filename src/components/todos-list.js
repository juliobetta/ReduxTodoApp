import React from 'react';
import TodosItem from './todos-item';


export default ({onClickTodo, todos}) => {
  return (
    <ul className="list-group">
      {
        todos.map((todo) => {
          return <TodosItem key={todo.id} onClickTodo={onClickTodo} {...todo} />;
        })
      }
    </ul>
  );
};
