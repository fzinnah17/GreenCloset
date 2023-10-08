import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/Hook.css';
import hookpic from './boutique.jpg';

const Hook = () => {
  return (
    <div className="hook">
      <h1 className="GC">Green Closet</h1>

      <body>
        <div className="page-container">
          <div className="label">
            <p className="text-wrapper">We believe in climate change, in zero waste and in charitable giving</p>
          </div>
          <div className="illustration" />
          <button className="view-btn">View</button>
        </div>
      </body>
    </div>
  );
};

export const Button = ({ button1 }) => {
  const [state, dispatch] = useReducer(reducer, {
    button1: button1 || 'default',
  });

  return (
    <button
      className={`button ${state.button1}`}
      onMouseLeave={() => {
        dispatch('mouse_leave');
      }}
      onMouseEnter={() => {
        dispatch('mouse_enter');
      }}
      onClick={() => {
        dispatch('click');
      }}
    >
      <div className="get-started">GET STARTED</div>
    </button>
  );
};

function reducer(state, action) {
  if (state.button1 === 'default') {
    switch (action) {
      case 'mouse_enter':
        return {
          button1: 'hover',
        };
      default:
        return state;
    }
  }

  if (state.button1 === 'hover') {
    switch (action) {
      case 'mouse_leave':
        return {
          button1: 'default',
        };
      case 'click':
        return {
          button1: 'clicked',
        };
      default:
        return state;
    }
  }

  return state;
}

Button.propTypes = {
  button1: PropTypes.oneOf(['clicked', 'hover', 'default']),
};

export default Hook;
