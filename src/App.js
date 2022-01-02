import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile/Profile';
import About from './Components/About/About';
import Interest from './Components/Interest/Interest';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className = 'digital-card'>
      <Profile/>
      <About/>
      <Interest/>
      <Footer/>
    </div>
  );
}

export default App;
