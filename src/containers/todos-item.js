import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { toggleTodo } from '../actions/index';


class TodosItem extends Component {

  render() {
    const {onClickTodo, id, title, isCompleted} = this.props;

    const itemClassNames = classNames({
      'completed': isCompleted,
      'list-group-item': true
    });

    return (
      <li className={itemClassNames}
          onClick={() => this.props.toggleTodo(id)}>
        {title}
      </li>
    );
  }

};


export default connect(
  null,
  { toggleTodo }
)(TodosItem);
