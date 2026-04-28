import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/main'
import Footer from './components/Footer'
import GuideInformation from './pages/GuideInformation'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main isSidebarOpen={isSidebarOpen} onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} />} />
            <Route path="/Guide/:name" element={<GuideInformation />} />
          </Routes>
        <Footer isSidebarOpen={isSidebarOpen} />
      </BrowserRouter>
    </>
  )
}

export default App
