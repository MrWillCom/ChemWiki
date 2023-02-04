import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/Home'
import './index.scss'
import { ThemeProvider, BaseStyles } from '@primer/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BaseStyles>
      <ThemeProvider colorMode="auto">
        <RouterProvider router={router} />
      </ThemeProvider>
    </BaseStyles>
  </React.StrictMode>,
)
