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
      {process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}
      <ModalContext.Provider value={{ modal, isModal }}>
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