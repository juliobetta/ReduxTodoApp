import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';


class FooterLink extends Component {

  render() {
    const {visibilityFilter, label, currentFilter} = this.props;

    return (
      <button type="button"
              className="btn btn-secondary"
              disabled={currentFilter === visibilityFilter ? 'disabled' : ''}
              onClick={() => this.props.setVisibilityFilter(visibilityFilter)}>
        {label}
      </button>
    );
  }

}


export default connect(
  (state) => ({currentFilter: state.visibilityFilter}),
  { setVisibilityFilter }
)(FooterLink);
