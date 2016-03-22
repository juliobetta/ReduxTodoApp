import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ALL, ACTIVE, COMPLETED } from '../constants/filters';
import FooterLink from '../containers/footer-link';
import { setVisibilityFilter } from '../actions/index';


export default () => {
  return (
    <center>
      <footer className="btn-group" role="group">
        <FooterLink visibilityFilter={ALL}       label="All" />
        <FooterLink visibilityFilter={COMPLETED} label="Completed" />
        <FooterLink visibilityFilter={ACTIVE}    label="Active" />
      </footer>
    </center>
  );
};
