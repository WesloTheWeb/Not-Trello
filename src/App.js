import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Board from './containers/Board/Board';
import CreateTicketModal from './containers/CreateTicketModal/CreateTicketModal';
import { ModalContext } from './Contexts/ModalContext';

function App() {

  const [modal, isModal] = useState(false);

  return (
    <div className="App">
      <ModalContext.Provider value={{modal, isModal}}>
        <Header />
        <Board />
        {modal ?
          <CreateTicketModal /> : null
        }
      </ModalContext.Provider>
      <Footer />
    </div>
  );
}

export default App;