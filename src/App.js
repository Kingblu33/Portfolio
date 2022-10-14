import './App.css';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Resume from './Pages/Resume/Resume';
import ShowProject from './Pages/ShowOneProject/ShowProject';
function App() {
  return (
    <div className='container' >

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/view/resume' element={<Resume />} />
          <Route path='/project/:id' element={<ShowProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
