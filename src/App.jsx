import React from 'react'; import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import Dashboard from './pages/Dashboard'; import TPDetail from './pages/TPDetail'; import Certificate from './pages/Certificate'; import Login from './pages/Login'; import Signup from './pages/Signup'; import Navbar from './components/Navbar'; import PrivateRoute from './routes/PrivateRoute';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path='/tp/:id' element={<PrivateRoute><TPDetail /></PrivateRoute>} />
      <Route path='/certificate' element={<PrivateRoute><Certificate /></PrivateRoute>} />
    </Routes>
  </Router>
);

export default App;