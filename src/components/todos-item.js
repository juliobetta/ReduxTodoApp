import React from 'react';
import classNames from 'classnames';


export default ({onClickTodo, id, title, isCompleted}) => {
  const itemClassNames = classNames({
    'completed': isCompleted,
    'list-group-item': true
  });

  return (
    <li className={itemClassNames}
        onClick={() => onClickTodo(id)}>
      {title}
    </li>
  )
};
