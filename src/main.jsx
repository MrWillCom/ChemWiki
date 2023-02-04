import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { ThemeProvider, BaseStyles, Box } from '@primer/react'
import '@primer/css/color-modes/index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/Home'
import ElementsPage from './pages/Elements'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BaseStyles>
      <ThemeProvider colorMode="auto">
        <Router>
          <NavBar />
          <Box sx={{ paddingTop: 43 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/definitions" element={<></>} />
              <Route path="/elements" element={<ElementsPage />} />
              <Route path="/substances" element={<></>} />
              <Route path="/experiments" element={<></>} />
              <Route path="/appendix" element={<></>} />
            </Routes>
          </Box>
        </Router>
      </ThemeProvider>
    </BaseStyles>
  </React.StrictMode>,
)
