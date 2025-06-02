import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { Route,Routes,Navigate } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NotFound from './components/NotFound';

function App() {

  function Logout(){
    localStorage.clear()
    return <Navigate to="/login"/>
  }

  function RegisterAndLogout(){
    localStorage.clear()
    return <Register/>
  }
  

  return (
    <>
      <Routes>
        
          <Route path='/' element={<ProtectedRoute>
              <Home/>
            </ProtectedRoute>}/>
            
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<RegisterAndLogout/>}/>
            <Route path='*' element={<NotFound/>}/>


        
      </Routes>
    </>
    
  )
}

export default App
