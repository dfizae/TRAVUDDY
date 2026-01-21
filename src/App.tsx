import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/main'
import GuidePage from './pages/GuidePage'
import Gnb from './components/Gnb'
import Footer from './components/Footer'
import GuideInformation from './pages/GuidePage/GuideInformation'

function App() {

  return (
    <>
      <BrowserRouter>
        <Gnb/>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/Guide" element={<GuidePage />} />
            <Route path="/Guide/:name" element={<GuideInformation />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
