import './App.css';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './Pages/Home';
import About from './Pages/About';
import Resume from './Pages/Resume';

function App() {
  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/resume' element={<Resume/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
