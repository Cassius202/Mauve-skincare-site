import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { I18nextProvider } from 'react-i18next'
import App from './App.tsx'

import i18n from './utils/i18n.ts'

import PropProvider from './contexts/PropProvider.tsx' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <I18nextProvider i18n={i18n}>
     <PropProvider>
      <App />
    </PropProvider>
   </I18nextProvider>
  </StrictMode>,
) 
