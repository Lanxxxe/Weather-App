import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './weather-icons/css/weather-icons.css'
import './weather-icons/css/weather-icons-wind.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { useEffect } from 'react';
import Hompage from './pages/Homepage';
import Introduction from './pages/Introduction';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Introduction />}></Route>
          <Route path='/homepage' element={<Hompage />}></Route>
        </Routes>
      </Router>
    </>
  )

}

export default App
