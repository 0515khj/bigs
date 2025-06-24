import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import userStore from './store/userStore.js'

export const StoreContext = createContext({
  userStore
})

createRoot(document.getElementById('root')).render(
  <StoreContext.Provider value={{ userStore }}>
    <App />
  </StoreContext.Provider>
)
