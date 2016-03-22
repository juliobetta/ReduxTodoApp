import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';


class TodosForm extends Component {

  constructor(props) {
    super(props);

    this.state = { title: null };
  }


  onSubmitForm(event) {
    event.preventDefault();

    this.props.addTodo({ title: this.state.title });
    this.setState({ title: '' });
  }


  onChangeInput(event) {
    this.setState({ title: event.target.value });
  }


  render() {
    this.input = null;

    return (
      <form onSubmit={this.onSubmitForm.bind(this)} className="input-group">
        <input type="text"
               placeholder="What do you have to do?"
               className="form-control"
               onChange={this.onChangeInput.bind(this)}
               value={this.state.title}/>

        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Submit</button>
        </span>
      </form>
    );
  }

}


export default connect(
  null, { addTodo }
)(TodosForm);
