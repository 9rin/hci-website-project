import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import Prototypes from './pages/Prototypes'
import Videos from './pages/Videos'
import Team from './pages/Team'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 scroll-smooth">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/prototypes" element={<Prototypes />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

