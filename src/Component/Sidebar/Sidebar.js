import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Sidebar.css';

const Sidebar = ({cart}) => {
    console.log(cart);
   const total = cart.reduce((acc, curr) => acc + curr.salary, 0)
    return (
        <aside className=" col-md-4 ps-5  ">
            <div className="sidebar">
                <h1>Total Selected Players:{cart.length}</h1>
                <div className="player-details">
                    {
                        cart.map((player)=> <h3>{player.name}-<span>${player.salary}</span></h3>)
                    }
                </div>
                <h1 className="text-center">Total Cost : (${total}) </h1>
                <button
                 type="button" class="btn bg-color"> PAY SALARY 
                <span className="ms-2"><FontAwesomeIcon icon={faCreditCard} /></span>
                </button>
            </div>
         </aside>
    
    );
};

export default Sidebar;