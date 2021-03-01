import React from 'react';
import players from '../../fakeData/fakeData.json';
import SinglePlayer from '../Single-Player/SinglePlayer';
import './PlayerContainer.css';

const PlayerContainer = (props) => {
   
    return (
        <section className="players col-md-8  border-end shadow-lg">
            <div className="row row-cols-4 gy-3 ">
                
                    {
                        players.map( player=> <SinglePlayer   handleAddPlayer={props.handleAddPlayer}     key={player.id} player={player}></SinglePlayer> )
                    }
                    
            </div>
       </section>
    );
};

export default PlayerContainer;