import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from './components/ProjectDetail.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/project-detail/ecommerce' element={<ProjectDetail/>}></Route>
      </Routes>
      
    </Router>
  </StrictMode>,
)
