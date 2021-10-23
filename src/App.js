import './App.css';
import Header from './components/Header/Header';
import Board from './containers/Board/Board';
import CreateTicketModal from './containers/CreateTicketModal/CreateTicketModal';

function App() {
  return (
      <div className="App">
        <Header />
        <Board />
        <CreateTicketModal />
      </div>
   );
}

export default App;