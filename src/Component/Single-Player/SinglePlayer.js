import { faMoneyCheckAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import './SinglePlayer.css';

const SinglePlayer = (props) => {
    const {image , name , club, salary} = props.player;

    const [isClicked, setIsClicked]=useState()
    return (
             <section className="text-center ">
                <div className="card d-flex  text-white ">
                    <div className="image">
                        <img className="justify-content-center" src={image} alt="..." />
                    </div>
                    <div className="card-body">
                        <h6>{name}</h6>
                        <p className="fw-bold"> {club}</p>
                        <h6>Salary:${salary}</h6>
                        <button disabled={isClicked} 
                         onClick={() =>  {
                        props.handleAddPlayer(props.player)
                        setIsClicked(true) 
                     }} 
                      className="btn btn-warning"> Hire Me <FontAwesomeIcon icon={faMoneyCheckAlt} /> 
                    </button>
                    </div>    
                </div>
             </section>
    );
};

export default SinglePlayer;

<p>
         
        </p>