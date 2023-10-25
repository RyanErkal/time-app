import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import AuthProvider from './context/authContext';
import Dashboard from './pages/Dashboard';
import Focus from './pages/Focus';
import Todo from './pages/Todo';
import UserLayout from './layouts/UserLayout';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route element={<UserLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/focus" element={<Focus />} />
                <Route path="/todo" element={<Todo />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>

    </>
  );
}

export default App;
