// import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import MyHome from './components/MyHome'
import MyProfile from './components/MyProfile'
import ContactUs from './components/ContactUs'
import Nav from './components/Nav'
import AboutUs from './components/AboutUs';

import MyMainForms from './MyMainForms/MyMainForms';

function App() {
/* the path is what you see on the website's url ie .com/profile
npm install, npm install react-router-dom, then go to main.jsx
IMPORTANT: Only use Router ONCE. So start from the the Routes when adding the MyMainForms into the navbar*/
  return (
    <Router>
      <Nav />
      <div className='container'>
        <Routes>
          
          
          <Route path="/" element={<MyHome />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/mymainforms/*" element={<MyMainForms />} /> 

          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
