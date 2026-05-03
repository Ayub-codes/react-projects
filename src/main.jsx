// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Authcontext from './context/Authcontext.jsx'
// import TaskCOntext from './context/taskCOntext.jsx'

// createRoot(document.getElementById('root')).render(
 
//     <Authcontext>
//       <TaskCOntext>
//         <App/>
//       </TaskCOntext>

//     </Authcontext>
  
// )
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <App />
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './Context/AuthProvider.jsx'



createRoot(document.getElementById('root')).render(
  
      <AuthProvider>
        <App />
      </AuthProvider>
  
)