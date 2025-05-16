import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Blog from './components/home-page/Blog.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
