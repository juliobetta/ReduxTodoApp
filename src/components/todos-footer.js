import React from 'react';
import { ALL, ACTIVE, COMPLETED } from '../constants/filters';
import FooterLink from './todos-footer-link';


export default function ({onClickFilter, currentFilter}) {
  return (
    <center>
      <footer className="btn-group" role="group">
        <FooterLink onClickFilter={(e) => onClickFilter(e, ALL)}
                    visibilityFilter={ALL}
                    currentFilter={currentFilter}
                    label="All" />

        <FooterLink onClickFilter={(e) => onClickFilter(e, COMPLETED)}
                    visibilityFilter={COMPLETED}
                    currentFilter={currentFilter}
                    label="Completed"/>

        <FooterLink onClickFilter={(e) => onClickFilter(e, ACTIVE)}
                    visibilityFilter={ACTIVE}
                    currentFilter={currentFilter}
                    label="Active" />
      </footer>
    </center>
  );
}
