import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage";
import Login from "./pages/login";
import Register from "./pages/register";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import ApplyDoctor from "./pages/ApplyDoctor";
import NotificationPage from "./pages/NotificationPage";
import Users from "./pages/admin/Users";
import Doctors from "./pages/admin/Doctors";
import Profile from "./pages/doctor/Profile";
import BookingPage from "./pages/BookingPage";
import Appointments from "./pages/Appointments";
import DoctorAppointments from "./pages/doctor/DoctorAppointments";
function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <>

     <BrowserRouter>
     {loading ? (<Spinner /> 
     ) : (
     <Routes>
      <Route path='/'
       element={<ProtectedRoute>
          <Homepage/> 
        </ProtectedRoute>} />
        <Route path='/apply-doctor'
       element={<ProtectedRoute>
          <ApplyDoctor/> 
        </ProtectedRoute>} />
        <Route path='/notification'
       element={<ProtectedRoute>
          <NotificationPage/> 
        </ProtectedRoute>} />
        <Route path='/admin/users'
       element={<ProtectedRoute>
          <Users/> 
        </ProtectedRoute>} />
        <Route path='/admin/doctors'
       element={<ProtectedRoute>
          <Doctors/> 
        </ProtectedRoute>} />
      <Route path='/home-page' element={
      <PublicRoute><LandingPage/>
      </PublicRoute>} />
      <Route path='/register' element={
      <PublicRoute><Register/>
      </PublicRoute>} />
      </Routes>
     
     )}
     </BrowserRouter>
     

    </>
  );
}

export default App;