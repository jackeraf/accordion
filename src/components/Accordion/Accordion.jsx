import React from 'react';
import './Accordion.scss';

const Accordion = (props) => {
  const styles = {
    display: props.show === true ? 'block' : 'none',
  };
  return (
    <div>
      <dt
        className={`Accordion-dt Accordion${props.show === true ? '-active' : ''}`}
        onClick={props.onSectionClick}
      >Section {props.number}
      </dt>
      <dd
        className="Accordion-panel"
        style={styles}
      >
        <p >{`Section ${props.number} Content...`}</p>
      </dd>
    </div>

  );
};

export default Accordion;
