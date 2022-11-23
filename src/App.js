import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restuarantlist from './components/Restuarantlist';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import VeiwRestuarant from './components/VeiwRestuarant';

function App() {
  return (
    <div className="App">
     <Router>
        <header className="App-header">
          <Header/>
        </header>
        <Routes>
          <Route path='/' element={<Restuarantlist/>}  />
          <Route path='view-restuarant/:id' element={<VeiwRestuarant/>}  />

          </Routes>
        <Footer/>
     </Router>
    </div>
  );
}

export default App;
