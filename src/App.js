import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About1 from './pages/About1';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import OurAlbum from './pages/OurAlbum';
import OurProcess from './pages/OurProcess';
import OurTeam from './pages/OurTeam';
import Products from './pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about1' element={<About1 />} />
        <Route path='/our-process' element={<OurProcess />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/products' element={<Products />} />
        <Route path='/our-album' element={<OurAlbum />} />
        <Route path='/our-team' element={<OurTeam />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
