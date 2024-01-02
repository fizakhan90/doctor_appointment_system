import {BrowserRouter, Routes, Route} from 'react-router-dom'
import homepage from './pages/homepage';
import login from './pages/login';
import register from './pages/register';
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<homepage/>} />
      <Route path='/login' element={<loginpage/>} />
      <Route path='/register' element={<register/>} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
