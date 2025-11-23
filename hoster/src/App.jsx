import { Routes, Route } from 'react-router-dom';
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar.jsx"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Profile from "./pages/Profile.jsx"
import Signup from "./pages/Signup.jsx"
import HelpCenter from './pages/HelpCenter.jsx';
import TermsAndCondition from './pages/TermsAndConditions.jsx';
import Community from './pages/Community.jsx';
import Report from './pages/Report.jsx';

function App() {

  return (
    <>
      <div className='bg-slate-50 min-h-screen'>
        <Navbar />
        <div className='w-full mr-10 px-10'>
          <div className='bg-white min-h-screen rounded-xl p-2'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/help' element={<HelpCenter />} />
              <Route path='/report' element={<Report />} />
              <Route path='/terms' element={<TermsAndCondition />} />
              <Route path='/community' element={<Community />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}


export default App
