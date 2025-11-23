import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import BookStay from './pages/BookStay.jsx'
import Career from './pages/Career.jsx'
import Cancellation from './pages/Cancellation.jsx'
import HelpCenter from './pages/HelpCenter.jsx'
import Report from './pages/Report.jsx'
import TermsAndCondition from './pages/TermsAndCondition.jsx'
import Community from './pages/Community.jsx'
import Category from './pages/Category.jsx'
import ProductPage from './pages/ProductPage.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Profile from './pages/Profile.jsx'

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
              <Route path='/bookstay' element={<BookStay />} />
              <Route path='/career' element={<Career />} />
              <Route path='/cancellation' element={<Cancellation />} />
              <Route path='/help' element={<HelpCenter />} />
              <Route path='/report' element={<Report />} />
              <Route path='/terms' element={<TermsAndCondition />} />
              <Route path='/community' element={<Community />} />
              <Route path='/city/:city' element={<Category />} />
              <Route path='/product/:productId' element={<ProductPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
