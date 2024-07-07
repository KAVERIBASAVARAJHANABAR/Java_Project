import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Navbar from './Navbar';
import Ourwork from './Ourwork';
import Donate from './Donate';
import Register from './Register';
import Footer from './Footer';
import Ourproject from './Ourproject';
import Community from './Community';
import Profile from './Profile';
import Compare from './Compare';




function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes> 
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="ourwork" element={<Ourwork/>}/>
        <Route path="Donate" element={<Donate/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="Ourproject" element={<Ourproject/>}/>
        <Route path="Community" element={<Community/>}/>
        <Route path="Profile" element={<Profile/>}/>
        
        <Route path="Compare" element={<Compare/>}/>
      </Routes>
      
      <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
