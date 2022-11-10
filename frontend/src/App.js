import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";
import Switch from '@mui/material/Switch';
import SalesPage from './pages/SalesPage';
import Inventories from './pages/Inventories';
import Admin from './pages/Admin'
import AdminDashboard from './pages/AdminDashboard'





export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className='container' id={theme}>

          <Routes>
           <Route path='/' element={<Dashboard/>} />
           <Route path='/admindashboard' element={<AdminDashboard/>} />
           <Route path='/login' element={<Login/>} />
           <Route path='/admin' element={<Admin/>} />
           <Route path='/register' element={<Register/>} />
           <Route path='/salespage' element={<SalesPage/>} />
           <Route path='/inventories' element={<Inventories/>} />
           
           
          </Routes>
          <div className="switch">
          <label> {theme === "" ? "Light Mode" : ""}</label>
          <Switch onChange={toggleTheme} checked={theme === "dark"} color='warning' disabled />
        </div>
        </div>
      </Router> 
      <ToastContainer />
      </ThemeContext.Provider>
    </>
  );
}



export default App;
