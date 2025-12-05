import React from 'react';
import { useGlobalContext } from './context';

const Navbar = () => {
  const { amount } = useGlobalContext();

  return (
    <nav>
      <div className="nav-center">
        <h3>cart</h3>
        <div className="nav-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="cart-icon"
          >
            <path d="M16 6H4l-1 9h14l-1-9zM6 2h8l1 3H5l1-3z" />
          </svg>
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
