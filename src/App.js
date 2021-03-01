import React, { useState } from 'react';
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import PlayerContainer from './Component/Players-Container/PlayerContainer';
import Sidebar from './Component/Sidebar/Sidebar';

function App() {
  const [cart, setCart] = useState([ ]);
  
  const  handleAddPlayer = (player) => {
    const newCart = [...cart , player];
    setCart(newCart)
  }

  return (
    <> 
        <Header></Header>
           <main className="container ">
              <div className="row">
                  <PlayerContainer handleAddPlayer={handleAddPlayer}></PlayerContainer>
                  <Sidebar cart={cart}></Sidebar>
              </div>
          </main>
        <Footer></Footer>
    </>
  );
}

export default App;
