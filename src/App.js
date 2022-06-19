import './App.css';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Pages/Navbar/Navbar';
import About from './components/Pages/About/About';
import Contact from './components/Pages/contact/Contact';
import Projects from './components/Pages/projects/Projects';
import Cta from './components/Pages/Cta/Cta';
import Resume from './components/Pages/resume/Resume';
import Accordion from './components/Pages/Accordion/Accordion';
import Testimonial from './components/Pages/Testimonial/Testimonial';
import Footer from './components/Pages/Footer/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainRoutes from './MainRoutes';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
<Router >
    <Navbar />
        <Routes>
          <Route path='/' element={<MainRoutes />} />
          <Route path='about' element={<About/>} />
          <Route path='portfolio' element={<Projects/>} />
          <Route path='testimonial' element={<Testimonial/>} />
          <Route path='faq' element={<Accordion/>} />
          <Route path='contact' element={<Contact/>} />
        </Routes>
    <Footer />
</Router>
  );
}

export default App;
