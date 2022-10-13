import './App.css';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div className='container' >
      <Navbar />
      <Project />
      <Contact />
      <Footer />


    </div>
  );
}

export default App;
