import './App.css';
import { Box, CircularProgress, Container } from '@mui/material';
import defaultAvatar from './data/images/male-avatar.png'
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Workers from './components/Workers';
import Orders from './components/Orders';

const Home = React.lazy(() => import('./components/Home'))
const Login = React.lazy(() => import('./components/Login'))
const Signin = React.lazy(() => import('./components/Signin'))
const Products = React.lazy(() => import('./components/Products'))


function App() {
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()


  return (
    <>
      <NavBar isLogin={isLogin} setIsLogin={setIsLogin} defaultAvatar={defaultAvatar} />
      <Box sx={{ position: 'absolute', height: 'calc(100vh - 64px)', width: '100%', overflow: 'hidden' }}>
        <Routes>
          {/* Home page */}
          <Route path='/' element={
            <Suspense fallback={<CircularProgress />}>
              <Home isLogin={isLogin} setIsLogin={setIsLogin} defaultAvatar={defaultAvatar} />
            </Suspense>
          } />

          {/* Sign page */}
          <Route path='/sign-up' element={
            <Suspense fallback={<CircularProgress />}>
              <Signin setIsLogin={setIsLogin} navigate={navigate} defaultAvatar={defaultAvatar} />
            </Suspense>
          } />

          {/* login page */}
          <Route path='/log-in' element={
            <Suspense fallback={<CircularProgress />}>
              <Login setIsLogin={setIsLogin} navigate={navigate} defaultAvatar={defaultAvatar} />
            </Suspense>
          } />

          {/* products page */}
          <Route path='/products' element={
            <Suspense fallback={<CircularProgress />}>
              <Products />
            </Suspense>
          } />

          {/* dashboard page */}
          <Route path='/dashboard' element={
            <Suspense fallback={<CircularProgress />}>
              <Dashboard setIsLogin={setIsLogin} />
            </Suspense>
          } />

          {/* orders page */}
          <Route path='/orders' element={
            <Suspense fallback={<CircularProgress />}>
              <Orders setIsLogin={setIsLogin} />
            </Suspense>
          } />

          {/* users page */}
          <Route path='/users' element={
            <Suspense fallback={<CircularProgress />}>
              <Users setIsLogin={setIsLogin} defaultAvatar={defaultAvatar} />
            </Suspense>
          } />

          {/* workers page */}
          <Route path='/workers' element={
            <Suspense fallback={<CircularProgress />}>
              <Workers setIsLogin={setIsLogin} defaultAvatar={defaultAvatar} />
            </Suspense>
          } />
        </Routes>
      </Box>
    </>
  );
}

export default App;
