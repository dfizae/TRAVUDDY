import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './pages/main'
import RecommendedPage from './pages/RecommendedPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/recommended" element={<RecommendedPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
