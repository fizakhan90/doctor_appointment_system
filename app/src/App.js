import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/homepage';
import Login from './pages/login';
import Register from './pages/register';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/'
       element={<ProtectedRoute>
          <Homepage/> 
        </ProtectedRoute>} />
      <Route path='/login' element={
      <PublicRoute><Login/>
      </PublicRoute>} />
      <Route path='/register' element={
      <PublicRoute><Register/>
      </PublicRoute>} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
