import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "antd/dist/reset.css";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
  {/* Global toast notifications */}
   <Toaster position="top-center" reverseOrder={false} />
      <App />
  </BrowserRouter>


)
