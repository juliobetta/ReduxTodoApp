import React from 'react';
import { ALL, ACTIVE, COMPLETED } from '../constants/filters';
import FooterLink from './todos-footer-link';


export default function ({onClickFilter, currentFilter}) {
  return (
    <center>
      <footer className="btn-group" role="group">
        <FooterLink onClickFilter={onClickFilter}
                    visibilityFilter={ALL}
                    currentFilter={currentFilter}
                    label="All" />

        <FooterLink onClickFilter={onClickFilter}
                    visibilityFilter={COMPLETED}
                    currentFilter={currentFilter}
                    label="Completed"/>

        <FooterLink onClickFilter={onClickFilter}
                    visibilityFilter={ACTIVE}
                    currentFilter={currentFilter}
                    label="Active" />
      </footer>
    </center>
  );
}
