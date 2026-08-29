import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { TooltipProvider } from '@/components/ui/tooltip'
import { AppStoreProvider } from '@/store/AppStore'
import { ToastProvider } from '@/store/toast'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppStoreProvider>
        <ToastProvider>
          <TooltipProvider delayDuration={200}>
            <App />
          </TooltipProvider>
        </ToastProvider>
      </AppStoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
