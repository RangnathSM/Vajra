
import './App.css';
import Footer from './Components/footer';
import Login from './Components/login';
import Navbar from './Components/navbar';
import Store from './Components/store';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Login/>
      <Store/>
      <Footer/>
    </div>
  );
}

export default App;
