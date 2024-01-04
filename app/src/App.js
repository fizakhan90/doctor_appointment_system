import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/homepage';
import Login from './pages/login';
import Register from './pages/register';
import{useSelector} from "react-redux";
import Spinner from './components/Spinner';
function App() {
  const {loading} = useSelector(state => state.alerts)
  return (
    <>
     <BrowserRouter>
     {loading ? (<Spinner /> 
     ) : (
     <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      </Routes>
     
     )}
     </BrowserRouter>
     
    </>
  );
}

export default App;
