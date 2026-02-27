import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/main'
import Footer from './components/Footer'
import GuideInformation from './pages/GuideInformation'

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/Guide/:name" element={<GuideInformation />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
