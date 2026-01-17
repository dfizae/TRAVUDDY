import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/main'
import RecommendedPage from './pages/RecommendedPage'
import Gnb from './components/Gnb'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Gnb/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/recommended" element={<RecommendedPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
