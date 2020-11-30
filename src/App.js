import './App.css'
import './css/main.css'

import { Route, BrowserRouter as Router } from 'react-router-dom'

import BackendCourse from './pages/BackendCourse'
import FrontendCourse from './pages/FrontendCourse'
import LandingPage from './pages/LandingPage'
import MobileCourse from './pages/MobileCourse'

function App() {
  return (
    <div className='font-sans bg-gradient-to-r from-gray-300 to-gray-100 App '>
      <Router>
        <Route exact path='/' component={LandingPage}></Route>
        <Route path='/frontend' component={FrontendCourse}></Route>
        <Route path='/backend' component={BackendCourse}></Route>
        <Route path='/mobile' component={MobileCourse}></Route>
      </Router>
    </div>
  )
}

export default App
