import './App.css';
import Navbar from './Shared/Navbar';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom";
import Blogs from './Pages/Blogs';
import SingleProject from './Pages/SingleProject/SingleProject';
import TSParticles from './TSParticles';
import ScrollToTopButton from './Shared/ScrollToTopButton';
import WhatsApp from './Shared/Whatsapp';

function App() {
  return (
    <div style={{ overflow: 'hidden' }} >
      <TSParticles />

      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='project/:id' element={<SingleProject></SingleProject>}></Route>
      </Routes>
      <ScrollToTopButton></ScrollToTopButton>
      <ToastContainer></ToastContainer>
      <WhatsApp></WhatsApp>
    </div>
  );
}

export default App;
