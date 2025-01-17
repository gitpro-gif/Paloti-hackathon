import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Features from './components/Features'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'
import About from './components/About'
import Contact from './components/Contact'
import AdminDash from './DashBoard/AdminDash'
import StudentDash from './DashBoard/StudentDash'
import PersonalizedAi from './AI/PersonalizedAi'
import AskGuruji from './AI/AskGuruji'
import AiRecommendation from './AI/AiRecommendation'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      
        <Routes>
          <Route path='/' element = {<Landing />} />
          <Route path='/features' element = {<Features />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/signup' element = {<SignUp />} />
          <Route path='/about' element = {<About />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/admin' element = {<AdminDash />} />
          <Route path='/student' element = {<StudentDash />} />
          <Route path='/personalized-ai' element = {<PersonalizedAi />} />
          <Route path='/ask-guruji' element = {<AskGuruji />} />
          <Route path='/ai-recommendation' element = {<AiRecommendation />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
