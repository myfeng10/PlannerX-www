import React from 'react';
import { AuthProvider } from './AuthContext';
import './App.css';
import{Route,Routes} from "react-router-dom";
import Footer from './components/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import AddPlan from './pages/AddPlan';
import NavBar from './components/NavBar';
import Setting from './pages/Setting';

function App() {
  return (
    <>
    <AuthProvider>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<WithNavBar />} />

        </Routes>
        <Footer />
    </AuthProvider>
     

    </>
  );
}


const WithNavBar = () => {
  return (
    <>
      <NavBar />
      <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addPlan" element={<AddPlan />} />
          <Route path="/setting" element={<Setting />} />
      </Routes>
    </>
  );
};

export default App;
