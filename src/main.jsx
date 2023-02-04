import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/Home'
import './index.scss'
import { ThemeProvider, BaseStyles, Box } from '@primer/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BaseStyles>
      <ThemeProvider colorMode="auto">
        <Router>
          <NavBar />
          <Box
            sx={{
              paddingLeft: 16,
              paddingRight: 16,
              maxWidth: 1000,
              margin: 'auto',
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/definitions" element={<></>} />
              <Route path="/elements" element={<></>} />
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
